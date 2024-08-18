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

function newrandomArray() {

	for (let i = 0; i < 6; i++) {
		let petArr = [];
		let arrayRund = [];

		for (let arrayRundLength = 0; arrayRundLength < 8;) {
			let rund = (Math.floor(Math.random() * 8)) + 1;
			if (!arrayRund.includes(rund)) {
				arrayRundLength = arrayRund.push(rund);
				petArr.push(pets['pet' + rund]);
			}
		}
		arrArr.push(petArr);
	}
}
newrandomArray();

function writeCard() {
	for (let i = 0; i < 8 && window.innerWidth >= 768; i++) {
		const cardNumber = document.querySelector(`.conteiner-op-line-${i + 1}`);
		cardNumber.appendChild(arrArr[0][i].image);
		const newSpan = document.createElement('span');
		newSpan.textContent = arrArr[0][i].name;
		cardNumber.appendChild(newSpan);
	}
	for (let i = 0; i < 3 && window.innerWidth < 768; i++) {
		const cardNumber = document.querySelector(`.conteiner-op-line-${i + 1}`);
		cardNumber.appendChild(arrArr[0][i].image);
		const newSpan = document.createElement('span');
		newSpan.textContent = arrArr[0][i].name;
		cardNumber.appendChild(newSpan);
	}
}
writeCard();
