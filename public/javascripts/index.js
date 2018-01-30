'use strict'

// Toggle submenu
const linkSubmenu = document.querySelector('#link--submenu');
const submenu = document.querySelector('.submenu');

linkSubmenu.addEventListener('click', () => submenu.classList.toggle('submenu--visible'));

// Toggle class active to card
const addClassActive = document.querySelectorAll('.addClassActive');
const removeClassActive = document.querySelectorAll('.removeClassActive');

addClassActive.forEach(el => el.addEventListener('click', (e) => {
    let currentCard = document.querySelector(`.card[data-ref=${e.target.dataset.ref}]`);
    currentCard.classList.toggle('card--active');
    setTimeout(() => currentCard.classList.toggle('card--activeEnd'), 300);
  })
);

removeClassActive.forEach(el => el.addEventListener('click', (e) => {
    let currentCard = document.querySelector(`.card[data-ref=${e.target.dataset.ref}]`);
    currentCard.classList.remove('card--activeEnd');
    setTimeout(() => currentCard.classList.remove('card--active'), 300);
  })
)

// Scroll to top
const btnScroll = document.querySelector('.btn--scrollUp');

window.onscroll = () => {
  btnScroll.style.opacity = (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) ? '1' : '0';
};

btnScroll.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
