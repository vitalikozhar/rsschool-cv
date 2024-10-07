const modalWindowGameMode = document.querySelector(".modal-window-game-mode");
const searchMode = document.querySelector(".search-mode");
const gameMode = document.querySelector(".game-mode");
const newGame = document.querySelector('.new-game');
const playerName = document.querySelector('.player-name');
const ring1 = document.querySelector('.ring1');
const ring2 = document.querySelector('.ring2');
const ring3 = document.querySelector('.ring3');
const streamMusic = document.querySelector('.stream-music');
const lay = document.querySelector('.lay');
let layFlag = true;

lay.addEventListener('click' , () => {
  if (layFlag){
    streamMusic.style.opacity = '0.5';
    lay.style.boxShadow = 'inset 0 0 23px #575353DC';
    layFlag = false;
    ring1.style.display = 'flex';
    ring2.style.display = 'flex';
    ring3.style.display = 'flex';
    ring1.style.animation = 'play-music 1.5s linear infinite';
    ring2.style.animation = 'play-music 3s linear infinite';
    ring3.style.animation = 'play-music 5s linear infinite';
  }else{
    streamMusic.style.opacity = '0';
    lay.style.boxShadow = 'inset 0 0 10px #5753535c';
    ring1.style.display = 'none';
    ring2.style.display = 'none';
    ring3.style.display = 'none';
    ring1.style.animation = 'none';
    ring2.style.animation = 'none';
    ring3.style.animation = 'none';
    layFlag = true;

  }
})
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

clearResults.addEventListener('click', () => {
  localStorage.removeItem('results');
  localStorage.setItem('gameFlag', 'true');
  gameMode.click();
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


