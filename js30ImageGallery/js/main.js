const loading = document.querySelector(".loading");
const searchInput = document.querySelector(".enter-text");
const iconSearch = document.querySelector(".icon-search");
const labelWrap = document.querySelector(".label-wrap");
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
const authorPhoto = document.querySelector(".authorPhoto");
const downloadLinkButton = document.querySelector(".downloadLinkButton");
const levelLow = document.querySelector(".level-Low");
const levelMedium = document.querySelector(".level-medium");
const levelHight = document.querySelector(".level-hight");
const score = document.querySelector(".score");
const timer = document.querySelector(".timer");
const scoreFrame = document.querySelector(".scoreFrame");
const timerFrame = document.querySelector(".timerFrame");
const photoBlockFromUnSplashProtectScreen = document.querySelector(
  ".photoBlockFromUnSplashProtectScreen"
);
let imageCard = document.querySelectorAll(".imageCard");

let currentBlock;
let preview;
let fetchedData;
let page = 1;
let limit = 0;
let deliteImageFlag = true;
let gameOrSearchFlag = false;
let selectedLebel;
let counterImage = 30;
let counterGameScore = 0;
let selectedLevel = 1;
// ----------------------------------------------------------------page design

if (localStorage.getItem('gameFlag') === 'true') {
  localStorage.removeItem('gameFlag');
  setTimeout(() => {
    gameMode.click();
  }, 500);
}
window.addEventListener("load", () => {
  screenForLoading();
});

fetchImages();

function makePreviewFrame() {
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
}
makePreviewFrame();

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
  searchInput.style.padding = "0 20vw";
  searchInput.style.opacity = "0";
  setting.style.opacity = "0";

  setTimeout(() => {
    searchInput.value = "";
    searchInput.style.opacity = "1";
    searchInput.placeholder = "Who r u today?";
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
      addPhotoPreview();
      addPhotoToPhotoBlock();
    })
    .catch((error) => console.error("not find UnSplash JSON", error));
}
let gameLevel = "";
function writeUrl() {
  let nextPage;
  let searchTerm;
  if (!gameOrSearchFlag) {
    nextPage = page;
    searchTerm = searchInput.value === "" ? "milk  food" : searchInput.value;
  } else {
    nextPage = 1;
    searchTerm = gameLevel;
  }
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
    labelWrap.style.transform = "translateY(10px)";
    labelWrap.style.top = "0";
    labelWrap.style.position = "fixed";
    labelWrap.style.opacity = "0.8";
    home.style.opacity = "1";
    deleteImage.style.opacity = "1";
    fetchImages();
    photoBlockFromUnSplash.style.display = "flex";
    nextPage.style.display = "flex";

    if (gameOrSearchFlag) {
      labelWrap.style.transform = "translateY(-83px)";
      photoBlockFromUnSplash.style.alignSelf = "center";
      photoBlockFromUnSplash.style.width = "83%";
      nextPage.style.display = "none";
      imageCard.forEach((el) => {
        el.style.width = "16%";
      });
      topPhotoLine.style.opacity = "0";
      bottomPhotoLine.style.opacity = "0";
      newGame.style.display = 'flex';
      gameMode.style.left = "26.5vw";
      gameMode.style.top = "173px";
      gameMode.style.backgroundColor = "#161616";
      iconSearch.style.visibility = "hidden";
      let startTimerEnter = 11;
      let startIntervalTimerInner4 = setInterval(() => {
        startTimerEnter -= 1;
        timer.textContent = `TIME:${startTimerEnter}`;
        if (startTimerEnter === 0) clearInterval(startIntervalTimerInner4);
      }, 1000);
      setTimeout(() => {
        controlScoreAndBonus();
      }, 11000);

      //  ------------------------------------------------mix cards for GAME MOD
      imageCard = mixArray(imageCard);
      timerFrame.style.display = "flex";
      scoreFrame.style.display = "flex";
    }
  }
});

