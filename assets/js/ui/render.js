/* UI: renderizado de la página */

const NAV = [...MODULES, PROJECT, {id:"cheatsheet", icon:"⚡", title:"Cheatsheet"}, {id:"glosario", icon:"📖", title:"Glosario"}];
const TRACKED = [...MODULES.map(m => m.id), PROJECT.id];

function render(){
  const all = [...MODULES, PROJECT];
  const html = MODULES.map((m, i) => `<section class="card module" id="${m.id}" aria-labelledby="${m.id}-t">
      <div class="module-head"><div class="badge" aria-hidden="true">${m.icon}</div>
      <div><small>Módulo ${i + 1}</small><h2 id="${m.id}-t">${i + 1}. ${m.title}</h2></div></div>
      ${m.sections.map(sectionHTML).join("")}
      ${videoHTML(m.video)}
      ${exercisesHTML(m.exercises, m.quiz, m.id)}
      ${moduleFoot(m.id, i, all)}</section>`).join("");

  const p = PROJECT;
  const projectHTML = `<section class="card module" id="${p.id}" aria-labelledby="proj-t">
    <div class="module-head"><div class="badge" aria-hidden="true">🚀</div>
    <div><small>Módulo 17</small><h2 id="proj-t">17. 🚀 ${p.title}</h2></div></div>
    <p>Construiremos un programa de consola que permite <strong>agregar, listar, completar y eliminar tareas</strong>, usando variables, listas, diccionarios, condicionales, bucles, funciones y manejo de errores.</p>
    ${p.steps.map(sectionHTML).join("")}
    <h3>Código completo</h3>${codeBlock(p.full)}
    <h3>¿Qué aprendiste con este proyecto?</h3>
    <ul><li>✔ Usar <strong>variables</strong> y <strong>listas</strong> para guardar el estado.</li>
    <li>✔ Representar datos con <strong>diccionarios</strong>.</li>
    <li>✔ Tomar decisiones con <strong>condicionales</strong>.</li>
    <li>✔ Repetir un menú con <strong>bucles</strong> (<code>while True</code> + <code>break</code>).</li>
    <li>✔ Organizar el código en <strong>funciones</strong> reutilizables.</li>
    <li>✔ Evitar que el programa falle con <strong>try/except</strong>.</li></ul>
    <div class="note">💡 Mejora sugerida: guarda las tareas en un archivo <code>tareas.json</code> (Módulo 12) para no perderlas al cerrar.</div>
    ${videoHTML("hola")}
    ${moduleFoot(p.id, all.length - 1, all)}</section>`;

  $("#modules").innerHTML = html + projectHTML;

  // Índices (lateral e imprimible)
  $("#toc").innerHTML = NAV.map((n, i) => `<li><a href="#${n.id}" data-id="${n.id}"><span class="num">${i + 1}.</span><span aria-hidden="true">${n.icon}</span> ${n.title}<span class="done" data-done="${n.id}"></span></a></li>`).join("");

  // Cheatsheet
  $("#cheatGrid").innerHTML = CHEATSHEET.map(([t, c]) => `<div class="cheat ex"><h4>${t}</h4>${codeBlock(c)}</div>`).join("");

  // Métricas de la portada
  const lessons = MODULES.reduce((a, m) => a + m.sections.length, 0) + PROJECT.steps.length;
  const exercises = MODULES.reduce((a, m) => a + m.exercises.length + (m.quiz ? 1 : 0), 0);
  $("#meta").innerHTML = [[MODULES.length + 1,"Módulos"],[lessons,"Lecciones"],[exercises,"Ejercicios"],[MODULES.length + 1,"Videos"]]
    .map(([b, s]) => `<div><dt>${s}</dt><dd>${b}</dd></div>`).join("");

  renderGlossary("");
  $("#year").textContent = new Date().getFullYear();
}

function renderGlossary(filter){
  const f = normalize(filter);
  const items = GLOSSARY.filter(([t, d]) => normalize(t + " " + d).includes(f));
  $("#glossList").innerHTML = items.length
    ? items.map(([t, d]) => `<div class="gloss-item"><b>${t}</b><br>${escapeHTML(d)}</div>`).join("")
    : `<p>No se encontraron términos.</p>`;
}
