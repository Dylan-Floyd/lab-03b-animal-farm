// import functions and grab DOM elements
let catPic = document.getElementById('cat-pic');
let catSound = document.getElementById('cat-sound');
let meowCountDisplay = document.getElementById('meow-counter');

let dogPic = document.getElementById('dog-pic');
let dogSound = document.getElementById('dog-sound');
let woofCountDisplay = document.getElementById('woof-counter');

let horsePic = document.getElementById('horse-pic');
let horseSound = document.getElementById('horse-sound');
let HUHUHUHUCountDisplay = document.getElementById('HUHUHUHU-counter');

let display = document.getElementById('animal-display');

// initialize state
let meowCountHolder = {
  count: 0
};
let woofCountHolder = {
  count: 0
};
let HUHUHUHUCountHolder = {
  count: 0
};

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

let resetDisplay = () => {
  display.textContent = 'Click an animal to hear the sound it makes!';
}

let handleAnimalClick = (soundEl, countEl, count, animalName, soundString) => {
  soundEl.play();
  display.textContent = 'The ' + animalName + " goes: '" + soundString +"'";
  count.count++;
  countEl.textContent = '' + count.count + ' ' + soundString + 's';
  setTimeout(resetDisplay, 2000);
}

let doMeow = () => {
  handleAnimalClick(catSound, meowCountDisplay, meowCountHolder, 'cat', 'meow');
}

let doWoof = () => {
  handleAnimalClick(dogSound, woofCountDisplay, woofCountHolder, 'dog', 'woof');
}

let doHUHUHUHU = () => {
  handleAnimalClick(horseSound, HUHUHUHUCountDisplay, HUHUHUHUCountHolder, 'horse', 'HUHUHUHU');
}

catPic.addEventListener('click', doMeow);

dogPic.addEventListener('click', doWoof);

horsePic.addEventListener('click', doHUHUHUHU);

document.addEventListener('keyup', (e) => {
  if(e.key === "c") {
    doMeow();
  } else if(e.key === "d") {
    doWoof();
  } else if(e.key === "h") {
    doHUHUHUHU();
  }
});