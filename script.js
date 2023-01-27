// Game states
let GRAVITY = 10;
let BIRD_POS = 50;
let JUMP = 30;
let SCORE = 0;
let pipePos = 300;
let upper_pipeHeight = 27;
let lower_pipeHeight = 27;

// Game elements
let game = document.querySelector(".game");
let bird = document.querySelector(".bird");
let btn = document.querySelector(".btn");
let pipes = [...document.querySelectorAll(".pipe")];
let score = document.querySelector(".score span");

pipes[0].style.transform = ` translateX(${pipePos}px) rotate(180deg)`;
pipes[1].style.transform = `translateX(${pipePos}px)`;

bird.style.transform = `translateY(${BIRD_POS}px)`;

pipes[0].style.top = `0px`;
pipes[1].style.bottom = `0px`;

// clientX,layerX,movementX,offsetX,pageX,screenX,x
function loc() {
  console.log("loc", pipes[0].clientX);
}

function fly() {
  console.log("Bird", BIRD_POS);
  console.log("pipe", pipePos);
  if (BIRD_POS <= 0 || BIRD_POS - JUMP < 0) {
    BIRD_POS = 0;
  } else {
    BIRD_POS -= JUMP;
    bird.style.transform = `translateY(${BIRD_POS}px)`;
  }
  loc();
}
setInterval(() => {
  if (game.state == "play") {
  }

  BIRD_POS += GRAVITY;
  bird.style.transform = `translateY(${BIRD_POS}px)`;
  pipePos -= 10;

  pipes[0].style.height = `${upper_pipeHeight}vh`;
  pipes[1].style.height = `${lower_pipeHeight}vh`;

  pipes[0].style.transform = `translateX(${pipePos}px) rotate(180deg)`;
  pipes[1].style.transform = `translateX(${pipePos}px)`;

  if (pipePos <= -30) {
    pipePos = 300;
  }

  if (BIRD_POS > window.innerHeight - 80) {
    BIRD_POS = 50;
  }
}, 287768778730);

// setInterval(() => {
// }, 3000);

function play() {}

function collided(source, target) {}

function gameOver() {}

window.onload = play;
