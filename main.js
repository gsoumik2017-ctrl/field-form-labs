const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
function setMenu(open) {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menu.inert = !open;
  menu.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (open) menu.querySelector('a')?.focus();
}
if (toggle && menu) {
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((a,i) => { a.style.setProperty('--i', i); a.addEventListener('click', () => setMenu(false)); });
  document.addEventListener('keydown', e => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (e.key === 'Escape') { setMenu(false); toggle.focus(); }
    if (e.key === 'Tab') {
      const focusable = [...document.querySelectorAll('.site-header a, .site-header button, .mobile-menu a')].filter(el => el.getClientRects().length);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  matchMedia('(min-width: 761px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
}
if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); }
  }), {threshold:.08});
  if (!reduced) document.querySelectorAll('.reveal').forEach(el => { el.classList.add('ready'); reveal.observe(el); });
  const words = [...document.querySelectorAll('.word-reveal span')];
  const block = document.querySelector('.word-reveal');
  if (reduced) words.forEach(word => word.classList.add('lit'));
  else if (block) {
    let queued = false;
    const updateWords = () => {
      queued = false;
      const rect = block.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (innerHeight * .82 - rect.top) / (rect.height + innerHeight * .12)));
      const count = Math.ceil(progress * words.length);
      words.forEach((word, index) => word.classList.toggle('lit', index < count));
    };
    const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(updateWords); } };
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    schedule();
  }
  const links = [...document.querySelectorAll('.nav-links a')];
  const active = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) links.forEach(a => { const current=a.hash === '#'+entry.target.id; a.classList.toggle('active',current); if(current) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
  }), {rootMargin:'-15% 0px -65% 0px'});
  links.forEach(a => { const target=document.querySelector(a.hash); if(target) active.observe(target); });
} else document.querySelectorAll('.word-reveal span').forEach(el => el.classList.add('lit'));
