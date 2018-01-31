const linkShow = document.querySelectorAll('.linkShow');
const formPrincipal = document.querySelector('form[name=entryForm]');

linkShow.forEach(el => el.addEventListener('click', (e) => {
  let currentForm = document.querySelector(`form[name=${e.target.dataset.show}]`);
  formPrincipal.style.transform = 'scale(0)';
  currentForm.classList.remove('hide');
  setTimeout(() => {
    formPrincipal.classList.add('hide');
    currentForm.style.transform = 'scale(1)';
  }, 300);
}));