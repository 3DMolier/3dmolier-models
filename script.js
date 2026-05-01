
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) menuButton.addEventListener('click', () => nav.classList.toggle('open'));
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.model-card[data-category]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      cards.forEach(card => {
        const cats = (card.dataset.category || '').split(/\s+/);
        card.classList.toggle('is-hidden', filter !== 'all' && !cats.includes(filter));
      });
    });
  });
});
