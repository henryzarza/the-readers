'use strict'

// Toggle submenu
const linkSubmenu = document.querySelector('#link--submenu');
const submenu = document.querySelector('.submenu');

linkSubmenu.addEventListener('click', () => submenu.classList.toggle('submenu--visible'));

// Scroll to top
const btnScroll = document.querySelector('.btn--scrollUp');

window.onscroll = () => {
  btnScroll.style.opacity = (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) ? '1' : '0';
};

btnScroll.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});