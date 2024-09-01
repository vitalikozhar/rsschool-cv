class SelectorPet {
  constructor(image, name, breed, info, age, inoculations, diseases, parasites) {
    this.image = image;
    this.name = name;
    this.breed = breed;
    this.info = info;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }
}

const pet1 = new SelectorPet(
  Object.assign(document.createElement('img'), {
    src: "img/4cbff971ed3cff4fcdd44ba6ce66e1be.png",
    alt: "pic pet"
  }),
  'Katrine',
  'Cat - British Shorthair',
  'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
  '2 months',
  'none',
  'none',
  'none',
);


const pet2 = new SelectorPet(
  Object.assign(document.createElement('img'), {
    src: "img/b523e1700aa8817d3357edad5cf38558.png",
    alt: "pic pet"
  }),
  'Jennifer',
  'Dog - Labrador',
  "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  '3 months',
  'none',
  'none',
  'none',
);

const pet3 = new SelectorPet(
  Object.assign(document.createElement('img'), {
    src: "img/d18a0a8b1c7ed291ade3e2e10ff4ebfe.png",
    alt: "pic pet"
  }),
  'Woody',
  "Dog - Golden Retriever",
  "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  '9 months',
  'none',
  'none',
  'none',
);

const pet4 = new SelectorPet(
  Object.assign(document.createElement('img'), {
    src: "img/Sophia.png",
    alt: "pic pet"
  }),
  'Sophia',
  "Dog - Shih tzu",
  "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  '2 months',
  'none',
  'none',
  'none',
);

const pet5 = new SelectorPet(
  Object.assign(document.createElement('img'), {
    src: "img/Timmy.png",
    alt: "pic pet"
  }),
  'Timmy',
  "Cat - British Shorthair",
  "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  '5 months',
  'none',
  'none',
  'none',
);

const pet6 = new SelectorPet(
  Object.assign(document.createElement('img'), {
    src: "img/Charly.png",
    alt: "pic pet"
  }),
  'Charly',
  "Dog - Jack Russell Terrier ",
  "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  '11 months',
  'none',
  'none',
  'none',
);

const pet7 = new SelectorPet(
  Object.assign(document.createElement('img'), {
    src: "img/Scarlett.png",
    alt: "pic pet"
  }),
  'Scarlett',
  "Dog - Jack Russell Terrier",
  "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  '3 months',
  'none',
  'none',
  'none',
);

const pet8 = new SelectorPet(
  Object.assign(document.createElement('img'), {
    src: "img/Freddie.png",
    alt: "pic pet"
  }),
  'Freddie',
  "Cat - British Shorthair",
  "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  '4 months',
  'none',
  'none',
  'none',
);

const pets = {
  pet1,
  pet2,
  pet3,
  pet4,
  pet5,
  pet6,
  pet7,
  pet8
};
let arrArr = [];
let clonePetArrImage = [];

// -------------------------------------mix pets cards--------------------------
function newrandomArray() {
  let arrayRund;
  let arrayRund2;
  let petArr;

  for (let i = 0; i < 6; i++) {
    petArr = [];
    arrayRund = [];

    for (let arrayRundLength = 0; arrayRundLength < 8;) {
      let rund = (Math.floor(Math.random() * 8)) + 1;
      if (!arrayRund.includes(rund)) {
        if ((i === 1 || i === 4) && (rund === arrayRund2[6] || rund === arrayRund2[7]) && (arrayRundLength === 0 || arrayRundLength === 1 || arrayRundLength === 2 || arrayRundLength === 3)) { continue; }
        if ((i === 2 || i === 5) && (rund === arrayRund2[4] || rund === arrayRund2[5] || rund === arrayRund2[6] || rund === arrayRund2[7]) && (arrayRundLength === 0 || arrayRundLength === 1)) { continue; }
        arrayRundLength = arrayRund.push(rund);
        petArr.push(pets['pet' + rund]);
      }
    }
    arrayRund2 = arrayRund;
    arrArr.push(petArr);
  }
  for (let el of arrArr) {
    for (let arrInArr of el) {
      clonePetArrImage.push(arrInArr.image.cloneNode(true));
    }
  }
}
newrandomArray();


