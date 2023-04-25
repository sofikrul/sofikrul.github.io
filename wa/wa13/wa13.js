/* wa13 */

function check() {
    console.log('test');
}

function random1() {
    outputInt = randomNumber(0, 50);
    output1.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function setVolume(){
    volumeInt = outputInt + outputInt2;
    volumeOutput.textContent = volumeInt;
}

  function random2() {
    outputInt2 = randomNumber(0, 50);
    output2.textContent = outputInt2;
}

  function reset() {
    outputInt = 0;
    output1.textContent = outputInt;
    output2.textContent = outputInt;
    volumeOutput.textContent = outputInt;
}

const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const volumeOutput = document.querySelector('.volumeOutput');

let outputInt = parseInt(output1.textContent);
let outputInt2 = parseInt(output2.textContent);
let volumeInt = parseInt(volumeOutput.textContent);

console.log(outputInt);
console.log(volumeInt);



const randomButton1 = document.querySelector('.random1-button').addEventListener('click', random1);
const randomButton2 = document.querySelector('.random2-button').addEventListener('click', random2);
const setVolumeButton = document.querySelector('.set-volume').addEventListener('click', setVolume);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);