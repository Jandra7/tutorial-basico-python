/* UI: eventos (delegación) */

function bindEvents(){
  document.addEventListener("click", async e => {
    const t = e.target.closest("button, a");
    if (!t) { $("#searchResults").classList.remove("open"); return; }

    if (t.matches(".copy")){
      const ok = await copyText(t.closest(".code").querySelector("code").textContent);
      t.textContent = ok ? "✓ Copiado" : "✗ Error"; t.classList.add("ok");
      setTimeout(() => { t.textContent = "📋 Copiar"; t.classList.remove("ok"); }, 1800);
    }
    else if (t.matches(".show-sol")){
      const sol = document.getElementById(t.getAttribute("aria-controls"));
      const open = sol.classList.toggle("open");
      t.textContent = open ? "🙈 Ocultar solución" : "👁️ Mostrar solución";
      t.setAttribute("aria-expanded", open);
    }
    else if (t.dataset.complete) toggleComplete(t.dataset.complete);
    else if (t.dataset.action) runAction(t.dataset.action);
    else if (t.matches("[data-check],[data-hint]")){
      const box = t.closest(".quiz"), fb = $(".feedback", box);
      const quiz = MODULES.find(m => m.id === box.dataset.module).quiz;
      if (t.matches("[data-hint]")){ fb.className = "feedback"; fb.textContent = "💡 Respuesta: " + quiz.hint; return; }
      const val = $("input", box).value.trim().replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, " ");
      const ok = quiz.re.test(val);
      fb.className = "feedback " + (ok ? "ok" : "bad");
      fb.textContent = ok ? "✅ ¡Correcto! Muy bien." : "❌ No es correcto, inténtalo de nuevo.";
    }
    else if (t.id === "themeBtn") setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    else if (t.id === "settingsBtn"){
      const open = $("#settingsMenu").classList.toggle("open");
      t.setAttribute("aria-expanded", open);
    }
    else if (t.id === "resetProgress"){
      if (confirm("¿Reiniciar todo tu progreso?")){ saveProgress([]); updateProgressUI(); }
    }
    else if (t.id === "exportBtn"){
      const open = $("#exportMenu").classList.toggle("open");
      t.setAttribute("aria-expanded", open);
      if (open) $("#exportMenu button").focus();
    }
    else if (t.id === "menuBtn" || t.id === "bottomMenu") toggleMenu(!$("#sidebar").classList.contains("open"));
    else if (t.id === "bottomSearch"){ window.scrollTo({top:0}); $("#search").focus(); }

    if (t.matches("a[href^='#']")){ toggleMenu(false); $("#searchResults").classList.remove("open"); }
    // Cerrar los menús desplegables que no contienen el elemento pulsado
    $$(".dropdown .menu").forEach(m => { if (!m.parentElement.contains(t)) m.classList.remove("open"); });
  });

  $("#backdrop").addEventListener("click", () => toggleMenu(false));
  $("#search").addEventListener("input", e => search(e.target.value));
  $("#glossSearch").addEventListener("input", e => renderGlossary(e.target.value));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape"){ toggleMenu(false); $$(".dropdown .menu").forEach(m => m.classList.remove("open")); $("#searchResults").classList.remove("open"); }
    if (e.key === "Enter" && e.target.matches(".quiz input")) $("[data-check]", e.target.closest(".quiz")).click();
  });

  // Resaltar el módulo visible en el índice lateral
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) $$(".toc a").forEach(a => a.classList.toggle("active", a.dataset.id === en.target.id));
  }), {rootMargin:"-40% 0px -55% 0px"});
  $$("section[id]").forEach(s => io.observe(s));
}