// -----------------------------------write pets cards------------------------
let longArrArr = arrArr.flat(Infinity);
let small = 1;
let medium = 1;
let large = 1;
let buttonKeyNumber = document.querySelector('.button-key-number');
let buttonNextRight = document.querySelector('.button-next-right');
let buttonNextLeft = document.querySelector('.button-next-left');
let buttonNextRightLast = document.querySelector('.button-last-right');
let buttonNextLeftStart = document.querySelector('.button-start-left');


function writeCard() {
  let startIndex;
  let screenSize;
  if (window.innerWidth >= 1280) {
    startIndex = 8 * Math.floor((large - 1));
    screenSize = 8;
  }else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    startIndex = 6 * Math.floor( (medium-1));
    screenSize = 6;
  }else if (window.innerWidth < 768 && window.innerWidth >= 310) {
    startIndex = 3 * Math.floor( (small-1));
    screenSize = 3;
  }
  for (let i = 0; i < screenSize; i++) {
    const imgSlider = document.querySelector(`.img${i + 1}`);
    imgSlider.innerHTML = '';
    imgSlider.appendChild(clonePetArrImage[startIndex + i]);
    const petsName = document.querySelector(`.pets-name-${i + 1}`);
    petsName.textContent = '';
    petsName.textContent = longArrArr[startIndex + i].name;
  }
  changeStyleButtonNextLeft();
  changeStyleButtonNextRight();
}
writeCard();


// ------------------------------------- slider ---------------------------------
let i = 1;
let previousWidth = window.innerWidth;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;
  if (previousWidth >= 1280 && currentWidth < 1280) {
    buttonKeyNumber.textContent = `${Math.floor(medium)}`;
  } else if (currentWidth >= 1280 && previousWidth < 1280) {
    buttonKeyNumber.textContent = `${Math.floor(large)}`;
  } else if (previousWidth >= 768 && currentWidth < 768) {
    buttonKeyNumber.textContent = `${Math.floor(small)}`;
  } else if (currentWidth >= 768 && previousWidth < 768) {
    buttonKeyNumber.textContent = `${Math.floor(medium)}`;
  }
  previousWidth = currentWidth;
  writeCard();
});

buttonNextRight.addEventListener('click', () => {
  buttonKeyNumber.textContent = '';
  if (window.innerWidth >= 1280) {
    if (Math.floor(large) >= 6){
      buttonKeyNumber.textContent = `6`;
      console.log('test max 6');
    }else{
    small += 3;
    medium += 1.4;
    large += 1;
    buttonKeyNumber.textContent = `${Math.floor(large)}`;
    }
  } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    if (Math.floor(medium) >= 8){
      buttonKeyNumber.textContent = `8`;
    }else{
    small += 2.144;
    medium += 1;
    large += 0.7144;
    buttonKeyNumber.textContent = `${Math.floor(medium)}`;
    }
  } else if (window.innerWidth < 768 && window.innerWidth > 310) {
    if (Math.floor(small) >= 16){
      buttonKeyNumber.textContent = `16`;
    }else{
    small += 1;
    medium += 0.467;
    large += 0.33334;
    buttonKeyNumber.textContent = `${Math.floor(small)}`;
    }
  }
  writeCard();
});

