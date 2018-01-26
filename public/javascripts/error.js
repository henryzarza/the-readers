const contentError = document.querySelector('#error-content');
const walk = 80;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = contentError;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  contentError.querySelector('#title-error').style.textShadow = `${xWalk}px ${yWalk}px .8rem #64cd4c`;
}

contentError.addEventListener('mousemove', shadow);