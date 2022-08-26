const refs = {
  rangeInput: document.querySelector('#font-size-control'),
  textOutput: document.querySelector('#text'),
};

refs.rangeInput.addEventListener('change', e => {
  refs.textOutput.style.fontSize = `${e.target.value}px`;
});
