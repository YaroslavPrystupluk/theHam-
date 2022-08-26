'use strict';


const servicesItems = document.querySelectorAll('.services-item');
const serviceTabs = document.querySelectorAll('.service-tabs');

servicesItems.forEach(function (item) {
	item.addEventListener('click', function () {
		let serviceBtn = item;
		let servicesId = item.getAttribute('data-name');
		let servicesTab = document.querySelector(servicesId);

		if (!serviceBtn.classList.contains('services-item-active')) {
			servicesItems.forEach(function (item) {
				item.classList.remove('services-item-active');
			});
			serviceTabs.forEach(function (item) {
				item.classList.remove('service-tabs-active');
			});
			serviceBtn.classList.add('services-item-active');
			servicesTab.classList.add('service-tabs-active');
		}
	});
});
document.querySelector('.services-item').click();




const navFeaturesLink = document.querySelector('.nav-features');
const navFeaturesBtn = document.querySelectorAll('.nav-features__link');
const navFeaturesLists = document.querySelectorAll('.content-features__img');


navFeaturesLink.addEventListener('click', function (event) {
	let target = event.target;
	if (!target.classList.contains('nav-features__link')) return false;
	let navFeaturesClass = target.dataset['features'];
	const btn = document.querySelector('.link-load-more');

	if (!target.classList.contains('nav-features__link--active')) {
		navFeaturesBtn.forEach(function (event) {
			event.classList.remove('nav-features__link--active');
		});
		target.classList.add('nav-features__link--active');
	};


	navFeaturesLists.forEach(function (elem) {
		if (!elem.classList.contains(navFeaturesClass) && navFeaturesClass !== 'all') {
			elem.classList.add('content-features__list--active');
		} else {
			elem.classList.remove('content-features__list--active');

		}
	});
});
document.querySelector('.nav-features__link').click();


const btnLoadMore = document.querySelector('.link-load-more');
const loader = document.querySelector('.middle');

let currentItems = 12;
btnLoadMore.addEventListener('click', function (event) {
	event.preventDefault();
	event.stopPropagation();


	let featuresList = [...document.querySelectorAll('.features-grups__link')];

	featuresList.forEach(function (elem) {

		loader.classList.add('middle-active');

		setTimeout(function () {
			loader.classList.remove('middle-active');
			elem.style.display = 'block';
		}, 2000);

		currentItems += 12;

		if (currentItems >= featuresList.length) {
			btnLoadMore.style.display = 'none';
		}
	});
});

const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');
const slidesPeople = document.querySelectorAll('.slider-people');
const dots = document.querySelectorAll('.clider-people-photo--small');
let indexSlide = 0;

const avtivSlide = function (n) {
	for (const slidePeople of slidesPeople) {
		slidePeople.classList.remove('slider-people-active');
	}
	slidesPeople[n].classList.add('slider-people-active');
};

const prepareCurrentSlide = function (indSlide) {
	avtivSlide(indSlide);
	avtivDot(indSlide);
};

const avtivDot = function (n) {
	for (const dot of dots) {
		dot.classList.remove('clider-people-photo__small--active');
	}
	dots[n].classList.add('clider-people-photo__small--active');
};

const nextSlide = function () {
	if (indexSlide == slidesPeople.length - 1) {
		indexSlide = 0;
		prepareCurrentSlide(indexSlide);
	} else {
		indexSlide++;
		prepareCurrentSlide(indexSlide);
	};
};

nextBtn.addEventListener('click', nextSlide);

const prevSlide = function () {
	if (indexSlide == 0) {
		indexSlide = slidesPeople.length - 1
		prepareCurrentSlide(indexSlide);
	} else {
		indexSlide--;
		prepareCurrentSlide(indexSlide);
	};
};

prevBtn.addEventListener('click', prevSlide);

dots.forEach(function (item, indexDot) {
	item.addEventListener('click', function () {
		indexSlide = indexDot;
		prepareCurrentSlide(indexSlide);
	})
});





window.onload = function () {
	const elem = document.querySelector('.grid');
	const msnry = new Masonry(elem, {
		itemSelector: '.grid-item',
		// percentPosition: true,
		gutter: 20,
	});

	const appendButton = document.querySelector('.gallery-load-more');
	appendButton.addEventListener('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		appendButton.style.display = 'none';
		let elems = [];
		let fragment = document.createDocumentFragment();
		for (let i = 0; i < 3; i++) {
			let elem = getItemElement();
			fragment.appendChild(elem);
			elems.push(elem);
		}

		elem.appendChild(fragment);

		msnry.appended(elems);
	});
	function getItemElement() {
		var elem = document.createElement('div');
		var wRand = Math.random();
		var hRand = Math.random();
		var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
		var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
		elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
		return elem;
	}
};




