const btn = document.getElementsByTagName("button")[0];
const body = document.getElementsByTagName("body")[0];
const codeColor = document.getElementsByClassName("code")[0];
const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
let chosenCategory = "";

function choosenCategory(category) {
  chosenCategory = category;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function handleClick() {
  if (chosenCategory === "simple") {
    const simpleColors = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFD700",
      "#FFA500",
      "#800080",
      "#008080",
      "#FF4500",
      "#4B0082",
      "#008000",
    ];

    const randomColor =
      simpleColors[Math.floor(Math.random() * simpleColors.length)];
    simple.style.textDecoration = "none";
    hex.style.textDecoration = "underline";
    body.style.backgroundColor = randomColor;
    codeColor.innerHTML = randomColor;
    console.log(chosenCategory);
  } else if (chosenCategory === "hex") {
    hex.style.textDecoration = "none";
    simple.style.textDecoration = "underline";
    btn.style.backgroundColor = "#f6f9f4";
    codeColor.innerHTML = getRandomColor();
    body.style.backgroundColor = getRandomColor();
    console.log(chosenCategory);
  }
}
