let counterValue = 0;

const refs = {
  counter: document.querySelector('#counter'),
  fieldOfValue: document.querySelector('#value'),
};

const onButtonHandler = evt => {
  switch (evt.target.dataset.action) {
    case 'decrement':
      counterValue -= 1;
      break;

    case 'increment':
      counterValue += 1;
      break;
  }
  refs.fieldOfValue.textContent = counterValue;
};

refs.counter.addEventListener('click', onButtonHandler);
