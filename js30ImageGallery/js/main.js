const loading = document.querySelector(".loading");
const searchInput = document.querySelector(".enter-text");
const iconSearch = document.querySelector(".icon-search");
const pepperLogo = document.querySelector(".fa-pepper-hot");
const whitePepper = document.querySelector(".white-background h1");
const whiteBlock = document.querySelector(".white-block");
const material = document.querySelector(
  ".icon-search .material-symbols-outlined"
);
const imageFinder = document.querySelector(".image-finder");
const accessKey = "LagzL3quEP0QQ7SBjeleGxctpcnH3pLIyGRibgcrW-k";
const topPhotoLine = document.querySelector(".topPhotoLine");
const bottomPhotoLine = document.querySelector(".bottomPhotoLine");
const screenSaver = document.querySelector(".screen-saver");
const photoBlockFromUnSplash = document.querySelector(
  ".photoBlockFromUnSplash"
);
const nextPage = document.querySelector(".nextPage");
const home = document.querySelector(".home");
const deleteImage = document.querySelector(".deleteImage");
const frameModalWindow = document.querySelector(".frame-modal-window");
const modalWindow = document.querySelector(".modal-window");
const modalImg = document.querySelector(".modal-img");
const backIcon = document.querySelector(
  ".frame-modal-window .material-symbols-outlined"
);
const setting = document.querySelector(".setting");
const settingModalWindow = document.querySelector(".setting-modal-window");
const autherPhoto = document.querySelector(".autherPhoto");
const downloadLinkButton = document.querySelector('.downloadLinkButton');
let currentBlock;
let preview;
let fetchedData;
let page = 1;
let limit = 0;
let deliteImageFlag = true;
// ----------------------------------------------------------------page design

window.addEventListener("load", () => {
  for (let i = 0; i < 8; i += 1) {
    let newDivTop = document.createElement("div");
    newDivTop.className = "preview";

    let newDivBottom = document.createElement("div");
    newDivBottom.className = "preview";

    if (i === 6) {
      newDivTop.classList.add("previewPhoto6");
      newDivBottom.classList.add("previewPhoto6");
    }
    if (i === 7) {
      newDivTop.classList.add("previewPhoto7");
      newDivBottom.classList.add("previewPhoto7");
    }
    topPhotoLine.appendChild(newDivTop);
    bottomPhotoLine.appendChild(newDivBottom);
  }
  preview = document.querySelectorAll(".preview");

  fetchImages();
  screenForLoading();
});

function screenForLoading() {
  setTimeout(() => {
    screenSaver.style.display = "flex";
    screenSaver.style.opacity = "0";
  }, 600);

  setTimeout(() => {
    loading.style.opacity = "1";
    loading.style.visibility = "visible";
    searchInput.focus();
    screenSaver.style.display = "none";
  }, 1400);
}

searchInput.addEventListener("input", () => {
  if (searchInput.value === "") {
    whiteBlock.style.backgroundColor = "#FFFFFF";
    whitePepper.style.opacity = 0.8;
    topPhotoLine.style.opacity = "1";
    bottomPhotoLine.style.opacity = "1";
  } else {
    whiteBlock.style.backgroundColor = "#00A5FF91";
    whitePepper.style.opacity = 0.2;
    topPhotoLine.style.opacity = "0.3";
    bottomPhotoLine.style.opacity = "0.3";
  }
});

// --------------------------------------------------------random words JSON

let fiveLetterWords = [];
let sixLetterWords = [];
const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";
const jsonPath = isLocal
  ? "http://127.0.0.1:5500/words.json"
  : "/rsschool-cv/js30ImageGallery/words.json";

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
  searchInput.style.padding = "0 18vw";
  searchInput.style.opacity = "0";
  setting.style.opacity = "0";

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
    setting.style.opacity = "1";
  }, 10500);
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

function fetchImages() {
  fetch(writeUrl())
    .then((response) => response.json())
    .then((data) => {
      fetchedData = data;
      console.log('data');
      console.log(data);
      addPhotoPreview();
      addPhotoToPhotoBlock();
    })
    .catch((error) => console.error("not find UnSplash JSON", error));
}

function writeUrl() {
  let nextPage = page;
  let searchTerm = searchInput.value === "" ? "milk  food" : searchInput.value;
  return `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${nextPage}&per_page=30&client_id=${accessKey}`;
}

// -------------------------------------------------------add previewPhoto

function addPhotoPreview() {
  for (let i = 0; i < preview.length; i += 1) {
    let photosUrl = fetchedData.results[i].urls.small;
    preview[i].style.backgroundImage = `url(${photosUrl})`;
  }
}

//  --------------------------------------------------------add photo in block
let imageCard = document.querySelectorAll(".imageCard");

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    window.scrollTo(0, 0);
    page = 1;
    limit = 0;
    if (imageCard.length > 0) {
      imageCard.forEach((element) => {
        element.remove();
      });
    }
    addNextPage();
    deleteImage.style.display = "flex";
    screenSaver.style.opacity = "1";
    screenSaver.style.display = "flex";
    screenForLoading();
    iconSearch.style.transform = "translateY(10px)";
    iconSearch.style.top = "0";
    iconSearch.style.position = "fixed";
    iconSearch.style.opacity = "0.8";
    home.style.opacity = "1";
    deleteImage.style.opacity = "1";
    fetchImages();
    photoBlockFromUnSplash.style.display = "flex";
    nextPage.style.display = "flex";
  }
});

