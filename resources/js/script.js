const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
  nav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  nav.toggleAttribute('data-visible');
});

//day countdown
const countdown = () => {
  const countDate = new Date('Oct 5, 2023 00:00:00').getTime();
  const now = new Date().getTime();

  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let textDay = String(Math.floor(gap / day));
  let textHour = String(Math.floor((gap % day) / hour));
  let textMinute = String(Math.floor((gap % hour) / minute));
  let textSecond = String(Math.floor((gap % minute) / second));

  if (textDay.length === 1) {
    textDay = '0' + textDay;
  }
  if (textHour.length === 1) {
    textHour = '0' + textHour;
  }
  if (textMinute.length === 1) {
    textMinute = '0' + textMinute;
  }
  if (textSecond.length === 1) {
    textSecond = '0' + textSecond;
  }

  document.querySelector('.days').innerHTML = textDay;
  document.querySelector('.hours').innerHTML = textHour;
  document.querySelector('.mins').innerHTML = textMinute;
  document.querySelector('.secs').innerHTML = textSecond;
};

setInterval(countdown, 1000);
