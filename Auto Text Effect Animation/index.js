const containerEl = document.querySelector(".container");

const words = ["Min Ho", "a Web Developer", "a Nice Person"];

let wordIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${words[wordIndex].slice(
    0,
    characterIndex
  )}</h1>`;
  if (characterIndex === words[wordIndex].length) {
    wordIndex++;
    characterIndex = 0;
  }

  if (wordIndex === words.length) {
    wordIndex = 0;
  }
  setTimeout(updateText, 400);
}
