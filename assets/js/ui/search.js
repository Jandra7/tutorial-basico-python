/* UI: buscador */

let SEARCH_INDEX = [];
function buildIndex(){
  const strip = h => h.replace(/<[^>]+>/g, " ");
  MODULES.forEach((m, i) => {
    SEARCH_INDEX.push({id:m.id, title:`${i + 1}. ${m.title}`, sub:"Módulo", text:normalize(m.title + " " + m.kw)});
    m.sections.forEach(s => SEARCH_INDEX.push({id:m.id, title:s.h, sub:`Módulo ${i + 1}: ${m.title}`, text:normalize(s.h + " " + strip(s.p || "") + " " + (s.code || ""))}));
  });
  SEARCH_INDEX.push({id:PROJECT.id, title:PROJECT.title, sub:"Proyecto", text:normalize(PROJECT.title + " " + PROJECT.kw)});
  SEARCH_INDEX.push({id:"cheatsheet", title:"Python Cheatsheet", sub:"Referencia", text:"cheatsheet referencia rapida chuleta"});
  GLOSSARY.forEach(([t, d]) => SEARCH_INDEX.push({id:"glosario", title:t, sub:"Glosario", text:normalize(t + " " + d)}));
}
// Sinónimos habituales (inglés/español)
function search(q){
  const box = $("#searchResults");
  let n = normalize(q.trim());
  if (n.length < 2){ box.classList.remove("open"); box.innerHTML = ""; return; }
  const terms = [n, SYN[n]].filter(Boolean);
  const res = SEARCH_INDEX.filter(r => terms.some(t => r.text.includes(t) || normalize(r.title).includes(t))).slice(0, 12);
  box.innerHTML = res.length
    ? res.map(r => `<a href="#${r.id}" role="option">${r.title}<small>${r.sub}</small></a>`).join("")
    : `<a href="#glosario" role="option">Sin resultados para “${escapeHTML(q)}”<small>Prueba con: variables, listas, funciones, loops, clases, API</small></a>`;
  box.classList.add("open");
}
