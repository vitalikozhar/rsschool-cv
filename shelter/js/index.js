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
let pets = [];
fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    pets = data.map(pet => {
      const image = Object.assign(document.createElement('img'), {
        src: pet.image.src,
        alt: pet.image.alt
      });
      return new SelectorPet(
        image,
        pet.name,
        pet.breed,
        pet.info,
        pet.age,
        pet.inoculations,
        pet.diseases,
        pet.parasites
      );
    });

    // ------------------------------- mix pets objects-------------------
    document.body.style.overflowX = 'hidden';
    let petArr = pets;
    for (let i = petArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [petArr[i], petArr[j]] = [petArr[j], petArr[i]];
    }

    let clonePetArrImage = [];
    for (let el of petArr) {
      clonePetArrImage.push(el.image.cloneNode(true));
    }

    // ----------------------------------- add info to pets card---------------
    function addInfo() {
      for (let i = 0; i < petArr.length; i++) {
        if (i === 0) {
          const pictureDiv = document.querySelector('.picture');
          pictureDiv.innerHTML = '';
          pictureDiv.appendChild(clonePetArrImage[i]);
          const pictureDivName = document.createElement('span');
          pictureDivName.className = 'picture-name';
          pictureDivName.textContent = petArr[i].name;
          pictureDiv.appendChild(pictureDivName);
        }
        if (i === 1) {
          const pictureDiv2 = document.querySelector('.picture-two');
          pictureDiv2.innerHTML = '';
          pictureDiv2.appendChild(clonePetArrImage[i]);
          const pictureDivName2 = document.createElement('span');
          pictureDivName2.className = 'picture-name-two';
          pictureDivName2.textContent = petArr[i].name;
          pictureDiv2.appendChild(pictureDivName2);

        }
        if (i === 2) {
          const pictureDiv3 = document.querySelector('.picture-three');
          pictureDiv3.innerHTML = '';
          pictureDiv3.appendChild(clonePetArrImage[i]);
          const pictureDivName3 = document.createElement('span');
          pictureDivName3.className = 'picture-name-three';
          pictureDivName3.textContent = petArr[i].name;
          pictureDiv3.appendChild(pictureDivName3);
        }
      }
    }
    addInfo();

    // ------------------------------- slider ------------------------------------
    const sliderPets = document.querySelector('.slider');

    let counterLeft = 0;
    let counterRight = 0;
    let tempClonePetArrImage;
    let tempClonePetArrImage2;
    let temp;
    let temp2;

    const buttonArrowLeft = document.querySelector('.button-arrow-left');
    buttonArrowLeft.addEventListener('click', () => {
      sliderPets.style.opacity = '0';
      for (let i = 0; i < 3; i++) {
        petArr.unshift(petArr.pop());
        clonePetArrImage.unshift(clonePetArrImage.pop());
      }
      counterRight = 0;
      counterLeft++;
      if (counterLeft >= 2) {
        temp = petArr[0];
        petArr[0] = petArr[5];
        petArr[5] = temp;
        tempClonePetArrImage = clonePetArrImage[0];
        clonePetArrImage[0] = clonePetArrImage[5];
        clonePetArrImage[5] = tempClonePetArrImage;
      }
      setTimeout(() => {
        addInfo();
        sliderPets.style.display = 'none';
        sliderPets.style.transform = 'translateX(100%)';
      }, 200);
      setTimeout(() => {
        addInfo();
        sliderPets.style.display = 'flex';
      }, 270);
      setTimeout(() => {
        addInfo();
        sliderPets.style.opacity = '1';
        sliderPets.style.transform = 'translateX(0%)';
      }, 410);
    });

    const buttonArrowRight = document.querySelector('.button-arrow-right');
    buttonArrowRight.addEventListener('click', () => {
      sliderPets.style.opacity = '0';
      for (let i = 0; i < 3; i++) {
        petArr.push(petArr.shift())
        clonePetArrImage.push(clonePetArrImage.shift());
      }
      counterLeft = 0;
      counterRight++;
      if (counterRight >= 2) {
        temp2 = petArr[0];
        petArr[0] = petArr[4];
        petArr[4] = temp2;
        tempClonePetArrImage2 = clonePetArrImage[0];
        clonePetArrImage[0] = clonePetArrImage[4];
        clonePetArrImage[4] = tempClonePetArrImage2;
      }
      setTimeout(() => {
        addInfo();
        sliderPets.style.display = 'none';
        sliderPets.style.transform = 'translateX(-100%)';
      }, 200);
      setTimeout(() => {
        addInfo();
        sliderPets.style.display = 'flex';
      }, 270);
      setTimeout(() => {
        addInfo();
        sliderPets.style.opacity = '1';
        sliderPets.style.transform = 'translateX(0%)';
      }, 410);
    });
    const buttonsArrow = document.querySelectorAll('.button-arrow-right, .button-arrow-left');


    buttonsArrow.forEach(arr => {
      arr.addEventListener('mousedown', () => {
        arr.style.borderColor = '#F6F6F6';
      });
      arr.addEventListener('mouseup', () => {
        arr.style.borderColor = '#FDDCC4';
      });
    });


    const showWindow = document.querySelector('.modal-window-example-1280');

    const buttonLearnMoreOne = document.querySelector('.card-one');
    buttonLearnMoreOne.addEventListener('click', () => {
      showWindow.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      const pictureDivN = document.querySelector('.pets-name');
      pictureDivN.innerHTML = '';
      pictureDivN.appendChild(petArr[0].image);
      writeContent(0);
    });

    const buttonLearnMoreTwo = document.querySelector('.card-two');
    buttonLearnMoreTwo.addEventListener('click', () => {
      showWindow.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      const pictureDivN = document.querySelector('.pets-name');
      pictureDivN.innerHTML = '';
      pictureDivN.appendChild(petArr[1].image);
      writeContent(1);
    });

    const buttonLearnMoreThree = document.querySelector('.card-three');
    buttonLearnMoreThree.addEventListener('click', () => {
      showWindow.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      const pictureDivN = document.querySelector('.pets-name');
      pictureDivN.innerHTML = '';
      pictureDivN.appendChild(petArr[2].image);
      writeContent(2);
    });

    const buttonLearnMoreClose = document.querySelector('.modal-close-button');
    buttonLearnMoreClose.addEventListener('click', () => {
      showWindow.style.display = 'none';
      document.body.style.overflow = 'auto';
      // addInfo();
    });

    showWindow.addEventListener('click', () => {
      showWindow.style.display = 'none';
      document.body.style.overflow = 'auto';
      // addInfo();
    });

    let modalWindow = document.querySelector('.modal-window');
    modalWindow.addEventListener('click', (event) => {
      event.stopPropagation();
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
      name.textContent = petArr[i].name;
      breed.textContent = '';
      breed.textContent = petArr[i].breed;
      info.textContent = '';
      info.textContent = petArr[i].info;
      age.textContent = petArr[i].age;
      inoculations.textContent = petArr[i].inoculations;
      diseases.textContent = petArr[i].diseases;
      parasites.textContent = petArr[i].parasites;
    }

    // _______________________________Shelter Part3_______________________________

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
  })
  .catch(error => console.error('Ошибка:', error));












console.log('Согласно предложенным Критериям оценки, \nс учётом Особенностей проверки вёрстки на соответствие макету,\nв ходе самопроверки была выставлен оценка: 200 ');
