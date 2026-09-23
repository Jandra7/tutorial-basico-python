/* Core: utilidades reutilizables (DOM, texto, resaltado, portapapeles) */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const escapeHTML = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const normalize = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* Resaltado de sintaxis sencillo (sin librerías): un único regex con grupos. */
const TOKEN_RE = new RegExp(`(#.*$)|(f?"(?:[^"\\\\\\n]|\\\\.)*"|f?'(?:[^'\\\\\\n]|\\\\.)*')|\\b(${KW})\\b|\\b(${BUILTIN})(?=\\()|\\b(\\d+(?:\\.\\d+)?)\\b`, "gm");
function highlight(code){
  return escapeHTML(code).replace(TOKEN_RE, (m, com, str, kw, fn, num) =>
    com ? `<span class="tk-com">${com}</span>` :
    str ? `<span class="tk-str">${str}</span>` :
    kw  ? `<span class="tk-kw">${kw}</span>` :
    fn  ? `<span class="tk-fn">${fn}</span>` :
          `<span class="tk-num">${num}</span>`);
}

async function copyText(text){
  try { await navigator.clipboard.writeText(text); return true; }
  catch {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    const ok = document.execCommand("copy"); ta.remove(); return ok;
  }
}
