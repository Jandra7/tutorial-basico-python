/* UI: tema claro/oscuro y menú lateral */

function setTheme(t){
  document.documentElement.dataset.theme = t;
  $("#themeBtn").textContent = t === "dark" ? "☀️" : "🌙";
  saveTheme(t);
}

/* ---------- Menú lateral móvil ---------- */
function toggleMenu(open){
  $("#sidebar").classList.toggle("open", open);
  $("#backdrop").classList.toggle("open", open);
  $("#menuBtn").setAttribute("aria-expanded", open);
}
