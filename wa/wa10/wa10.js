const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['dog2.JPEG', 'dog3.JPEG', 'dog4.JPEG', 'dog5.JPEG'];
/* Declaring the alternative text for each image file */

/* Looping through images */
for (const i of images)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/${i}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {displayedImage.src = e.target.src;})
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