home.addEventListener("click", () => {
  deleteImage.style.display = "none";
  screenSaver.style.opacity = "0";
  screenSaver.style.display = "none";
  iconSearch.style.transform = "translateY(220%)";
  iconSearch.style.top = "50%";
  iconSearch.style.position = "absolute";
  iconSearch.style.opacity = "1";
  home.style.opacity = "0";
  deleteImage.style.opacity = "0";
  photoBlockFromUnSplash.style.display = "none";
  nextPage.style.display = "none";
});

function addNextPage() {
  for (let i = 0; i < 30; i += 1) {
    let photoCart = document.createElement("div");
    photoCart.className = "imageCard";
    photoBlockFromUnSplash.appendChild(photoCart);
  }
  imageCard = document.querySelectorAll(".imageCard");
}
addNextPage();

function addPhotoToPhotoBlock() {
  for (let i = 0; i < 30; i += 1) {
    let photosUrl = fetchedData.results[i].urls.small;
    let photosUrlRegular = fetchedData.results[i].urls.regular;
    let photosUrlFull = fetchedData.results[i].urls.full;
    let author = fetchedData.results[i].user.name;
    let authorLink = fetchedData.results[i].user.links.html;
    let downLoadocation = fetchedData.results[i].links.download;
    imageCard[i + limit].style.backgroundImage = `url(${photosUrl})`;
    imageCard[i + limit].dataset.regular = photosUrlRegular;
    imageCard[i + limit].dataset.full = photosUrlFull;
    imageCard[i + limit].dataset.author = author;
    imageCard[i + limit].dataset.authorLink = authorLink;
    imageCard[i + limit].dataset.download = downLoadocation;

    //  ----------------delite photo cards----------
    imageCard.forEach((element) => {
      element.addEventListener("click", zoom);
    });
    //  --------------^^delite photo cards----------
  }
}

let keySpaceFlag = false;

function zoom() {
  currentBlock = this;
  currentBlock.style.boxSizing = "border-box";
  currentBlock.style.border = "0.3vw solid #00A5FF";
  const spanDelete = currentBlock.querySelectorAll("span");
  if (spanDelete.length > 0) spanDelete.remove();
  if (!deliteImageFlag) {
    currentBlock.style.display = "none";
  } else {
    keySpaceFlag = true;
    frameModalWindow.style.visibility = "visible";
    frameModalWindow.style.opacity = "1";
    photoBlockFromUnSplash.style.filter = "blur(6px)";
    iconSearch.style.opacity = "0";
    nextPage.style.opacity = "0";
    modalImg.style.backgroundImage = `url(${currentBlock.dataset.regular})`;
    autherPhoto.innerHTML = "";
    autherPhoto.innerHTML = `<a href="${currentBlock.dataset.authorLink}" target="_blank" rel="noopener noreferrer">photo by:&nbsp ${currentBlock.dataset.author}&nbsp </a><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">&nbsp on UnSplash</a>`;
    downloadLinkButton.href = `${currentBlock.dataset.download}`;
    downloadLinkButton.target = '_blank';
  }
}

backIcon.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", (event) => {
  if (event.key === " " && keySpaceFlag) {
    event.preventDefault();
    closeModalWindow();
    keySpaceFlag = false;
  }
});

function closeModalWindow() {
  frameModalWindow.style.visibility = "hidden";
  frameModalWindow.style.opacity = "0";
  iconSearch.style.opacity = "1";
  nextPage.style.opacity = "1";
  photoBlockFromUnSplash.style.filter = "blur(0px)";
}

nextPage.addEventListener("click", () => {
  page += 1;
  limit += 30;
  addNextPage();
  fetchImages();
  nextPage.style.backgroundColor = "#FF0000";
  nextPage.style.height = "1vw";
  setTimeout(() => {
    nextPage.style.backgroundColor = "#FFFFFF";
    nextPage.style.height = "2vw";
  }, 400);
});

// -------------------------------------------------------delete photo
deleteImage.addEventListener("click", () => {
  if (deliteImageFlag) {
    deleteImage.style.color = "#FF0000";
    deliteImageFlag = false;
  } else {
    deleteImage.style.color = "#161616";
    deliteImageFlag = true;
  }
});

// --------------------------------------------------------------button settings
setting.addEventListener("click", openCloseSettingWindow);

let openCloseSettingWindowFlag = true;
function openCloseSettingWindow() {
  if (openCloseSettingWindowFlag) {
    settingModalWindow.style.opacity = "0.9";
    settingModalWindow.style.visibility = "visible";
    openCloseSettingWindowFlag = false;
  } else {
    settingModalWindow.style.opacity = "0";
    settingModalWindow.style.visibility = "hidden";
    openCloseSettingWindowFlag = true;
  }
}
// --
