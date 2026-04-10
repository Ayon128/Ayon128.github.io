// ===== Dark Mode =====
const html = document.documentElement;
const toggles = document.querySelectorAll('[data-dark-toggle], #darkToggle');

function setDark(on) {
  html.classList.toggle('dark', on);
  localStorage.setItem('theme', on ? 'dark' : 'light');
}

(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDark(saved ? saved === 'dark' : prefersDark);
})();

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => setDark(!html.classList.contains('dark')));
});

// ===== Navbar background on scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('shadow-md', window.scrollY > 10);
}, { passive: true });

// ===== Intersection observer for fade-up =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== BibTeX toggle =====
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-bibtex-btn]');
  if (!btn) return;
  const card = btn.closest('.pub-card');
  const box = card?.querySelector('.bibtex-box');
  if (!box) return;
  const open = box.classList.toggle('open');
  btn.textContent = open ? 'Hide BibTeX' : 'BibTeX';
});

// ===== Copy BibTeX =====
document.addEventListener('click', e => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const pre = btn.previousElementSibling;
  navigator.clipboard.writeText(pre.textContent).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => (btn.textContent = 'Copy'), 1600);
  });
});

// ===== Show more news =====
const showMoreBtn = document.getElementById('showMoreNews');
const hiddenNews = document.querySelectorAll('.news-hidden');

showMoreBtn?.addEventListener('click', () => {
  const expanded = showMoreBtn.dataset.expanded === 'true';
  hiddenNews.forEach(el => el.classList.toggle('hidden', expanded));
  showMoreBtn.dataset.expanded = expanded ? 'false' : 'true';
  const icon = showMoreBtn.querySelector('.toggle-icon');
  if (icon) icon.style.transform = expanded ? '' : 'rotate(180deg)';
  showMoreBtn.querySelector('span').textContent = expanded ? 'Show older news' : 'Show less';
});

// ===== Tab switcher (Publications / Projects / Awards) =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.tabGroup;
    document.querySelectorAll(`.tab-btn[data-tab-group="${group}"]`).forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.tab-panel[data-tab-group="${group}"]`).forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab)?.classList.add('active');
  });
});

// ===== Mobile menu =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
document.querySelectorAll('#mobileMenu a').forEach(a => {
  a.addEventListener('click', () => mobileMenu?.classList.add('hidden'));
});
