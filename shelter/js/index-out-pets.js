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

<<<<<<< HEAD
=======
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const jsonPath = isLocal ? '../data.json' : '/data.json';
>>>>>>> shelter-part3
fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    const pets = data.reduce((acc, pet, index) => {
      const image = Object.assign(document.createElement('img'), {
        src: pet.image.src,
        alt: pet.image.alt
      });

      // Создаем ключи pet1, pet2 и т.д.
      acc[`pet${index + 1}`] = new SelectorPet(
        image,
        pet.name,
        pet.breed,
        pet.info,
        pet.age,
        pet.inoculations,
        pet.diseases,
        pet.parasites
      );
      return acc;
    }, {});

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

})
.catch(error => console.error('Ошибка:', error));
