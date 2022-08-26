const refs = {
  validationInput: document.querySelector('#validation-input'),
};

refs.validationInput.addEventListener('blur', () => {
  refs.validationInput.classList.add;
  if (
    refs.validationInput.value.length < Number(refs.validationInput.dataset.length) &&
    refs.validationInput.value.length !== 0
  ) {
    refs.validationInput.classList.add('invalid');
  } else if (refs.validationInput.value.length >= Number(refs.validationInput.dataset.length)) {
    refs.validationInput.classList.add('valid');
  }
});

refs.validationInput.addEventListener('focus', () => {
  refs.validationInput.classList.remove('invalid', 'valid');
});
