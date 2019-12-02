/*KC IMED
Fall2019*/

// Firstly,
function askName(yourName) {
  var yourName = prompt("What is your name?", "Kat");
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
