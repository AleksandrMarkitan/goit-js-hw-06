const refs = {
  validationInput: document.querySelector('#validation-input'),
};

refs.validationInput.addEventListener('blur', () => {
  refs.validationInput.value.length === Number(refs.validationInput.dataset.length)
    ? refs.validationInput.classList.replace('invalid', 'valid')
    : refs.validationInput.classList.add('invalid');
});
