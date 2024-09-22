class AudioPlayer {
  constructor(song, nameInLine, boxEqualizer, gradient, photo, bpm) {
    this.song = song;
    this.nameInLine = nameInLine;
    this.boxEqualizer = boxEqualizer;
    this.gradient = gradient;
    this.photo = photo;
    this.bpm = bpm;
    this.audio = new Audio(song);
  }
  play() {
    this.audio.play();
  }
  pause() {
    this.audio.pause();
  }
}
let numberSong = 0;

const playPlayer = document.querySelector(".fa-play");
const stopPlayer = document.querySelector(".fa-pause");
const faForward = document.querySelector(".fa-forward");
const faBackward = document.querySelector(".fa-backward");
const addGradient = document.querySelector(".add-gradient");
const innerCase = document.querySelector(".inner-case");
const linePre = document.querySelector(".line-pre");
const flash = document.querySelector(".flash");
const setCurrentTimeDisplay = document.querySelector(".current-time");
const timeSongLineProgressBar = document.querySelector(
  ".timeSongLine-progress-bar"
);
const csTime = document.querySelector(".cs-time");
const fsTime = document.querySelector(".fs-time");
const innerRing = document.querySelector(".inner-ring");

stopPlayer.style.display = "none";

const arraySong = [
  "music/KILL4ME.mp3",
  "music/OffspringKidsAlright.mp3",
  "music/Franklin.mp3",
  "music/ORIFloor.mp3",
];
const arrayNameInLine = [
  "KILL4ME    Marlin Manson",
  "The Kids Arend's Alright     The Offsprings",
  "In Your Heart    The Franklin Electric",
  "On the Floor    ORI",
];

const box1 = document.querySelector(".full-box1");
const box2 = document.querySelector(".full-box2");
const box3 = document.querySelector(".full-box3");
const box4 = document.querySelector(".full-box4");
const arrayEqualizer = [box1, box2, box3, box4];

const arrayGradient = [
  "linear-gradient(to bottom,  #F7F7F7, #bebebe, #656565, #1b1b1b)",
  "linear-gradient(to bottom,  #F7F7F7, #af0000, #0063a4, #00111c)",
  "linear-gradient(to bottom,  #F7F7F7, #916161, #37191e, #00111c)",
  "linear-gradient(to bottom,  #aca396, #7c5151, #2d4a34, #160b00)",
];

const arrayPhoto = [
  `url('img/m2.png')`,
  `url('img/os1.png')`,
  `url('img/heart.png')`,
  `url('img/4ori.png')`,
];

const bpm = [0.55, 0.6, 1.85, 2];

let musicArray = [];
for (let i = 0; i < arraySong.length; i += 1) {
  musicArray.push(
    new AudioPlayer(
      arraySong[i],
      arrayNameInLine[i],
      arrayEqualizer[i],
      arrayGradient[i],
      arrayPhoto[i],
      bpm[i]
    )
  );
}

playPlayer.addEventListener("click", playMusic);

function playMusic() {
  if (numberSong >= arraySong.length || numberSong < 0) {
    numberSong = 0;
  }
  addGradient.style.backgroundImage = `${musicArray[numberSong].gradient}`;
  innerRing.style.animation = 'rotate 8s linear infinite';
  musicArray[numberSong].play();
  addGradient.style.opacity = "1";
  innerCase.style.opacity = "0";
  setTimeout(() => {
    innerCase.style.backgroundImage = `${musicArray[numberSong].photo}`;
  }, 2200);
  setTimeout(() => {
    innerCase.style.opacity = "1";
  }, 2200);
  linePre.style.display = "flex";
  linePre.innerHTML = "";
  linePre.innerHTML = `${musicArray[numberSong].nameInLine}`;
  arrayEqualizer.forEach((element) => {
    if (element === musicArray[numberSong].boxEqualizer) {
      element.style.display = "flex";
      let parent = element.parentElement;
      parent.style.color = "#CDCDCD";
    } else {
      let parentOther = element.parentElement;
      parentOther.style.color = "#A08748";
      element.style.display = "none";
    }
  });
  flash.style.display = "flex";
  playPlayer.style.display = "none";
  stopPlayer.style.display = "flex";
  flash.style.animation = `redLight  ${musicArray[numberSong].bpm}s ease-in infinite`;

  // ------------------------------------progress bar-------------------------
  musicArray[numberSong].audio.addEventListener("timeupdate", (event) => {
    const duration = musicArray[numberSong].audio.duration;
    const currentTime = musicArray[numberSong].audio.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    timeSongLineProgressBar.value = progressPercent;
  });
  timeSongLineProgressBar.addEventListener("input", (event) => {
    const duration = musicArray[numberSong].audio.duration;
    const newTime = (event.target.value / 100) * duration;
    musicArray[numberSong].audio.currentTime = newTime;
  });
  // --------------------------------^progress bar^-------------------------

  // -------------------------------time progress bar-----------------------
  musicArray[numberSong].audio.addEventListener("timeupdate", () => {
    const duration = musicArray[numberSong].audio.duration;
    fsTime.textContent = '';
    fsTime.textContent = formatTime(duration);
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  });
  musicArray[numberSong].audio.addEventListener("timeupdate", () => {
    const currentTime = musicArray[numberSong].audio.currentTime;
    csTime.textContent = '';
    csTime.textContent = formatTime(currentTime);
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  });
  // -----------------------------^^time progress bar-----------------------
}

musicArray[numberSong].audio.addEventListener("ended", nextSong);

function nextSong() {
  numberSong += 1;
  if (numberSong >= arraySong.length || numberSong < 0) {
    numberSong = 0;
  }
  playMusic();
  musicArray[numberSong].audio.addEventListener("ended", nextSong);
}

stopPlayer.addEventListener("click",stopMusic);

function stopMusic() {
  innerRing.style.animation = 'rotate 0s linear infinite';
  musicArray[numberSong].pause();
  playPlayer.style.display = "flex";
  stopPlayer.style.display = "none";
  flash.style.display = "none";
  linePre.style.display = "none";
  innerCase.style.opacity = "0.2";
};

let stopPlayFlag = true;
innerRing.addEventListener("click", () => {
  if(stopPlayFlag){
    playMusic();
    stopPlayFlag = false;
  }else{
    stopMusic();
    stopPlayFlag = true;
  }
})

faForward.addEventListener("click", () => {
  musicArray[numberSong].pause();
  musicArray[numberSong].audio.currentTime = 0;
  nextSong();
});
faBackward.addEventListener("click", () => {
  musicArray[numberSong].pause();
  musicArray[numberSong].audio.currentTime = 0;
  numberSong -= 2;
  nextSong();
});

musicArray.forEach((element, index) => {
  element.boxEqualizer.parentElement.addEventListener("click", () => {
    musicArray[numberSong].pause();
    musicArray[numberSong].audio.currentTime = 0;
    numberSong = index - 1;
    nextSong();
  });
});
// --------------------------------time---------------------------------
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  setCurrentTimeDisplay.textContent = formattedTime;
}
setInterval(updateTime, 1000);
updateTime();
