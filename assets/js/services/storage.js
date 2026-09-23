/* Services: persistencia en localStorage (progreso y tema) */

function readStore(key, fallback){
  try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
  catch { return fallback; }
}
function writeStore(key, value){
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

const loadProgress = () => readStore(STORAGE_KEYS.progress, []);
const saveProgress = list => writeStore(STORAGE_KEYS.progress, list);
const loadTheme = () => readStore(STORAGE_KEYS.theme, null);
const saveTheme = theme => writeStore(STORAGE_KEYS.theme, theme);
