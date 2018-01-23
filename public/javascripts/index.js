'use strict'

/* const elContent = document.querySelectorAll('.change__content--login');
elContent.forEach(el => el.addEventListener('click', (e) => {
  console.log(e);
})); */

const contentError = document.querySelector('#error-content');
const textError = contentError.querySelector('#title-error');
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = contentError;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  textError.style.textShadow = `${xWalk}px ${yWalk}px .8rem #64cd4c`;
}

contentError.addEventListener('mousemove', shadow);