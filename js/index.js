// Your code goes here
// 1. Event Listener 1: click
const contentSectionImages = document.querySelectorAll(
	'.content-section > .img-content img'
);
const srcArray = Array.from(contentSectionImages).map((image) => image.src);
contentSectionImages.forEach((section) => {
	section.addEventListener('click', (event) => {
		event.stopImmediatePropagation();
		if (contentSectionImages[0].src === srcArray[0]) {
			contentSectionImages[0].setAttribute('src', srcArray[1]);
			contentSectionImages[1].setAttribute('src', srcArray[0]);
		} else {
			contentSectionImages[0].setAttribute('src', srcArray[0]);
			contentSectionImages[1].setAttribute('src', srcArray[1]);
		}
	});
});

// 2. Event Listener 2: dblclick
const headerElm = document.querySelector('header');
let isTransparent = false;
headerElm.addEventListener('dblclick', () => {
	if (!isTransparent) {
		headerElm.style.backgroundColor = '#55555500';
		isTransparent = true;
	} else if (isTransparent) {
		headerElm.style.backgroundColor = '#555555';
		isTransparent = false;
	}
});

// 3. Event Listener 3: keydown
const allImages = document.querySelectorAll('img');
let isHidden = false;
document.addEventListener('keydown', (event) => {
	if (event.code === 'Escape' && !isHidden) {
		allImages.forEach((image) => {
			image.style.display = 'none';
		});
		isHidden = true;
	} else if (event.code === 'Escape' && isHidden) {
		allImages.forEach((image) => {
			image.style.display = 'block';
		});
		isHidden = false;
	}
});

// 4. Event Listener 4: keyup
document.addEventListener('keyup', (event) => {
	if (event.code === 'Space') {
		document.querySelector('body').scrollIntoView();
	}
});

// 5. Event Listener 5: scroll
let scrollDelta = 0;
const colorArray = [
	'#8B0000',
	'#FF8C00',
	'#BDB76B',
	'#5F9EA0',
	'#7FFFD4',
	'#008B8B',
	'#8A2BE2',
	'#2F4F4F',
	'#F08080',
	'#B0C4DE',
];
const logoHeading = document.querySelector('.logo-heading');
document.addEventListener('scroll', (event) => {
	if (Math.floor(event.timeStamp) - scrollDelta > 1000) {
		scrollDelta = event.timeStamp;
		let randInd = Math.round(event.timeStamp) % 10;
		logoHeading.style.color = colorArray[randInd];
	}
});
// 6. Event Listener 6: wheel
const allH2Tags = document.querySelectorAll('h2');

allH2Tags.forEach((h2Tag) => {
	h2Tag.addEventListener('wheel', (event) => {
		if (event.deltaY > 0) {
			event.target.style.fontSize = '2rem';
		} else if (event.deltaY < 0) {
			event.target.style.fontSize = '4rem';
		}
	});
});

// 7. Event Listener 7: mouseover
const allPTags = document.querySelectorAll('p');

allPTags.forEach((pTag) => {
	pTag.addEventListener('mouseover', (event) => {
		event.target.style.color = 'orange';
	});
});

// 8. Event Listener 8: mouseout
allPTags.forEach((pTag) => {
	pTag.addEventListener('mouseout', (event) => {
		event.target.style.color = '#eee';
	});
});

// 9. Event Listener 9: mousemove

let mousemoveDelta = 0;
document.addEventListener('mousemove', (event) => {
	if (Math.floor(event.timeStamp) - mousemoveDelta > 1000) {
		mousemoveDelta = event.timeStamp;
		let randInd = Math.round(event.timeStamp) % 10;
		allH2Tags.forEach((h2Tag) => {
			h2Tag.style.color = colorArray[randInd];
		});
	}
});

// 10. Event Listener 10: load
const bodyElm = document.querySelector('body');
window.addEventListener('load', (event) => {
	bodyElm.style.backgroundColor = '#555';
	bodyElm.style.color = '#eee';
	headerElm.style.backgroundColor = '#555';
});

// Prevent Default Link Action

Array.from(document.links).forEach((link) => {
	link.style.color = '#eee';
	link.addEventListener('click', (event) => {
		link.style.color = '#bbb';
		event.preventDefault();
	});
});

// Stop propagation
// The actual stopImmediatePropagation() call is in the first listener further up the page because that is the one that fires first. If I had put this listener first, then it would be in this listener
const contentSections = document.querySelectorAll('.content-section');

contentSections.forEach((contentSection) => {
	let isBig = false;
	contentSection.addEventListener('click', (event) => {
		if (!isBig) {
			contentSection.querySelectorAll('p').forEach((p) => {
				p.style.fontSize = '2rem';
			});
			isBig = true;
		} else if (isBig) {
			contentSection.querySelectorAll('p').forEach((p) => {
				p.style.fontSize = '1.6rem';
			});
			isBig = false;
		}
	});
});
