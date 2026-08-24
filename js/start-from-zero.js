/* ---------- scroll progress bar ---------- */
const bar = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
  bar.style.width = pct + '%';
});

/* ---------- nav rail toggle ---------- */
const toggle = document.getElementById('navtoggle');
const rail = document.getElementById('navrail');
if (toggle && rail) toggle.addEventListener('click', () => rail.classList.toggle('open'));
document.querySelectorAll('.nav-item').forEach(a => a.addEventListener('click', () => rail.classList.remove('open')));

/* ---------- separate progress for the beginner page ---------- */
const STORAGE_KEY = 'llmzero_start_from_zero_progress';
function loadProgress(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveProgress(p){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch(e){}
}
function updateCounter(){
  const p = loadProgress();
  const done = Object.values(p).filter(Boolean).length;
  const total = document.querySelectorAll('.done-check').length;
  const counter = document.getElementById('progresscounter');
  if (counter) counter.textContent = done + ' / ' + total + ' lessons marked understood';
}
function applyProgress(){
  const p = loadProgress();
  document.querySelectorAll('.done-check').forEach(cb => {
    const lid = cb.dataset.lesson;
    if (p[lid]) {
      cb.checked = true;
      const navItem = document.querySelector('.nav-item[data-lesson="' + lid + '"]');
      if (navItem) navItem.classList.add('done');
    }
  });
  updateCounter();
}
document.querySelectorAll('.done-check').forEach(cb => {
  cb.addEventListener('change', () => {
    const p = loadProgress();
    p[cb.dataset.lesson] = cb.checked;
    saveProgress(p);
    const navItem = document.querySelector('.nav-item[data-lesson="' + cb.dataset.lesson + '"]');
    if (navItem) navItem.classList.toggle('done', cb.checked);
    updateCounter();
  });
});
applyProgress();
