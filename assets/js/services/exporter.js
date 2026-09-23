/* Services: exportación del curso (Imprimir, PDF y Word).
   Las tres opciones usan el MISMO documento, generado desde los datos del curso
   (no una copia de la pantalla), así siempre se exporta el contenido completo. */

/* ---------- Documento de exportación ---------- */
const docCode = code => `<pre class="exp-code">${highlight(code)}</pre>`;
const docSection = s => `<h3>${s.h}</h3>${s.p || ""}${s.code ? docCode(s.code) : ""}`;

function docCover(){
  const lessons = MODULES.reduce((a, m) => a + m.sections.length, 0) + PROJECT.steps.length;
  const exercises = MODULES.reduce((a, m) => a + m.exercises.length + (m.quiz ? 1 : 0), 0);
  const date = new Date().toLocaleDateString("es", {year: "numeric", month: "long", day: "numeric"});
  return `<div class="exp-cover">
    <p class="exp-cover-band">${APP.subject}</p>
    <p class="exp-cover-logo">🐍</p>
    <h1>${APP.title}</h1>
    <p class="exp-cover-subject"><b>Materia:</b> ${APP.subject}<br><b>Tema:</b> ${APP.topic}</p>
    <p class="exp-cover-lead">${APP.description}</p>
    <p class="exp-cover-meta">${MODULES.length + 1} módulos · ${lessons} lecciones · ${exercises} ejercicios</p>
    <p class="exp-cover-date">${date}</p>
  </div>`;
}

function docToc(){
  return `<div class="exp-page"><h2>Índice</h2>
    <ol class="exp-toc">${NAV.map(n => `<li>${n.title}</li>`).join("")}</ol></div>`;
}

function docVideo(key){
  const v = VIDEOS[key];
  if (!v) return `<p class="exp-video"><b>Video recomendado:</b> pendiente de agregar.</p>`;
  return `<p class="exp-video"><b>Video recomendado:</b> ${v.title} — ${v.author} (${v.duration})<br>
    <a href="${v.url}">${v.url}</a></p>`;
}

function docExercises(m){
  const items = m.exercises.map((e, i) => `<div class="exp-ex">
      <p class="exp-lvl">Ejercicio ${i + 1} · ${LEVEL_TEXT[e.lvl]}</p>
      <p>${e.q}</p><p class="exp-sol-label">Solución:</p>${docCode(e.sol)}</div>`).join("");
  const quiz = m.quiz ? `<div class="exp-ex"><p class="exp-lvl">Pregunta de repaso</p>
      <p>${m.quiz.q}</p><p><b>Respuesta:</b> <code>${escapeHTML(m.quiz.hint)}</code></p></div>` : "";
  return `<h3>Ejercicios</h3>${items}${quiz}`;
}

function docModule(m, i){
  return `<div class="exp-page">
    <p class="exp-kicker">Módulo ${i + 1}</p><h2>${i + 1}. ${m.title}</h2>
    ${m.sections.map(docSection).join("")}
    ${docVideo(m.video)}
    ${docExercises(m)}</div>`;
}

function docProject(){
  return `<div class="exp-page">
    <p class="exp-kicker">Módulo ${MODULES.length + 1}</p><h2>${MODULES.length + 1}. ${PROJECT.title}</h2>
    <p>Programa de consola para agregar, listar, completar y eliminar tareas usando variables, listas, diccionarios, condicionales, bucles, funciones y manejo de errores.</p>
    ${PROJECT.steps.map(docSection).join("")}
    <h3>Código completo</h3>${docCode(PROJECT.full)}
    <h3>¿Qué aprendiste con este proyecto?</h3>
    <ul><li>Usar variables y listas para guardar el estado.</li><li>Representar datos con diccionarios.</li>
    <li>Tomar decisiones con condicionales.</li><li>Repetir un menú con bucles.</li>
    <li>Organizar el código en funciones reutilizables.</li><li>Evitar fallos con try/except.</li></ul>
    ${docVideo("hola")}</div>`;
}

function docCheatsheet(){
  return `<div class="exp-page"><p class="exp-kicker">Referencia rápida</p><h2>Python Cheatsheet</h2>
    ${CHEATSHEET.map(([t, c]) => `<div class="exp-ex"><p class="exp-lvl">${t}</p>${docCode(c)}</div>`).join("")}</div>`;
}

function docGlossary(){
  return `<div class="exp-page"><p class="exp-kicker">Conceptos</p><h2>Glosario de Python</h2>
    <dl class="exp-gloss">${GLOSSARY.map(([t, d]) => `<dt>${t}</dt><dd>${escapeHTML(d)}</dd>`).join("")}</dl></div>`;
}

// Devuelve el curso completo dividido en partes (portada, índice, módulos, anexos)
const buildExportSections = () => [docCover(), docToc(), ...MODULES.map(docModule), docProject(), docCheatsheet(), docGlossary()];

/* ---------- Imprimir ---------- */
// #printDoc (oculto en pantalla) contiene todo el curso; print.css muestra solo ese bloque al imprimir.
function fillPrintDoc(){ $("#printDoc").innerHTML = `<div class="exp">${buildExportSections().join("")}</div>`; }
function printCourse(){ fillPrintDoc(); window.print(); }