buttonNextLeft.addEventListener('click', () => {
  buttonKeyNumber.textContent = '';
  if (window.innerWidth >= 1280) {
    if (Math.floor(large) <= 1){
      buttonKeyNumber.textContent = `1`;
    }else{
    small -= 3;
    medium -= 1.399999;
    large -= 1;
    buttonKeyNumber.textContent = `${Math.floor(large)}`;
    }
  } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    if ( Math.floor(medium) <= 1 ){
      buttonKeyNumber.textContent = `1`;
    }else {
    small -= 2.144;
    medium -= 1;
    large -= 0.7144;
    buttonKeyNumber.textContent = `${Math.floor(medium)}`;
    }
  } else if (window.innerWidth < 768 && window.innerWidth > 310) {
    if ( Math.floor(small) <= 1 ){
      buttonKeyNumber.textContent = `1`;
    }else{
    small -= 1;
    medium -= 0.466999;
    large -= 0.33334;
    buttonKeyNumber.textContent = `${Math.floor(small)}`;
    }
  }
  writeCard();
});

buttonNextLeftStart.addEventListener('click', () => {
  buttonKeyNumber.textContent = '';
  if (window.innerWidth >= 1280) {
    if (Math.floor(large) <= 1){
      buttonKeyNumber.textContent = `1`
    }else{
    small = 1;
    medium = 1;
    large = 1;
    buttonKeyNumber.textContent = `${Math.floor(large)}`;
    }
  } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    if ( Math.floor(medium) <= 1 ){
      buttonKeyNumber.textContent = `1`;
    }else {
    small = 1;
    medium = 1;
    large = 1;
    buttonKeyNumber.textContent = `${Math.floor(medium)}`;
    }
  } else if (window.innerWidth < 768 && window.innerWidth > 310) {
    if ( Math.floor(small) <= 1 ){
      buttonKeyNumber.textContent = `1`;
    }else{
    small = 1;
    medium = 1;
    large = 1;
    buttonKeyNumber.textContent = `${Math.floor(small)}`;
    }
  }
  writeCard();
});

buttonNextRightLast.addEventListener('click', () => {
  buttonKeyNumber.textContent = '';
  if (window.innerWidth >= 1280) {
    if (Math.floor(large) >= 6){
      buttonKeyNumber.textContent = `6`;
    }else{
    small = 16;
    medium = 8;
    large = 6;
    buttonKeyNumber.textContent = `${Math.floor(large)}`;
    }
  } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    if (Math.floor(medium) >= 8){
      buttonKeyNumber.textContent = `8`;
    }else{
    small = 16;
    medium = 8;
    large = 6;
    buttonKeyNumber.textContent = `${Math.floor(medium)}`;
    }
  } else if (window.innerWidth < 768 && window.innerWidth > 310) {
    if (Math.floor(small) >= 16){
      buttonKeyNumber.textContent = `16`;
    }else{
    small = 16;
    medium = 8;
    large = 6;
    buttonKeyNumber.textContent = `${Math.floor(small)}`;
    }
  }
  writeCard();
})


// ------------------------------styles slider buttons--------

buttonNextLeft.addEventListener('mouseover', () => {
  if (Math.floor(small) !== 1) {buttonNextLeft.style.backgroundColor = '#F1CDB3';}
});
buttonNextLeftStart.addEventListener('mouseout', () => {
  buttonNextLeftStart.style.backgroundColor = '#F6F6F6';
});
buttonNextLeftStart.addEventListener('mouseover', () => {
  if (Math.floor(small) !== 1) {buttonNextLeftStart.style.backgroundColor = '#F1CDB3';}
});
buttonNextLeft.addEventListener('mouseout', () => {
  buttonNextLeft.style.backgroundColor = '#F6F6F6';
});
buttonNextLeftStart.addEventListener('mouseout', () => {
  buttonNextLeftStart.style.backgroundColor = '#F6F6F6';
});

buttonNextRight.addEventListener('mouseover', () => {
  if (Math.floor(small) === 16) {
    buttonNextRight.style.borderColor = '#CDCDCD';
  }
  if (Math.floor(small) !== 16) {
    buttonNextRight.style.borderColor = '#F1CDB3';
    buttonNextRight.style.backgroundColor = '#F1CDB3';
  }
});
buttonNextRight.addEventListener('mouseout', () => {
  if (Math.floor(small) === 16) {
  buttonNextRight.style.backgroundColor = '#F6F6F6';
  }else{
    buttonNextRight.style.backgroundColor = '#F6F6F6';
  }
});

