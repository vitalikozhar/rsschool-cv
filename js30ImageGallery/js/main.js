const page = document.querySelector('.loading');
const searchInput = document.querySelector(".enter-text");
const pepperLogo = document.querySelector(".fa-pepper-hot");
const whitePepper = document.querySelector(".white-background h1");
const whiteBlock = document.querySelector(".white-block");
const material = document.querySelector(".material-symbols-outlined");
const imageFinder = document.querySelector(".image-finder");
const accessKey = 'LagzL3quEP0QQ7SBjeleGxctpcnH3pLIyGRibgcrW-k';
const topPhotoLine = document.querySelector('.topPhotoLine');
const bottomPhotoLine = document.querySelector('.bottomPhotoLine');
const screenSaver = document.querySelector('.screen-saver');


// ----------------------------------------------------------------page design


window.addEventListener("load", () => {
  setTimeout(() => {
    screenSaver.style.opacity = '0';
  }, 600);
  setTimeout(() => {
    page.style.opacity = "1";
    page.style.visibility = "visible";
    searchInput.focus();
  }, 1300);
});

searchInput.addEventListener("input", () => {
  if (searchInput.value === "") {
    whiteBlock.style.backgroundColor = "#FFFFFF";
    whitePepper.style.opacity = 0.8;
    topPhotoLine.style.opacity = '1';
    bottomPhotoLine.style.opacity = '1'
  } else {
    whiteBlock.style.backgroundColor = "#FF0000";
    whitePepper.style.opacity = 0.2;
    topPhotoLine.style.opacity = '0.3';
    bottomPhotoLine.style.opacity = '0.3'

  }
});

// -------------------------------------------------------previewPhoto

const previewPhoto0 = document.querySelector('.previewPhoto0');
const previewPhoto1 = document.querySelector('.previewPhoto1');
const previewPhoto2 = document.querySelector('.previewPhoto2');
const previewPhoto3 = document.querySelector('.previewPhoto3');
const previewPhoto4 = document.querySelector('.previewPhoto4');
const preview = document.querySelectorAll('.preview');

// --------------------------------------------------------random words JSON

let fiveLetterWords = [];
let sixLetterWords = [];
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const jsonPath = isLocal ? 'http://127.0.0.1:5500/words.json' : '/rsschool-cv/js30ImageGallery/words.json';

fetch(jsonPath)
  .then((response) => response.json())
  .then((data) => {
    fiveLetterWords = data.five_letter_words;
    sixLetterWords = data.six_letter_words;

    whiteBlock.addEventListener("click", changeWords);
    whiteBlock.addEventListener("touchstart", changeWords);
  })
  .catch((error) => console.error("Ошибка при загрузке words.JSON:", error));

// --------------------------------------------------------------------------------change random words

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

// --------------------------------------------------------add music

const playAudio = new Audio("music/Gustavo.mp3");
whiteBlock.addEventListener("click", music);
function music() {
  imageFinder.style.color = "#16161616";
  playAudio.play();
  setTimeout(() => {
    playAudio.pause();
    imageFinder.style.color = "#CDCDCD";
    whiteBlock.removeEventListener("click", music);
  }, 17000);
}

// -------------------------------------------------------unsplash.com


function writeUrl(){
  let searchTerm = searchInput.value === '' ? 'lomography film' : searchInput.value;
  return `https://api.unsplash.com/search/photos?query=${searchTerm}&page=10&per_page=16&client_id=${accessKey}`;
}

let fetchedData;

fetch(writeUrl())
.then(response => response.json())
.then(date => {
  console.log(date);
  fetchedData = date;
   addPhotoPreview();
})
.catch(error => console.error('not find unsplash JSON', error));

// -------------------------------------------------------add previewPhoto

function addPhotoPreview(){
  for(let i = 0; i < preview.length; i += 1){
  photosUrl = fetchedData.results[i].urls.small;
  preview[i].style.backgroundImage = `url(${photosUrl})`;
  }
 }