function mixArray(imageCard) {
  const imageCardArray = Array.from(imageCard);
  for (let i = 20 - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageCardArray[i], imageCardArray[j]] = [
      imageCardArray[j],
      imageCardArray[i],
    ];
  }
  return imageCardArray;
}

const mediaQuery = window.matchMedia("(max-aspect-ratio: 1/1)");
window.addEventListener("resize", () => {
  if (gameOrSearchFlag) {
    setphotoBlockFromUnSplashWidth(mediaQuery);
  }
});
function setphotoBlockFromUnSplashWidth(newWidth) {
  photoBlockFromUnSplash.style.width = newWidth.matches ? "100%" : "83%";
}

home.addEventListener("click", () => {
  deleteImage.style.display = "none";
  screenSaver.style.opacity = "0";
  screenSaver.style.display = "none";
  labelWrap.style.transform = "translateY(110%)";
  labelWrap.style.top = "50%";
  labelWrap.style.position = "absolute";
  labelWrap.style.opacity = "1";
  home.style.opacity = "0";
  deleteImage.style.opacity = "0";
  photoBlockFromUnSplash.style.display = "none";
  nextPage.style.display = "none";
  gameMode.style.backgroundColor = "";
});

function addNextPage() {
  let localCounterImage = counterImage;
  if (gameOrSearchFlag) {
    localCounterImage *= 2;
  }
  for (let i = 0; i < localCounterImage; i += 1) {
    let photoCart = document.createElement("div");
    photoCart.className = "imageCard";
    photoBlockFromUnSplash.appendChild(photoCart);
  }
  imageCard = document.querySelectorAll(".imageCard");
}
addNextPage();

function addPhotoToPhotoBlock() {
  for (let i = 0; i < counterImage; i += 1) {
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

    if (gameOrSearchFlag) {
      imageCard[i + counterImage].style.backgroundImage = `url(${photosUrl})`;
      imageCard[i + counterImage].dataset.regular = photosUrlRegular;
      imageCard[i + counterImage].dataset.full = photosUrlFull;
      imageCard[i + counterImage].dataset.author = author;
      imageCard[i + counterImage].dataset.authorLink = authorLink;
      imageCard[i + counterImage].dataset.download = downLoadocation;
    }
  }
  //  ----------------delite photo cards----------
  imageCard.forEach((element) => {
    element.addEventListener("click", zoom);
    if (gameOrSearchFlag) {
      hideCardsGameMode(element);
    }
  });
}

function hideCardsGameMode(element) {
  setTimeout(() => {
    element.style.border = `6.6vw solid #CDCDCD`;
    element.style.opacity = `0.4`;
  }, 11000);
}

let keySpaceFlag = false;
let cardBefore = "$#$#$#$#9";
let strLinkToImage = "$#$#$#$#9";
let startTimer = 99;
let clickCounter = 0;
let result;
let penalty = 0;

function zoom() {
  if (!keySpaceFlag) currentBlock = this;
  currentBlock.style.boxSizing = "border-box";
  currentBlock.style.border = "0.3vw solid #00A5FF";
  const spanDelete = currentBlock.querySelectorAll("span");
  if (spanDelete.length > 0) spanDelete.remove();
  if (!deliteImageFlag) {
    // ------------------------------------hidden blocks in gameMode / delete blocks in searchMode
    if (gameOrSearchFlag) {
      if (currentBlock.dataset.regular === strLinkToImage) {
        counterGameScore += 10;
        clickCounter += 1;
        currentBlock.style.visibility = "hidden";
        cardBefore.style.visibility = "hidden";
      } else {
        counterGameScore -= 3;
        score.textContent = `SCORE:${counterGameScore}`;
      }
      if(cardBefore !== "$#$#$#$#9"){
        cardBefore.style.border = `6.6vw solid #CDCDCD`;
      }
      cardBefore = currentBlock;
      strLinkToImage = currentBlock.dataset.regular;
    } else {
      currentBlock.style.display = "none";
    }
  } else {
    keySpaceFlag = true;
    frameModalWindow.style.visibility = "visible";
    frameModalWindow.style.opacity = "1";
    photoBlockFromUnSplash.style.filter = "blur(6px)";
    labelWrap.style.opacity = "0";
    nextPage.style.opacity = "0";
    modalImg.style.backgroundImage = `url(${currentBlock.dataset.regular})`;
    authorPhoto.innerHTML = "";
    authorPhoto.innerHTML = `<a href="${currentBlock.dataset.authorLink}" target="_blank" rel="noopener noreferrer">photo by:&nbsp ${currentBlock.dataset.author}&nbsp </a><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">&nbsp on UnSplash</a>`;
    downloadLinkButton.href = `${currentBlock.dataset.download}`;
    downloadLinkButton.target = "_blank";
  }
}
// ------------------------------------------ add BONUS and SCORE

