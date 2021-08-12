// import functions and grab DOM elements
let catPic = document.getElementById('cat-pic');
let catSound = document.getElementById('cat-sound');

let dogPic = document.getElementById('dog-pic');
let dogSound = document.getElementById('dog-sound');

let horsePic = document.getElementById('horse-pic');
let horseSound = document.getElementById('horse-sound');

let display = document.getElementById('animal-display');

let meow = () => {
  catSound.play();
  display.textContent="The cat goes: 'meow'";  
}

let woof = () => {
  dogSound.play();
  display.textContent="The dog goes: 'woof'";
}

let HUHUHUHU = () => {
  horseSound.play();
  display.textContent="The horse goes: 'HUHUHUHU'";
}

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
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