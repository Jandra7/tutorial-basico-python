/* Punto de entrada de la aplicación */

(function init(){
  setTheme(loadTheme() || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  render();
  buildIndex();
  bindEvents();
  updateProgressUI();
  fillPrintDoc();
  // Ctrl+P también imprime el curso completo
  window.addEventListener("beforeprint", fillPrintDoc);
})();
