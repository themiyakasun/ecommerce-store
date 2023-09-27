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

//carousel
const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  }

  update(newActive);
});

prevButton.addEventListener('click', function () {
  const currentActive = document.querySelector('.carousel__item_active');
  const currentIndex = elems.indexOf(currentActive);
  const prevIndex = (currentIndex - 1 + elems.length) % elems.length;
  const prevItem = elems[prevIndex];

  update(prevItem);
});

nextButton.addEventListener('click', function () {
  const currentActive = document.querySelector('.carousel__item_active');
  const currentIndex = elems.indexOf(currentActive);
  const nextIndex = (currentIndex + 1) % elems.length;
  const nextItem = elems[nextIndex];

  update(nextItem);
});

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  elems.forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });

  elems.forEach((item) => {
    var itemPos = item.dataset.pos;

    if (itemPos == 0) {
      item.classList.add('carousel__item_active');
    } else {
      item.classList.remove('carousel__item_active');
    }
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};
