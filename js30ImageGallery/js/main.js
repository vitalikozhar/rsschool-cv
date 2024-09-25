const page = document.querySelector("body");
const searchInput = document.querySelector(".enter-text");
const mainFrame = document.querySelector(".main-frame");
const pepperLogo = document.querySelector(".fa-pepper-hot");
const whitePepper = document.querySelector(".white-background h1");
const whiteBlock = document.querySelector(".white-block");
const material = document.querySelector(".material-symbols-outlined");
const imageFinder = document.querySelector('.image-finder');

window.addEventListener("load", () => {
  page.style.opacity = "1";
  page.style.visibility = "visible";
  searchInput.focus();
});

searchInput.addEventListener("input", () => {
  if (searchInput.value === "") {
    mainFrame.style.opacity = "0";
    whiteBlock.style.backgroundColor = "#FFFFFF";
    whitePepper.style.opacity = 0.8;
  } else {
    mainFrame.style.opacity = "0.7";
    whiteBlock.style.backgroundColor = "#FF0000";
    whitePepper.style.opacity = 0.2;
  }
});

let fiveLetterWords = [];
let sixLetterWords = [];

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const jsonPath = isLocal ? 'http://127.0.0.1:5500/js30ImageGallery/words.json' : '/rsschool-cv/js30ImageGallery/words.json';

fetch(jsonPath)
  .then((response) => response.json())
  .then((data) => {
    fiveLetterWords = data.five_letter_words;
    sixLetterWords = data.six_letter_words;
  })
  .catch((error) => console.error("Ошибка при загрузке words.JSON:", error));

whiteBlock.addEventListener("click", changeWords);
whiteBlock.addEventListener("touchstart", changeWords);


function changeWords() {
  whiteBlock.removeEventListener("click", changeWords);
  whiteBlock.removeEventListener("touchstart", changeWords);
  const index1 = Math.floor(Math.random() * fiveLetterWords.length);
  const index2 = Math.floor(Math.random() * sixLetterWords.length);
  const word1 = fiveLetterWords[index1];
  const word2 = sixLetterWords[index2];
  let word01 = "";
  let word02 = "";
  for (let i = 0; i < word1.length; i += 1) {
    let charCode = word1.charCodeAt(i);
    charCode += charCode <= 109 ? 13 : -13;
    word01 += String.fromCharCode(charCode);
  }
  for (let i = 0; i < word2.length; i += 1) {
    let charCode = word2.charCodeAt(i);
    charCode += charCode <= 109 ? 13 : -13;
    word02 += String.fromCharCode(charCode);
  }
  whitePepper.style.opacity = "0";
  material.style.opacity = "0";
  searchInput.style.padding = "0 26vw";
  searchInput.style.opacity = "0";
  setTimeout(() => {
    searchInput.value = "";
    searchInput.style.opacity = "1";
    searchInput.placeholder = "Who are you today?";
  }, 1000);
  setTimeout(() => {
    whitePepper.style.opacity = "1";
    whitePepper.textContent = "";
    whitePepper.textContent = `${word01} ${word02}`;
  }, 4000);
  setTimeout(() => {
    whitePepper.style.opacity = "0";
  }, 10000);
  setTimeout(() => {
    whitePepper.textContent = "white pepper";
    whitePepper.style.opacity = "1";
    material.style.opacity = "1";
    searchInput.style.padding = "0 1vw";
    searchInput.placeholder = "image search...";
  }, 11000);
}

const playAudio = new Audio("music/Gustavo.mp3");
whiteBlock.addEventListener("click", music);
function music() {
  imageFinder.style.color = '#16161616'
  playAudio.play();
  setTimeout(() => {
    playAudio.pause();
    imageFinder.style.color = '#CDCDCD'
    whiteBlock.removeEventListener("click", music);
  }, 17000);
}

