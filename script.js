
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
  const search = document.querySelector('[data-model-search]');
  const filter = document.querySelector('[data-model-filter]');
  const cards = [...document.querySelectorAll('.model-card')];
  function apply(){
    const q = (search?.value || '').toLowerCase().trim();
    const f = filter?.value || 'all';
    cards.forEach(card => {
      const matchText = !q || (card.dataset.title || '').includes(q);
      const cats = (card.dataset.category || '').split(/\s+/);
      const matchCat = f === 'all' || cats.includes(f);
      card.style.display = matchText && matchCat ? '' : 'none';
    });
  }
  search?.addEventListener('input', apply);
  filter?.addEventListener('change', apply);
});
