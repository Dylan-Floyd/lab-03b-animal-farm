// import functions and grab DOM elements
let catPic = document.getElementById('cat-pic');
let catSound = document.getElementById('cat-sound');
let meowCounter = document.getElementById('meow-counter');

let dogPic = document.getElementById('dog-pic');
let dogSound = document.getElementById('dog-sound');
let woofCounter = document.getElementById('woof-counter');

let horsePic = document.getElementById('horse-pic');
let horseSound = document.getElementById('horse-sound');
let HUHUHUHUCounter = document.getElementById('HUHUHUHU-counter');

let display = document.getElementById('animal-display');

// initialize state
let meows = 0;
let woofs = 0;
let HUHUHUHUs = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

let meow = () => {
  catSound.play();
  display.textContent="The cat goes: 'meow'";
  meows++;
  meowCounter.textContent = '' + meows + ' meows';
}

let woof = () => {
  dogSound.play();
  display.textContent="The dog goes: 'woof'";
  woofs++;
  woofCounter.textContent = '' + woofs + ' woofs'
}

let HUHUHUHU = () => {
  horseSound.play();
  display.textContent="The horse goes: 'HUHUHUHU'";
  HUHUHUHUs++;
  HUHUHUHUCounter.textContent = '' + HUHUHUHUs + ' HUHUHUHUs'
}

catPic.addEventListener('click', meow);

dogPic.addEventListener('click', woof);

horsePic.addEventListener('click', HUHUHUHU);

document.addEventListener('keyup', (e) => {
  if(e.key === "c") {
    meow();
  } else if(e.key === "d") {
    woof();
  } else if(e.key === "h") {
    HUHUHUHU();
  }
});