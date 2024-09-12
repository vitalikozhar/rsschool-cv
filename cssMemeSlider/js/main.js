
const d1 = document.querySelector('.d1');
const d2 = document.querySelector('.d2');
const d3 = document.querySelector('.d3');
const d4 = document.querySelector('.d4');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const dot4 = document.querySelector('.dot4');
const move = document.querySelector('.move');

const slider = document.querySelector('.slider');
const textInside = document.querySelector('.text-inside');

function addHover(dotIndex) {
  for (let i = 0; i < 6; i += 2) {
    dotIndex[i].addEventListener('mouseover', () => {
      dotIndex[i + 1].style.backgroundColor = '#FFFFFF';
    });
    dotIndex[i].addEventListener('mouseout', () => {
      dotIndex[i + 1].style.backgroundColor = '#3FBCF6';
    });
  }
}

const imageArray = function preloadImage(...urls){
  let imgArr = [];
  urls.forEach((element) => {
    const img = new Image();
    imgArr.push(img.src = element);
  })
  return imgArr;
}
preloadImage('img/1.png', 'img/2.png', 'img/3.jpeg', 'img/4.png');

function allCleaner(dotArray) {
  slider.style.backgroundImage = 'none';
  textInside.textContent = '';
  dotArray.forEach((element) => {
    element.style.backgroundColor = '#3FBCF6';
    element.style.border = '0';
  });
}

d1.addEventListener('mousedown', () => {
  dot1.style.border = '3px solid #FFFFFF';
  dot1.style.backgroundColor = '#000000';
});
d1.addEventListener('click', () => {
  allCleaner([dot1, dot2, dor3, dot4]);
  slider.style.backgroundImage = `url('imgArr[0]')`;
  slider.classList.add('move');
  textInside.classList.add('move');
  textInside.textContent = 'Cats love boxes!';
  addHover([d2, dot2, d3, dot3, d4, dot4]);
  dot1.style.backgroundColor = '#000000';
  dot1.style.border = '3px solid #3FBCF6';
  d1.addEventListener('mouseover', () => {
    dot1.style.borderColor = '#FFFFFF';
    dot1.style.backgroundColor = '#000000';
  });
  d1.addEventListener('mouseout', () => {
    dot1.style.borderColor = '#3FBCF6';
    dot1.style.backgroundColor = '#000000';
  });
  setTimeout(() => {
    slider.classList.remove('move');
    textInside.classList.remove('move');
  }, 1000);
});

d2.addEventListener('mousedown', () => {
  dot2.style.border = '3px solid #FFFFFF';
  dot2.style.backgroundColor = '#000000';
});
d2.addEventListener('click', () => {
  allCleaner();
  slider.style.backgroundImage = `url('imgArr[1]')`;
  slider.classList.add('move');
  textInside.classList.add('move');
  textInside.textContent = 'Why did the lights go out?';
  addHover([d1, dot1, d3, dot3, d4, dot4]);
  dot2.style.backgroundColor = '#000000';
  dot2.style.border = '3px solid #3FBCF6';
  d2.addEventListener('mouseover', () => {
    dot2.style.borderColor = '#FFFFFF';
    dot2.style.backgroundColor = '#000000';
  });
  d2.addEventListener('mouseout', () => {
    dot2.style.borderColor = '#3FBCF6';
    dot2.style.backgroundColor = '#000000';
  });
  setTimeout(() => {
    slider.classList.remove('move');
    textInside.classList.remove('move');
  }, 1000);
});

d3.addEventListener('mousedown', () => {
  dot3.style.border = '3px solid #FFFFFF';
  dot3.style.backgroundColor = '#000000';
});
d3.addEventListener('click', () => {
  allCleaner();
  slider.style.backgroundImage = `url('imgArr[2]')`;
  slider.classList.add('move');
  textInside.classList.add('move');
  textInside.textContent = 'Hop, Hop, Hop ...';
  addHover([d1, dot1, d2, dot2, d4, dot4]);
  dot3.style.backgroundColor = '#000000';
  dot3.style.border = '3px solid #3FBCF6';
  d3.addEventListener('mouseover', () => {
    dot3.style.borderColor = '#FFFFFF';
    dot3.style.backgroundColor = '#000000';
  });
  d3.addEventListener('mouseout', () => {
    dot3.style.borderColor = '#3FBCF6';
    dot3.style.backgroundColor = '#000000';
  });
  setTimeout(() => {
    slider.classList.remove('move');
    textInside.classList.remove('move');
  }, 1000);
});

d4.addEventListener('mousedown', () => {
  dot4.style.border = '3px solid #FFFFFF';
  dot4.style.backgroundColor = '#000000';
});
d4.addEventListener('click', () => {
  allCleaner();
  slider.style.backgroundImage = `url('imgArr[3]')`;
  slider.classList.add('move');
  textInside.classList.add('move');
  textInside.textContent = '????????????????';
  addHover([d1, dot1, d2, dot2, d3, dot3,]);
  dot4.style.backgroundColor = '#000000';
  dot4.style.border = '3px solid #3FBCF6';
  d4.addEventListener('mouseover', () => {
    dot4.style.borderColor = '#FFFFFF';
    dot4.style.backgroundColor = '#000000';
  });
  d4.addEventListener('mouseout', () => {
    dot4.style.borderColor = '#3FBCF6';
    dot4.style.backgroundColor = '#000000';
  });
  setTimeout(() => {
    slider.classList.remove('move');
    textInside.classList.remove('move');
  }, 1000);
});
