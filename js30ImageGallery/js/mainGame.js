const modalWindowGameMode = document.querySelector(".modal-window-game-mode");
const seachMode = document.querySelector(".seach-mode");
const gameMode = document.querySelector(".game-mode");

gameMode.addEventListener("click", () => {
  modalWindowGameMode.style.visibility = "visible";
  modalWindowGameMode.style.opacity = "1";
  topPhotoLine.style.filter = "blur(5px)";
  bottomPhotoLine.style.filter = "blur(5px)";
  labelWrap.style.opacity = "0";
  gameOrSeachFlag = true;
  deleteImage.click();
  photoBlockFromUnSplash.style.backgroundColor = '#F6F6F6';
});

seachMode.addEventListener("click", () => {
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
  if(numLevel === 1)gameLevel = 'green';
  if(numLevel === 2)gameLevel = 'yellow';
  if(numLevel === 3)gameLevel = 'red';
  counterImage = 10;
  hideGameModalWindow();
  const event = new KeyboardEvent("keydown", {
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13,
    bubbles: true
  });
  searchInput.dispatchEvent(event);
}

//  -
