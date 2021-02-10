// Your code goes here
// 1. Event Listener 1: click
const contentSectionImages = document.querySelectorAll(
	'.content-section > .img-content img'
);
const srcArray = Array.from(contentSectionImages).map((image) => image.src);
contentSectionImages.forEach((section) => {
	section.addEventListener('click', (event) => {
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
// TODO: keyup on the space brings you back to the top

// 5. Event Listener 5: scroll
// TODO:

// 6. Event Listener 6: wheel
// TODO:
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
// TODO: mouseover h2s to increase font-size

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

// 9. Event Listener 9: select

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
