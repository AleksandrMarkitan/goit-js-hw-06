const refs = {
  controlsDiv: document.querySelector('#controls'),
  divBox: document.querySelector('#boxes'),
};

refs.controlsDiv.addEventListener('click', onElementsHandler);
refs.controlsDiv.addEventListener('change', onAmountHandler);

let amountOfElements = 0;

function onElementsHandler(e) {
  if (e.target.hasAttribute('data-create')) {
    createBoxes(amountOfElements);
  } else if (e.target.hasAttribute('data-destroy')) {
    destroyBoxes();
  }
}

function onAmountHandler(e) {
  amountOfElements = e.target.value;
}

function createBoxes(amount) {
  let markup = ``;
  let width = 20;
  let height = 20;
  for (let index = 0; index < amount; index += 1) {
    width += 10;
    height += 10;
    const color = getRandomHexColor();
    markup += `<div style = "width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
  }
  refs.divBox.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes() {
  refs.divBox.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
