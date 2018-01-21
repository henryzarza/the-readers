'use strict'

const elContent = document.querySelectorAll('.change__content--login');
elContent.forEach(el => el.addEventListener('click', (e) => {
  console.log(e);
}));