// Game states
let GRAVITY = 5;
let BIRD_POS = 50;
let JUMP = 30;
let SCORE = 0;
let pipePos = 0;
let pipePos1 = 0;
let pipePos3 = 0;
let pipePos5 = 0;
let upper_pipeHeight = 27;
let lower_pipeHeight = 27;
let gameStatus = "play";

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
bird.style.left = `50px`;

// clientX,layerX,movementX,offsetX,pageX,screenX,x

for (i = 0; i < 6; i++) {
  pipes[i].style.left = `${pipePos}px`;
}

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
    BIRD_POS += GRAVITY;
    pipePos1 -= 5;
    pipePos3 -= 5;
    pipePos5 -= 5;
    bird.style.transform = `translateY(${BIRD_POS}px)`;
    // pipes[2].style.left = `${-pipePos}px`;

    if (pipePos1 <= -200) {
      pipePos1 = 1000;
      pipes[0].style.display = `none`;
      pipes[1].style.display = `none`;
      pipes[0].style.left = `${pipePos1}px`;
      pipes[1].style.left = `${pipePos1}px`;
      SCORE += 10;
    }
    if (pipePos3 <= -600) {
      pipePos3 = 600;
      pipes[2].style.display = `none`;
      pipes[3].style.display = `none`;
      pipes[2].style.left = `${pipePos3}px`;
      pipes[3].style.left = `${pipePos3}px`;
      SCORE += 10;
    }
    if (pipePos5 <= -1000) {
      pipePos5 = 200;
      pipes[4].style.display = `none`;
      pipes[5].style.display = `none`;
      pipes[4].style.left = `${pipePos5}px`;
      pipes[5].style.left = `${pipePos5}px`;
      SCORE += 10;
    } else {
      pipes[0].style.left = `${pipePos1}px`;
      pipes[1].style.left = `${pipePos1}px`;
      pipes[2].style.left = `${pipePos3}px`;
      pipes[3].style.left = `${pipePos3}px`;
      pipes[4].style.left = `${pipePos5}px`;
      pipes[5].style.left = `${pipePos5}px`;

      pipes[0].style.display = `block`;
      pipes[1].style.display = `block`;
      pipes[2].style.display = `block`;
      pipes[3].style.display = `block`;
      pipes[4].style.display = `block`;
      pipes[5].style.display = `block`;
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
