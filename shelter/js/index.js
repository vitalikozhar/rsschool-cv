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

const pet1 = new SelectorPet();
pet1.image = Object.assign(document.createElement('img'), {
	src: "img/4cbff971ed3cff4fcdd44ba6ce66e1be.png",
	alt: "pic pet"
});
pet1.name = 'Katrine';
pet1.breed = 'Cat - British Shorthair';
pet1.info = 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.';
pet1.age = '2 months';
pet1.inoculations = 'none';
pet1.diseases = 'none';
pet1.parasites = 'none';


const pet2 = new SelectorPet();
pet2.image = Object.assign(document.createElement('img'), {
	src: "img/b523e1700aa8817d3357edad5cf38558.png",
	alt: "pic pet"
});
pet2.name = 'Jennifer';
pet2.breed = 'Dog - Labrador';
pet2.info = "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.";
pet2.age = '3 months';
pet2.inoculations = 'none';
pet2.diseases = 'none';
pet2.parasites = 'none';

const pet3 = new SelectorPet();
pet3.image = Object.assign(document.createElement('img'), {
	src: "img/d18a0a8b1c7ed291ade3e2e10ff4ebfe.png",
	alt: "pic pet"
});
pet3.name = 'Woody';
pet3.breed = "Dog - Golden Retriever";
pet3.info = "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.";
pet3.age = '9 months';
pet3.inoculations = 'none';
pet3.diseases = 'none';
pet3.parasites = 'none';

const pet4 = new SelectorPet();
pet4.image = Object.assign(document.createElement('img'), {
	src: "img/Sophia.png",
	alt: "pic pet"
});
pet4.name = 'Sophia';
pet4.breed = "Dog - Shih tzu";
pet4.info = "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.";
pet4.age = '2 months';
pet4.inoculations = 'none';
pet4.diseases = 'none';
pet4.parasites = 'none';

const pet5 = new SelectorPet();
pet5.image = Object.assign(document.createElement('img'), {
	src: "img/Timmy.png",
	alt: "pic pet"
});
pet5.name = 'Timmy';
pet5.breed = "Cat - British Shorthair";
pet5.info = "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.";
pet5.age = '5 months';
pet5.inoculations = 'none';
pet5.diseases = 'none';
pet5.parasites = 'none';

const pet6 = new SelectorPet();
pet6.image = Object.assign(document.createElement('img'), {
	src: "img/Charly.png",
	alt: "pic pet"
});
pet6.name = 'Charly';
pet6.breed = "Dog - Jack Russell Terrier ";
pet6.info = "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.";
pet6.age = '11 months';
pet6.inoculations = 'none';
pet6.diseases = 'none';
pet6.parasites = 'none';

const pet7 = new SelectorPet();
pet7.image = Object.assign(document.createElement('img'), {
	src: "img/Scarlett.png",
	alt: "pic pet"
});
pet7.name = 'Scarlett';
pet7.breed = "Dog - Jack Russell Terrier";
pet7.info = "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.";
pet7.age = '3 months';
pet7.inoculations = 'none';
pet7.diseases = 'none';
pet7.parasites = 'none';

const pet8 = new SelectorPet();
pet8.image = Object.assign(document.createElement('img'), {
	src: "img/Freddie.png",
	alt: "pic pet"
});
pet8.name = 'Freddie';
pet8.breed = "Cat - British Shorthair";
pet8.info = "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.";
pet8.age = '4 months';
pet8.inoculations = 'none';
pet8.diseases = 'none';
pet8.parasites = 'none';

let petArr = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8];

