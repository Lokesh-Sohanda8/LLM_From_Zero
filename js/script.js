
/* ---------- scroll progress bar ---------- */
const bar = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  bar.style.width = pct + '%';
});

/* ---------- nav rail toggle (mobile) ---------- */
const toggle = document.getElementById('navtoggle');
const rail = document.getElementById('navrail');
toggle.addEventListener('click', () => rail.classList.toggle('open'));
document.querySelectorAll('.nav-item').forEach(a => a.addEventListener('click', () => rail.classList.remove('open')));

/* ---------- glossary panel ---------- */
const glossToggle = document.getElementById('glossarytoggle');
const glossPanel = document.getElementById('glossarypanel');
const glossClose = document.getElementById('glossaryclose');
if (glossToggle) glossToggle.addEventListener('click', () => glossPanel.classList.toggle('open'));
if (glossClose) glossClose.addEventListener('click', () => glossPanel.classList.remove('open'));

/* ---------- progress tracking (mark lessons understood) ---------- */
const STORAGE_KEY = 'llmzero_progress';
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

/* ---------- quiz logic ---------- */
document.querySelectorAll('.quiz-block').forEach(block => {
  const total = parseInt(block.dataset.quizTotal, 10);
  let score = 0;
  const scoreVal = block.querySelector('.score-val');
  block.querySelectorAll('.quiz-q').forEach(q => {
    const opts = q.querySelectorAll('.quiz-opt');
    const feedback = q.querySelector('.quiz-feedback');
    opts.forEach(opt => {
      opt.addEventListener('click', () => {
        if (q.dataset.answered) return;
        q.dataset.answered = 'true';
        const isCorrect = opt.dataset.correct === 'true';
        opt.classList.add(isCorrect ? 'opt-correct' : 'opt-incorrect');
        opts.forEach(o => {
          o.disabled = true;
          if (o.dataset.correct === 'true') o.classList.add('opt-correct');
        });
        feedback.textContent = (isCorrect ? 'Correct. ' : 'Not quite. ') + q.dataset.explain;
        feedback.classList.add('shown');
        if (isCorrect) {
          score++;
          scoreVal.textContent = score;
        }
      });
    });
  });
});

/* ---------- live tokenizer demo ---------- */
const tokInput = document.getElementById('tok-input');
const tokOutput = document.getElementById('tok-output');
function renderTokens(text){
  if (!tokOutput) return;
  tokOutput.innerHTML = '';
  const words = text.trim().split(/\s+/).filter(Boolean);
  words.forEach(word => {
    const clean = word.replace(/[^\w']/g, '');
    const punct = word.slice(clean.length);
    let pieces = [clean];
    if (clean.length > 7) {
      const mid = Math.ceil(clean.length / 2);
      pieces = [clean.slice(0, mid), clean.slice(mid)];
    }
    pieces.forEach(p => {
      if (!p) return;
      const span = document.createElement('span');
      span.className = 'token';
      span.textContent = p;
      tokOutput.appendChild(span);
    });
    if (punct) {
      const span = document.createElement('span');
      span.className = 'token';
      span.textContent = punct;
      tokOutput.appendChild(span);
    }
  });
}
if (tokInput) {
  tokInput.addEventListener('input', () => renderTokens(tokInput.value));
  renderTokens(tokInput.value);
}

/* ---------- live next-token probability demo ---------- */
const PROB_TABLE = {
  'the sky is': [['blue', 62], ['dark', 19], ['clear', 11], ['falling', 5], ['orange', 3]],
  'i love': [['you', 34], ['this', 22], ['programming', 18], ['coffee', 15], ['it', 11]],
  'once upon a': [['time', 88], ['dream', 6], ['midnight', 4], ['star', 2]],
  'the capital of france is': [['paris', 91], ['lyon', 4], ['unclear', 3], ['nice', 2]],
  'machine learning is': [['powerful', 28], ['fascinating', 24], ['everywhere', 21], ['hard', 15], ['fun', 12]],
  'to be or not to': [['be', 96], ['exist', 2], ['ask', 1], ['fight', 1]],
};
const FALLBACK_WORDS = ['the', 'a', 'that', 'this', 'you', 'good', 'important', 'here', 'now', 'possible'];
function renderProbs(text){
  const probOutput = document.getElementById('prob-output');
  if (!probOutput) return;
  const key = text.trim().toLowerCase().replace(/[.?!]+$/, '');
  let rows = PROB_TABLE[key];
  if (!rows) {
    const shuffled = [...FALLBACK_WORDS].sort(() => Math.random() - 0.5).slice(0, 4);
    let remaining = 100;
    rows = shuffled.map((w, i) => {
      const p = i === shuffled.length - 1 ? remaining : Math.max(3, Math.round(remaining * (0.5 - i * 0.1)));
      remaining -= p;
      return [w, p];
    });
    rows.sort((a, b) => b[1] - a[1]);
  }
  probOutput.innerHTML = '';
  rows.forEach(([word, pct], i) => {
    const row = document.createElement('div');
    row.className = 'prob-row';
    row.innerHTML = '<span class="prob-label">' + word + '</span>' +
      '<div class="prob-track"><div class="prob-fill' + (i === 0 ? ' prob-winner' : '') + '" style="width:' + pct + '%"></div></div>' +
      '<span class="prob-pct">' + pct + '%</span>';
    probOutput.appendChild(row);
  });
}
const probInput = document.getElementById('prob-input');
if (probInput) {
  probInput.addEventListener('input', () => renderProbs(probInput.value));
  renderProbs(probInput.value);
}

/* ---------- attention click demo ---------- */
const attnWords = document.querySelectorAll('.attn-word');
const attnHint = document.getElementById('attn-hint');
attnWords.forEach(w => {
  w.addEventListener('click', () => {
    document.querySelectorAll('.attn-word').forEach(x => x.classList.remove('attn-lit', 'attn-miss'));
    const refersTo = w.dataset.refers;
    if (refersTo) {
      const target = document.querySelector('.attn-word[data-refers=""].attn-target') ||
        [...document.querySelectorAll('.attn-word')].find(el => el.textContent.trim().toLowerCase() === refersTo);
      if (target) target.classList.add('attn-lit');
      const distractor = document.querySelector('.attn-distractor');
      if (distractor) distractor.classList.add('attn-miss');
      if (attnHint) attnHint.innerHTML = '&ldquo;it&rdquo; correctly attends to <strong style="color:var(--green)">animal</strong> &mdash; not <strong style="color:var(--red); text-decoration:line-through">road</strong> &mdash; because &ldquo;tired&rdquo; only makes sense for a living thing.';
    } else if (attnHint) {
      attnHint.textContent = 'Click \u201Cit\u201D to see which word the model should pay attention to.';
    }
  });
});