function controlScoreAndBonus() {
  score.textContent = `SCORE:${counterGameScore}`;
  if (strLinkToImage === "$#$#$#$#9") {
      let startIntervalTimer = setInterval(() => {
      startTimer -= 1;
      timer.textContent = `BONUS:${startTimer}`;
      if (startTimer < 1 || clickCounter === 10) {
        clearInterval(startIntervalTimer);
        score.textContent = `SCORE:${counterGameScore}`;
        result = counterGameScore * selectedLevel + startTimer;
        photoBlockFromUnSplashProtectScreen.style.display = "flex";
        timerFrame.style.left = "53%";
        scoreFrame.style.left = "33%";

        imageCard.forEach((element) => {
          if (element.style.visibility !== "hidden") {
            penalty += 10;
            console.log("penalty: " + penalty);
          }
        });

        setTimeout(() => {
            let startIntervalTimerInner = setInterval(() => {
            startTimer -= 1;
            timer.textContent = `BONUS:${startTimer}`;
            if (startTimer < 1) clearInterval(startIntervalTimerInner);
            if (penalty !== 0) {
              timer.textContent = `PENALTY:-${penalty}`;
            }
          }, 100);

          let startIntervalTimerInner2 = setInterval(() => {
            counterGameScore += 1;
            score.textContent = `SCORE:${counterGameScore}`;
            if (counterGameScore >= result) {
              clearInterval(startIntervalTimerInner2);
            }
            if (counterGameScore === 1) {
              score.textContent = `RESULT:${counterGameScore - 1 - penalty}`;
            } else {
              score.textContent = `RESULT:${counterGameScore - penalty}`;
            }
          }, 100);
        }, 2000);
      }
    }, 1000);
  }
}

backIcon.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", (event) => {
  if (event.key === " " && keySpaceFlag) {
    event.preventDefault();
    keySpaceFlag = false;
    closeModalWindow();
  }
});

function closeModalWindow() {
  keySpaceFlag = false;
  frameModalWindow.style.visibility = "hidden";
  frameModalWindow.style.opacity = "0";
  labelWrap.style.opacity = "0.8";
  nextPage.style.opacity = "0.8";
  photoBlockFromUnSplash.style.filter = "blur(0px)";
}

nextPage.addEventListener("click", () => {
  page += 1;
  limit += 30;
  addNextPage();
  fetchImages();
  nextPage.style.backgroundColor = "#FF0000";
  setTimeout(() => {
    nextPage.style.backgroundColor = "#FFFFFF";
  }, 400);
});

// ------------------------------------------------------------delete photo
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

// ----------------------------------------------------------- next / before (change Main Image)

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && keySpaceFlag) {
    let beforeImage = currentBlock.previousElementSibling;
    if (beforeImage) {
      currentBlock = beforeImage;
      zoom();
    }
  }
  if (event.key === "ArrowRight" && keySpaceFlag) {
    let nextImage = currentBlock.nextElementSibling;
    if (nextImage) {
      currentBlock = nextImage;
      zoom();
    } else {
      nextPage.click();
    }
  }
});
