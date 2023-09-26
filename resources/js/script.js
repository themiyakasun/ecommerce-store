const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
  nav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  nav.toggleAttribute('data-visible');
});
