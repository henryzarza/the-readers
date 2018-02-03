'use strict'

// Toggle submenu
const linkSubmenu = document.querySelector('#link--submenu');
const submenu = document.querySelector('.submenu');

linkSubmenu.addEventListener('click', () => submenu.classList.toggle('submenu--visible'));
