/* Core: constantes globales de la aplicación */

// Información general del curso (se usa en la página y en las exportaciones)
const APP = {
  title: "Tutorial básico de Python",
  subject: "Programación Web",
  topic: "Introducción a Python",
  description: "Aprende Python paso a paso, desde los fundamentos hasta construir tu primer proyecto.",
  level: "Principiante",
  language: "Español",
  fileName: "tutorial-basico-python"
};

// Claves de localStorage
const STORAGE_KEYS = {
  progress: "pyTutorialProgress",
  theme: "pyTheme"
};

// Niveles de los ejercicios
const LEVELS = {1: "🟢 Básico", 2: "🟡 Intermedio", 3: "🔴 Reto"};
const LEVEL_TEXT = {1: "Básico", 2: "Intermedio", 3: "Reto"};

// Palabras reservadas y funciones integradas de Python (resaltado de sintaxis)
const KW = "def|class|return|if|elif|else|for|while|in|not|and|or|import|from|as|try|except|finally|raise|with|break|continue|pass|True|False|None|is|lambda|global|yield";
const BUILTIN = "print|input|len|range|type|int|float|str|bool|list|dict|set|tuple|open|enumerate|sum|min|max|sorted|super";

// Sinónimos para el buscador (inglés/español)
const SYN = {loops: "bucles", loop: "bucle", clases: "clase", functions: "funciones", lists: "listas", variables: "variable", dicts: "diccionario"};

// Opciones de html2pdf.js para "Descargar PDF"
const PDF_OPTIONS = {
  margin: [18, 12, 16, 12],
  filename: `${APP.fileName}.pdf`,
  image: {type: "jpeg", quality: 0.96},
  html2canvas: {scale: 2, useCORS: true, backgroundColor: "#ffffff", scrollY: 0},
  jsPDF: {unit: "mm", format: "a4", orientation: "portrait"},
  pagebreak: {mode: ["css", "legacy"], avoid: ["pre", "h3", "p", "li", "tr", ".exp-ex", ".exp-video", ".note"]}
};
