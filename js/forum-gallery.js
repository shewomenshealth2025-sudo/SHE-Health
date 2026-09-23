(() => {
  const grid = document.querySelector('.photo-grid');
  const viewer = document.querySelector('.photo-viewer');
  if (!grid || !viewer) return;
  const photos = [...grid.querySelectorAll('figure')];
  const image = viewer.querySelector('img');
  const caption = viewer.querySelector('figcaption');
  const count = viewer.querySelector('.viewer-count');
  const more = document.querySelector('.gallery-more');
  let current = 0;
  let lastFocus = null;
  let touchStart = null;
  function show(index) {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];
    image.src = photo.querySelector('img').src;
    image.alt = photo.querySelector('img').alt;
    caption.textContent = photo.querySelector('figcaption').textContent;
    count.textContent = `${current + 1} / ${photos.length}`;
  }
  function open(index) {
    lastFocus = document.activeElement;
    show(index);
    viewer.hidden = false;
    document.body.style.overflow = 'hidden';
    viewer.querySelector('.viewer-close').focus();
  }
  function close() {
    viewer.hidden = true;
    image.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  photos.forEach((photo, index) => {
    photo.addEventListener('click', () => open(index));
    photo.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(index);
      }
    });
  });
  more.addEventListener('click', () => {
    const expanded = more.getAttribute('aria-expanded') === 'true';
    photos.slice(4).forEach(photo => { photo.hidden = expanded; });
    more.setAttribute('aria-expanded', String(!expanded));
    more.textContent = expanded ? `View all ${photos.length} photographs` : 'Show fewer photographs';
    if (expanded) document.getElementById('gallery').scrollIntoView({block:'start'});
  });
  viewer.querySelector('.viewer-close').addEventListener('click', close);
  viewer.querySelector('.viewer-prev').addEventListener('click', () => show(current - 1));
  viewer.querySelector('.viewer-next').addEventListener('click', () => show(current + 1));
  viewer.addEventListener('click', event => { if (event.target === viewer) close(); });
  viewer.addEventListener('touchstart', event => { touchStart = event.changedTouches[0].clientX; }, {passive:true});
  viewer.addEventListener('touchend', event => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) show(current + (distance < 0 ? 1 : -1));
    touchStart = null;
  }, {passive:true});
  document.addEventListener('keydown', event => {
    if (viewer.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowRight') show(current + 1);
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'Tab') {
      const buttons = [...viewer.querySelectorAll('button')];
      const at = buttons.indexOf(document.activeElement);
      if (event.shiftKey && at === 0) { event.preventDefault(); buttons.at(-1).focus(); }
      if (!event.shiftKey && at === buttons.length - 1) { event.preventDefault(); buttons[0].focus(); }
    }
  });
})();
