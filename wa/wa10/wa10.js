var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
array-image ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
/* Declaring the alternative text for each image file */

/* Looping through images */
function thumbnailLoop() {
    var i;
    for (i = 0; i < 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + (i+1) + ".jpg");
    thumbBar.appendChild(newImage);
  }
  }

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
