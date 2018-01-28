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
