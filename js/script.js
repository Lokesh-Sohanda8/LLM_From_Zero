
const bar = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  bar.style.width = pct + '%';
});
const toggle = document.getElementById('navtoggle');
const rail = document.getElementById('navrail');
toggle.addEventListener('click', () => rail.classList.toggle('open'));
document.querySelectorAll('.nav-item').forEach(a => a.addEventListener('click', () => rail.classList.remove('open')));