buttonNextRightLast.addEventListener('mouseover', () => {
  if (Math.floor(small) === 16) {
    buttonNextRightLast.style.borderColor = '#CDCDCD';
  }
  if (Math.floor(small) !== 16) {
    buttonNextRightLast.style.borderColor = '#F1CDB3';
    buttonNextRightLast.style.backgroundColor = '#F1CDB3';
  }
});
buttonNextRightLast.addEventListener('mouseout', () => {
  if (Math.floor(small) === 16) {
    buttonNextRightLast.style.backgroundColor = '#F6F6F6';
  }else{
    buttonNextRightLast.style.backgroundColor = '#F6F6F6';
  }
});

function changeStyleButtonNextLeft(){
  let buttonKeyNextLeft = document.querySelector('.button-key-next-left');
  if ( Math.floor(small) !== 1 ){
    buttonNextLeft.style.borderColor = '#F1CDB3';
    buttonNextLeft.style.cursor ='pointer';
    buttonKeyNextLeft.style.color = '#000000';
    buttonNextLeftStart.style.color = '#000000';
    buttonNextLeftStart.style.cursor ='pointer';
    buttonNextLeftStart.style.borderColor = '#F1CDB3';
  }else{
    buttonNextLeft.style.borderColor = '#CDCDCD';
    buttonNextLeft.style.cursor ='not-allowed';
    buttonKeyNextLeft.style.color = '#CDCDCD';
    buttonNextLeftStart.style.color = '#CDCDCD';
    buttonNextLeftStart.style.cursor = 'not-allowed';
    buttonNextLeftStart.style.borderColor = '#CDCDCD';
  }
}

function changeStyleButtonNextRight(){
  if ( Math.floor(small) !== 16 ){
    buttonNextRight.style.borderColor = '#F1CDB3';
    buttonNextRight.style.cursor ='pointer';
    buttonNextRight.style.color = '#000000';
    buttonNextRightLast.style.borderColor = '#F1CDB3';
    buttonNextRightLast.style.cursor ='pointer';
    buttonNextRightLast.style.color = '#000000';
  }else{
    buttonNextRight.style.borderColor = '#CDCDCD';
    buttonNextRight.style.cursor ='not-allowed';
    buttonNextRight.style.color = '#CDCDCD';
    buttonNextRightLast.style.borderColor = '#CDCDCD';
    buttonNextRightLast.style.cursor ='not-allowed';
    buttonNextRightLast.style.color = '#CDCDCD';
  }
}

let downButton = document.querySelectorAll('.down-button');
downButton.forEach(arr => {
  arr.addEventListener('mousedown', () => {
    arr.style.borderColor = '#F6F6F6';
  });
  arr.addEventListener('mouseup', () => {
    arr.style.borderColor = '#FDDCC4';
  });
});

// _______________________________burger  menu_______________________________

let rotateAngle = 0;
function turnBurgerMenu() {
  const turnBurgr = document.querySelector('.menu-burger');
  turnBurgr.style.transition = 'transform 0.6s ease'
  turnBurgr.addEventListener('click', () => {
    rotateAngle += 90;
    turnBurgr.style.transform = `rotate(${rotateAngle}deg)`;
  });
}
turnBurgerMenu();

