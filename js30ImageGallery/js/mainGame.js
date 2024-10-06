const modalWindowGameMode = document.querySelector(".modal-window-game-mode");
const searchMode = document.querySelector(".search-mode");
const gameMode = document.querySelector(".game-mode");
const newGame = document.querySelector('.new-game');
const playerName = document.querySelector('.player-name');

gameMode.addEventListener("click", () => {
  if(gameOrSearchFlag)searchMode.click();
 setTimeout(() => {
  gameMode.textContent = 'search mode';
  gameMode.style.padding = '0 2vw';
  modalWindowGameMode.style.visibility = "visible";
  modalWindowGameMode.style.opacity = "1";
  topPhotoLine.style.filter = "blur(5px)";
  bottomPhotoLine.style.filter = "blur(5px)";
  labelWrap.style.opacity = "0";
  gameOrSearchFlag = true;
  if (deliteImageFlag)deleteImage.click();
  photoBlockFromUnSplash.style.backgroundColor = '#F6F6F6';
 }, 300);
});

newGame.addEventListener("click", () => {
  localStorage.setItem('gameFlag', 'true');
  gameMode.click();
});
searchMode.addEventListener("click", () => {
  location.reload();
});

function hideGameModalWindow(){
  modalWindowGameMode.style.visibility = "hidden";
  modalWindowGameMode.style.opacity = "0";
  topPhotoLine.style.filter = "blur(0px)";
  bottomPhotoLine.style.filter = "blur(0px)";
  labelWrap.style.opacity = "1";
}

levelLow.addEventListener("click", () => level(1));
levelMedium.addEventListener("click", () => level(2));
levelHight.addEventListener("click", () => level(3));

function level(numLevel) {
  if(numLevel === 1){
    gameLevel = 'color oil image';
    startTimer = 46;
    selectedLevel = 1;
  }
  if(numLevel === 2){
    gameLevel = 'milk';
    startTimer = 36;
    selectedLevel = 1.5;
  }
  if(numLevel === 3){
    gameLevel = 'lemon art';
    startTimer = 26;
    selectedLevel = 2;
  }
  playersNames = playerName.value;
  setTimeout(() => {
  timerFrame.style.left = '86.5%';
  cardBefore = "$#$#$#$#9";
  strLinkToImage = "$#$#$#$#9";
  clickCounter = 0;
  counterImage = 10;
  score.textContent = `SCORE:`;
  photoBlockFromUnSplashProtectScreen.style.display = 'flex';
setTimeout(() => {
  photoBlockFromUnSplashProtectScreen.style.display = 'none';
},11000);
  hideGameModalWindow();
  const event = new KeyboardEvent("keydown", {
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13,
    bubbles: true
  });
  searchInput.dispatchEvent(event);
  }, 400);
}