function addInfo() {
	for (let i = 0; i < petArr.length; i++) {
		if (i === 0) {
			const pictureDiv = document.querySelector('.picture');
			pictureDiv.innerHTML = '';
			pictureDiv.appendChild(petArr[i].image);
			const pictureDivName = document.createElement('span');
			pictureDivName.className = 'picture-name';
			pictureDivName.textContent = petArr[i].name;
			pictureDiv.appendChild(pictureDivName);
		}
		if (i === 1) {
			const pictureDiv2 = document.querySelector('.picture-two');
			pictureDiv2.innerHTML = '';
			pictureDiv2.appendChild(petArr[i].image);
			const pictureDivName2 = document.createElement('span');
			pictureDivName2.className = 'picture-name-two';
			pictureDivName2.textContent = petArr[i].name;
			pictureDiv2.appendChild(pictureDivName2);

		}
		if (i === 2) {
			const pictureDiv3 = document.querySelector('.picture-three');
			pictureDiv3.innerHTML = '';
			pictureDiv3.appendChild(petArr[i].image);
			const pictureDivName3 = document.createElement('span');
			pictureDivName3.className = 'picture-name-three';
			pictureDivName3.textContent = petArr[i].name;
			pictureDiv3.appendChild(pictureDivName3);

		}
	}
}

addInfo();

const buttonArrowLeft = document.querySelector('.button-arrow-left');
buttonArrowLeft.addEventListener('click', () => {
	for (let i = 0; i < 3; i++) {
		petArr.unshift(petArr.pop());
	}
	addInfo();
});

const buttonArrowRight = document.querySelector('.button-arrow-right');
buttonArrowRight.addEventListener('click', () => {
	for (let i = 0; i < 3; i++) {
		petArr.push(petArr.shift());
	}
	addInfo();
});

const buttonsArrow = document.querySelectorAll('.button-arrow-right, .button-arrow-left');


buttonsArrow.forEach(arr => {
	arr.addEventListener('mousedown', () => {
		arr.style.boxShadow = '0px 2px 35px 14px rgba(240, 124, 124, 0.3)';
	});
	arr.addEventListener('mouseup', () => {
		arr.style.boxShadow = '0px 2px 35px 14px rgba(13, 13, 13, 0.0)';
	});
});


const showWindow = document.querySelector('.modal-window-example-1280');
const buttonLearnMoreOne = document.querySelector('.card-one');
const changeCardPosition = document.querySelector('.modal-window-1280');
buttonLearnMoreOne.addEventListener('click', () => {
	showWindow.style.display = 'flex';
	const pictureDivN = document.querySelector('.pets-name');
	pictureDivN.innerHTML = '';
	pictureDivN.appendChild(petArr[0].image);
	writeContent(0);
});

const buttonLearnMoreTwo = document.querySelector('.card-two');
buttonLearnMoreTwo.addEventListener('click', () => {
	showWindow.style.display = 'flex';
	const pictureDivN = document.querySelector('.pets-name');
	pictureDivN.innerHTML = '';
	pictureDivN.appendChild(petArr[1].image);
	writeContent(1);
});

const buttonLearnMoreThree = document.querySelector('.card-three');
buttonLearnMoreThree.addEventListener('click', () => {
	showWindow.style.display = 'flex';
	const pictureDivN = document.querySelector('.pets-name');
	pictureDivN.innerHTML = '';
	pictureDivN.appendChild(petArr[2].image);
	writeContent(2);
});

const buttonLearnMoreClose = document.querySelector('.modal-close-button');
buttonLearnMoreClose.addEventListener('click', () => {
	showWindow.style.display = 'none';
	addInfo();
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
	console.log(petArr[i].inoculations);
	diseases.textContent = petArr[i].diseases;
	parasites.textContent = petArr[i].parasites;
}

// const deactivNav = document.querySelector('.nav-menu-1');
// const deactivNavs = document.querySelector('.nav-menu');
// deactivNavs.addEventListener('mouseover', () => {
// 	deactivNav.style.border = '0';
// });
// deactivNavs.addEventListener('mouseout', () => {
// 	deactivNav.style.borderBottom = '3px solid #F1CDB3';
// });

console.log('Согласно предложенным Критериям оценки, \nс учётом Особенностей проверки вёрстки на соответствие макету,\nв ходе самопроверки была выставлен оценка: 100 ');
