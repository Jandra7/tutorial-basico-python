/* UI: progreso del curso */

function updateProgressUI(){
  const done = loadProgress().filter(id => TRACKED.includes(id));
  const pct = Math.round(done.length / TRACKED.length * 100);
  $("#progressLabel").textContent = `${pct}% · ${done.length} de ${TRACKED.length} módulos`;
  $("#progressBar span").style.width = pct + "%";
  $("#progressBar").setAttribute("aria-valuenow", pct);
  $("#topBar").style.width = pct + "%";
  $$("[data-complete]").forEach(b => {
    const on = done.includes(b.dataset.complete);
    b.classList.toggle("is-done", on);
    b.textContent = on ? "✓ Lección completada" : "☐ Marcar como completada";
    b.setAttribute("aria-pressed", on);
  });
  $$("[data-done]").forEach(s => s.textContent = done.includes(s.dataset.done) ? "✓" : "");
}
function toggleComplete(id){
  const list = loadProgress();
  const i = list.indexOf(id);
  i >= 0 ? list.splice(i, 1) : list.push(id);
  saveProgress(list); updateProgressUI();
}
