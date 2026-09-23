/* UI: plantillas HTML reutilizables */

const codeBlock = (code, lang = "Python") =>
  `<div class="code"><div class="code-bar"><span>${lang}</span><button class="copy" type="button" aria-label="Copiar código">📋 Copiar</button></div><pre><code>${highlight(code)}</code></pre></div>`;

const sectionHTML = s => `<h3>${s.h}</h3>${s.p || ""}${s.code ? codeBlock(s.code) : ""}`;

function videoHTML(key){
  const v = VIDEOS[key];
  if (!v) return `<div class="video"><h4>🎥 Video recomendado</h4><p>Video recomendado pendiente de agregar</p></div>`;
  return `<div class="video"><h4>🎥 Video recomendado: ${v.title}</h4>
    <span class="by">Autor: <strong>${v.author}</strong> · Duración: ${v.duration}</span>
    <p style="margin:4px 0">${v.desc}</p>
    <a class="btn small" href="${v.url}" target="_blank" rel="noopener noreferrer">▶ Ver en YouTube</a></div>`;
}

function exercisesHTML(list, quiz, id){
  const items = list.map((e, i) => `<div class="ex"><span class="lvl">${LEVELS[e.lvl]}</span>
    <p><strong>Ejercicio ${i + 1}:</strong> ${e.q}</p>
    <button class="btn small show-sol" type="button" aria-expanded="false" aria-controls="sol-${id}-${i}">👁️ Mostrar solución</button>
    <div class="sol" id="sol-${id}-${i}"><p><em>Solución:</em></p>${codeBlock(e.sol)}</div></div>`).join("");
  const q = quiz ? `<div class="quiz" data-module="${id}"><p><strong>✍️ Ejercicio interactivo:</strong> ${quiz.q}</p>
    <div class="quiz-row"><input type="text" aria-label="Tu respuesta" placeholder="Escribe tu respuesta..." spellcheck="false" autocapitalize="off">
    <button class="btn small primary" type="button" data-check>Comprobar</button>
    <button class="btn small" type="button" data-hint>💡 Pista</button></div>
    <div class="feedback" aria-live="polite"></div></div>` : "";
  return `<div class="exercises"><h3>📝 Ejercicios</h3>${items}${q}</div>`;
}

function moduleFoot(id, idx, all){
  const prev = all[idx - 1], next = all[idx + 1];
  return `<div class="module-foot">
    <button class="btn complete" type="button" data-complete="${id}">☐ Marcar como completada</button>
    <div style="display:flex;gap:8px">
      ${prev ? `<a class="btn small" href="#${prev.id}" aria-label="Módulo anterior">← Anterior</a>` : ""}
      ${next ? `<a class="btn small" href="#${next.id}" aria-label="Siguiente módulo">Siguiente →</a>` : ""}
    </div></div>`;
}