function hideBurgerMenu() {
  let hide = true;
  const hideBurgerMenu = document.querySelector('.mobile-window');
  const greyWindow = document.querySelector('.grey-window');
  greyWindow.style.transition = 'opacity 0.6s ease';
  greyWindow.style.opacity = '0.6';


  const turnBurgr = document.querySelector('.menu-burger');
  hideBurgerMenu.style.transition = 'transform 0.4s ease';

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      document.body.style.overflow = 'auto';
      hideBurgerMenu.style.display = 'none';
    }
    if (window.innerWidth < 768) {
      hideBurgerMenu.style.display = 'flex';
    }
  });

  turnBurgr.addEventListener('click', () => {
    if (hide) {
      turnBurgr.style.position = 'fixed';
      greyWindow.style.display = 'flex';
      hideBurgerMenu.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        hideBurgerMenu.style.transform = 'translateX(0%)';
        greyWindow.style.opacity = '0.6';
      }, 200);
    } else {
      turnBurgr.style.position = 'absolute';
      greyWindow.style.display = 'none';
      document.body.style.overflow = 'auto';
      hideBurgerMenu.style.transform = 'translateX(100%)';

      setTimeout(() => {
        hideBurgerMenu.style.display = 'none';
        greyWindow.style.opacity = '0';
      }, 400);

    }
    hide = !hide;
  });

  // --------------------------------------grey modal window burger menu------------------
  greyWindow.addEventListener('click', () => {
    hideBurgerMenu.style.transform = 'translateX(100%)';
    setTimeout(() => {
      hideBurgerMenu.style.display = 'none';
    }, 400);
    turnBurgr.style.position = 'absolute';
    greyWindow.style.display = 'none';
    document.body.style.overflow = 'auto';
    rotateAngle += 90;
    turnBurgr.style.transform = `rotate(${rotateAngle}deg)`;
    hide = !hide;
  })

  const closeMobileWindow = document.querySelectorAll('.close-window');
  closeMobileWindow.forEach(element => {
    element.addEventListener('click', () => {
      hideBurgerMenu.style.transform = 'translateX(100%)';
      setTimeout(() => {
        hideBurgerMenu.style.display = 'none';
      }, 400);
      turnBurgr.style.position = 'absolute';
      greyWindow.style.display = 'none';
      document.body.style.overflow = 'auto';
      rotateAngle += 90;
      turnBurgr.style.transform = `rotate(${rotateAngle}deg)`;

      hide = !hide;
    })
  });
}
hideBurgerMenu();

// --------------------------------------modal pet window---------------------------
const showWindow = document.querySelector('.modal-window-example-1280');
const petsCards = document.querySelectorAll('.line-op');

petsCards.forEach((element) => {
  element.addEventListener('click', (event) => {
    let index = Array.from(petsCards).indexOf(event.currentTarget);
    let imageElement = event.currentTarget.querySelector(`.img${index+1} img`);
    for(let i = 0; i < 8 ; i++){
      if(imageElement.src == arrArr[0][i].image.src){
          index = i;
      }
    }
    showWindow.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    const pictureDivN = document.querySelector('.pets-name');
    pictureDivN.innerHTML = '';
    pictureDivN.appendChild(arrArr[0][index].image);
    writeContent(index);
  });
});

function writeContent(i) {
  let name = document.querySelector('.modal-window-title');
  let breed = document.querySelector('.modal-window-subtitle');
  let info = document.querySelector('.modal-window-text');
  let age = document.querySelector('.age');
  let inoculations = document.querySelector('.inoculations');
  let diseases = document.querySelector('.diseases');
  let parasites = document.querySelector('.parasites');
  name.textContent = '';
  name.textContent = longArrArr[i].name;
  breed.textContent = '';
  breed.textContent = longArrArr[i].breed;
  info.textContent = '';
  info.textContent = longArrArr[i].info;
  age.textContent = longArrArr[i].age;
  inoculations.textContent = longArrArr[i].inoculations;
  diseases.textContent = longArrArr[i].diseases;
  parasites.textContent = longArrArr[i].parasites;
}

const buttonLearnMoreClose = document.querySelector('.modal-close-button');
buttonLearnMoreClose.addEventListener('click', () => {
  showWindow.style.display = 'none';
  document.body.style.overflow = 'auto';
});

showWindow.addEventListener('click', () => {
  showWindow.style.display = 'none';
  document.body.style.overflow = 'auto';
});

let modalWindow = document.querySelector('.modal-window');
modalWindow.addEventListener('click', (event) => {
  event.stopPropagation();
});


