'use strict'

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

// Chat
const chatRef = document.querySelector('.chat');

document.querySelector('#hideChat').addEventListener('click', () => chatRef.classList.remove('chat--show'));
document.querySelectorAll('#showChat').forEach(el => el.addEventListener('click', () => chatRef.classList.add('chat--show')));
