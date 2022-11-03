const refs = {
  inputEl: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

const firstWidth = "30";
const firstHeight = "30";

function createBoxes(amount) {
  let arrayBoxesEl = [];
  for (let i = 0; i < amount; i += 1) {
    const createBoxEl = document.createElement("div");
    createBoxEl.style.width = `${Number(firstWidth) + 10 * i}px`;
    createBoxEl.style.height = `${Number(firstHeight) + 10 * i}px`;
    createBoxEl.style.backgroundColor = getRandomHexColor();

    arrayBoxesEl.push(createBoxEl);
  }
  const allBoxesRow = refs.boxesEl.append(...arrayBoxesEl);
}

function onClickButtonCreate() {
  const inputValue = refs.inputEl.value;
  createBoxes(inputValue);
}

function destroyBoxes() {
  while (refs.boxesEl.firstChild) {
    refs.boxesEl.removeChild(refs.boxesEl.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.createBtn.addEventListener("click", onClickButtonCreate);
refs.destroyBtn.addEventListener("click", destroyBoxes);