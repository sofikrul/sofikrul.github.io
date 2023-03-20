const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Once upon a time, there were two friends named Bob and Sally. One day, they decided to take xval for a walk yval. But as they were crossing the street, zval appeared and stole their frog, leading to a wild chase around the city.';
const insertx = ['their pet frog', 'their pet chincila', 'their pet armadillo'];
const inserty = ['in the park', 'in the dessert', 'in the pond'];
const insertz = ['a giant squirrel', 'a medium sized squirrel', 'a samll sized squirrel'];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(21.4286);
    const weightMeasure = weight + " stones";
    const temperature =  Math.round(34.4);
    const tempMeasure = temperature + " celsius";

    newStory = newStory.replace('300 pounds', weightMeasure);
    newStory = newStory.replace('94 fahrenheit', tempMeasure);
  }

  const xItem = randomValueFromArray(insertx);
  const yItem = randomValueFromArray(inserty);
  const zItem = randomValueFromArray(insertz);

  newStory = newStory.replace('xval', xItem);
  newStory = newStory.replace('yval', yItem);
  newStory = newStory.replace('zval', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}