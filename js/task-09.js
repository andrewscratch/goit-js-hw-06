const refs = {
  bodyEl: document.querySelector("body"),
  hexColorText: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", onClickButton);

function onClickButton(event) {
  const randomBackgroundColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomBackgroundColor;
  refs.hexColorText.textContent = randomBackgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}