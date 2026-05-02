
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  const search = document.querySelector('[data-model-search]');
  const filter = document.querySelector('[data-model-filter]');
  const cards = Array.from(document.querySelectorAll('.model-card'));
  function applyFilters() {
    const q = (search?.value || '').toLowerCase().trim();
    const f = filter?.value || 'all';
    cards.forEach(card => {
      const title = (card.dataset.title || '').toLowerCase();
      const cats = (card.dataset.category || '').split(/\s+/);
      const okText = !q || title.includes(q);
      const okCat = f === 'all' || cats.includes(f);
      card.style.display = okText && okCat ? '' : 'none';
    });
  }
  search?.addEventListener('input', applyFilters);
  filter?.addEventListener('change', applyFilters);
});
