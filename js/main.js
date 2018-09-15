/*jshint esversion:6*/

let modal = document.getElementById('myModal');
console.log('Hello');

// Get the image and insert it inside the modal- use its "alt" text as a caption
let img = document.querySelectorAll('.myImg');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');
let imgBox = document.querySelectorAll('.imgBox');

// Loop through the divs and add class Orange
for (let i = 0; i < imgBox.length; i++) {
	if (i == 0 || i % 4 == 0 || (i + 1) % 4 == 0) {
		imgBox[i].classList.add('orange');
	}
	imgBox[i].querySelector('span').innerHTML = i + 1;
}

img.forEach(element =>
	element.addEventListener('click', e => {
		modal.style.display = 'block';
		modalImg.src = e.target.src;
		captionText.innerHTML = e.target.alt;
		console.log('clicked');
	})
);

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (X), the modal closes
span.addEventListener('click', () => {
	modal.style.display = 'none';
});
