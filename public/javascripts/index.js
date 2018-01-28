'use strict'

/* const elContent = document.querySelectorAll('.change__content--login');
elContent.forEach(el => el.addEventListener('click', (e) => {
  console.log(e);
})); */

const linkSubmenu = document.querySelector('#link--submenu');
const submenu = document.querySelector('.submenu');

linkSubmenu.addEventListener('click', () => submenu.classList.toggle('submenu--visible'));
