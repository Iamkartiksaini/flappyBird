// Game states
let GRAVITY = 5;
let BIRD_POS = 50;
let JUMP = 30;
let SCORE = 0;

let pipePos1 = 1200;
let pipePos3 = 1700;
let pipePos5 = 2200;

let gameStatus = "play";
let collsionPipe;

function pauseGame() {
  gameStatus = "pause";
}
function playGame() {
  gameStatus = "play";
}

// Game elements
let game = document.querySelector(".game");
let bird = document.querySelector(".bird");
let btn = document.querySelector(".btn");
let pipes = [...document.querySelectorAll(".pipe")];
let score = document.querySelector(".score span");

bird.style.left = `220px`;
pipes[0].style.left = `${pipePos1}px`;
pipes[1].style.left = `${pipePos1}px`;
pipes[2].style.left = `${pipePos3}px`;
pipes[3].style.left = `${pipePos3}px`;
pipes[4].style.left = `${pipePos5}px`;
pipes[5].style.left = `${pipePos5}px`;

// clientX,layerX,movementX,offsetX,pageX,screenX,x

function fly() {
  BIRD_POS -= 100;
  console.log(BIRD_POS);
  if (BIRD_POS <= -100) {
    BIRD_POS = -40;
    bird.style.transform = `translateY(${BIRD_POS}px)`;
  }
  bird.style.transform = `translateY(${BIRD_POS}px)`;
}

setInterval(() => {
  if (gameStatus == "play") {
    if (pipePos1 <= 310) {
      collsionPipe = pipes[0].clientHeight + 10;
      if (
        BIRD_POS + 20 >= collsionPipe &&
        BIRD_POS + 20 <= collsionPipe + 140 - 50
      ) {
        gameStatus = "play";
      } else {
        gameStatus = "pause";
      }
    }
    BIRD_POS += GRAVITY;
    bird.style.transform = `translateY(${BIRD_POS}px)`;
    pipePos1 -= 3;
    pipePos3 -= 3;
    pipePos5 -= 3;

    if (pipePos1 <= -75) {
      pipePos1 = 1400;
      let x = Math.floor(Math.random() * 10);
      console.log("x1:", x * 22);
      pipes[0].style.height = `${x * 22}px`;
      pipes[1].style.height = `${440 - x * 22}px`;

      pipes[0].style.left = `${pipePos1}px`;
      pipes[1].style.left = `${pipePos1}px`;
    }
    if (pipePos3 <= -75) {
      pipePos3 = 1400;
      let x = Math.floor(Math.random() * 10);
      pipes[2].style.height = `${x * 22}px`;
      pipes[3].style.height = `${440 - x * 22}px`;

      pipes[2].style.left = `${pipePos3}px`;
      pipes[3].style.left = `${pipePos3}px`;
    }
    if (pipePos5 <= -75) {
      pipePos5 = 1400;
      let x = Math.floor(Math.random() * 10);
      pipes[4].style.height = `${440 - x * 22}px`;
      pipes[5].style.height = `${x * 22}px`;

      pipes[4].style.left = `${pipePos5}px`;
      pipes[5].style.left = `${pipePos5}px`;
    } else {
      pipes[0].style.left = `${pipePos1}px`;
      pipes[1].style.left = `${pipePos1}px`;
      pipes[2].style.left = `${pipePos3}px`;
      pipes[3].style.left = `${pipePos3}px`;
      pipes[4].style.left = `${pipePos5}px`;
      pipes[5].style.left = `${pipePos5}px`;
    }
    if (BIRD_POS > window.innerHeight - 140) {
      BIRD_POS = -80;
    }
    score.innerHTML = SCORE;
  }
}, 20);

function play() {}

function collided(source, target) {}

function gameOver() {}

window.onload = play;