/* ---------- PDF (html2pdf.js) ---------- */
function setBusy(busy, label = "📄 "){
  const btn = $("#exportBtn");
  btn.disabled = busy;
  btn.firstChild.textContent = busy ? "⏳ " : label;
  btn.setAttribute("aria-busy", busy);
}

// Encabezado y pie en cada página (excepto la portada)
function addPdfHeaderFooter(pdf){
  const total = pdf.internal.getNumberOfPages();
  const w = pdf.internal.pageSize.getWidth(), h = pdf.internal.pageSize.getHeight();
  for (let i = 2; i <= total; i++){
    pdf.setPage(i);
    pdf.setDrawColor(19, 41, 75); pdf.setLineWidth(0.4);
    pdf.line(12, 12, w - 12, 12);
    pdf.line(12, h - 11, w - 12, h - 11);
    pdf.setFontSize(8.5); pdf.setTextColor(19, 41, 75);
    pdf.text(APP.title, 12, 9);
    pdf.text(`Materia: ${APP.subject}`, w - 12, 9, {align: "right"});
    pdf.setTextColor(110);
    pdf.text(`Tema: ${APP.topic}`, 12, h - 6);
    pdf.text(`Página ${i} de ${total}`, w - 12, h - 6, {align: "right"});
  }
}

// Cada parte se renderiza por separado: evita el límite de tamaño del canvas del navegador
// (con un solo canvas gigante, el PDF salía solo con la portada).
function exportPDF(){
  if (typeof html2pdf === "undefined"){
    alert("No se pudo cargar la librería de PDF (revisa tu conexión). Se abrirá Imprimir: elige “Guardar como PDF”.");
    return printCourse();
  }
  const parts = buildExportSections().map(html => {
    const el = document.createElement("div");
    el.className = "exp exp-pdf";
    el.innerHTML = html;
    return el;
  });
  setBusy(true);
  let worker = html2pdf().set(PDF_OPTIONS).from(parts[0]).toPdf();
  parts.slice(1).forEach(el => {
    worker = worker.get("pdf").then(pdf => pdf.addPage()).from(el).toContainer().toCanvas().toPdf();
  });
  worker.get("pdf").then(addPdfHeaderFooter).save().then(
    () => setBusy(false),
    err => { setBusy(false); console.error(err); alert("Ocurrió un error al generar el PDF. Usa Imprimir → Guardar como PDF."); }
  );
}

/* ---------- Word ----------
   Generar un .docx real exige librerías pesadas; como alternativa compatible se exporta
   HTML con el espacio de nombres de Office y extensión .doc (MIME application/msword).
   Microsoft Word lo abre conservando títulos, listas, tablas, código y saltos de página. */
const WORD_CSS = `
  body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.45;color:#1a1a1a}
  h1{font-size:28pt;color:#13294b;text-align:center;margin:12pt 0}
  h2{font-size:18pt;color:#13294b;page-break-before:always;border-bottom:2pt solid #ffd43b;padding-bottom:4pt}
  h3{font-size:13pt;color:#1e4d8c;margin-top:14pt}
  pre{font-family:Consolas,monospace;font-size:9.5pt;background:#f6f8fa;border:1pt solid #d0d7de;padding:6pt;white-space:pre-wrap}
  code{font-family:Consolas,monospace;background:#eef1f4}
  table{border-collapse:collapse;width:100%} th,td{border:1pt solid #9aa7b6;padding:4pt} th{background:#eef3fb}
  .exp-cover{text-align:center} .exp-cover-band{color:#1e4d8c;font-weight:bold;text-transform:uppercase;letter-spacing:2pt}
  .exp-cover-logo{font-size:40pt} .exp-cover-subject{font-size:13pt} .exp-cover-lead,.exp-cover-meta,.exp-cover-date{color:#555}
  .exp-kicker{color:#6b7280;font-size:9pt;text-transform:uppercase;margin:0}
  .exp-ex{border:1pt solid #d0d7de;padding:6pt;margin:6pt 0}
  .exp-lvl{font-weight:bold;color:#1e4d8c;margin:0}
  .exp-video{border:1pt dashed #9aa7b6;padding:6pt}
  .note{background:#eef3fb;border-left:3pt solid #1e4d8c;padding:6pt}
  .tk-kw{color:#8250df} .tk-str{color:#0a7d33} .tk-num{color:#b35900} .tk-com{color:#6a737d;font-style:italic} .tk-fn{color:#0550ae}
  dt{font-weight:bold;color:#13294b} dd{margin:0 0 6pt 12pt}`;

function downloadFile(content, name, type){
  const blob = new Blob(["﻿", content], {type});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function exportWord(){
  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>${APP.title}</title><style>${WORD_CSS}</style></head>
<body>${buildExportSections().join("")}
<p style="text-align:center;color:#666;margin-top:24pt">${APP.title} · Materia: ${APP.subject} · Tema: ${APP.topic}</p>
</body></html>`;
  downloadFile(html, `${APP.fileName}.doc`, "application/msword");
}

/* ---------- Menú Exportar ---------- */
function runAction(action){
  $$(".dropdown .menu").forEach(m => m.classList.remove("open"));
  $("#exportBtn").setAttribute("aria-expanded", "false");
  if (action === "print") printCourse();
  if (action === "pdf") exportPDF();
  if (action === "word") exportWord();
}
