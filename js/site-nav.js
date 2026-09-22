(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const button = header.querySelector('.site-menu-toggle');
  const menu = header.querySelector('.site-mobile-links');
  const close = () => {
    menu.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
    button.textContent = '☰';
  };
  button.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
    button.textContent = opening ? '×' : '☰';
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  document.addEventListener('click', event => { if (!header.contains(event.target)) close(); });
})();
