/*KC IMED
Fall2019*/

// Firstly,
function askName(yourName) {
  var yourName = prompt("What is your name?", "Kat");
  if (Kat) {
console.log("That's my name!");
} else {
console.log("Wilkommen!");
}
  document.getElementById("showName").innerHTML = text;
  return yourName;
}

const colorBtn = document.querySelector
('.colorBtn');
const bodyBg = document.querySelector('body');

const colors = ['blue', 'green', 'yellow'];

colorBtn.addEventListener('click', changeColor);

function changeColor (){
  let random = Math.floor(Math.random()
  *colors.length)
bodyBg.style.backgroundColor = colors[random];
}

let bugs;
let fudd;
let bugsImg;
let fuddImg;

function imagesIn() {
  const options = {
    probabilityThreshold: 0.95
  };
  bugsImg = loadImage('images/bugs.png');
  fuddImg = loadImage('images/fudd.png');
}

function setup() {
  createCanvas(600, 600);
  bugs = new Bugs();
}

function draw() {
  background(51);
  bugs.show();
  bugs.move();
}

function keyPress() {
  if (key == ' ') {
    bugs.jump();
  }
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
