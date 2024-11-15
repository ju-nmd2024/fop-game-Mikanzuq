function setup() {
  createCanvas(800, 800);
}
// position:
let x = 300;
let y = 400;
let w = 150; // weight
let h = 200; // height

// text variables:
let q = 375; // variable x for "texts"
let z = 350; // variable y for "texts"
let s = 150; // end screen button size
let ts = 70; // text size for
let speed = 1; // speed of animaton "birblander"

// bird variables;
let birdY = 180;
let birdSpeed = 2; // Speed of the bird
let stopPunkt = 570; // where bird should stop
d = 1; // variable for color in rect

// game's logic:

// game state:

//start screen:
function button() {
  // start button
  rect(x, y, h, w);
}

function startScreen() {
  background(255, 255, 255);
  if (d === 1) fill(255, 0, 120); // used yt video to learn
  if (d === 2) fill(70, 70, 70);
  noStroke();
  button();

  fill(0, 0, 0); // birblander text
  textSize(ts);
  text("Birblander", q - 130, z - 60);
  z = z - speed;
  if (z > 360 || z < 330) {
    // animation so it moves
    speed = speed * -1;
  }

  if (d === 2) fill(255, 255, 255); // make it change color when clicked
  else fill(70, 70, 70);
  textSize(ts - 20);
  text("S t a r t", x + 18, y + 90);
}

//game screen:
function Bird(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  // Bottom wing
  push();
  angleMode(DEGREES);
  translate(-35, -35);
  rotate(-10);
  scale(0.3);
  noStroke();
  fill(255, 255, 255);
  triangle(40, -40, -50, 60, 150, 280);
  triangle(40, 50, -50, 60, 10, 170);
  pop();

  // Legs
  push();
  translate(-110, -150);
  strokeWeight(3);
  stroke(0, 0, 0);
  line(100, 180, 100, 210);
  line(110, 170, 120, 210);
  pop();

  // Body
  push();
  angleMode(DEGREES);
  translate(0, 0);
  rotate(60);
  noStroke();
  fill(122, 235, 255);
  rect(-75, -25, 100, 60, 60);
  pop();

  // Head + Face
  push();
  noStroke();
  translate(10, 10);
  fill(255, 255, 255);
  ellipse(-50, -65, 60);
  fill(0, 0, 0);
  ellipse(-55, -70, 8);
  ellipse(-50, -40, 4);
  ellipse(-40, -46, 4);
  push();
  noStroke();
  translate(-76, -60);
  fill(230, 213, 70);
  triangle(-2, 1, 9, 2, 5, 18);
  pop();
  noStroke();
  fill(27, 127, 148);
  ellipse(-70, -60, 9);
  ellipse(-75, -60, 9);
  pop();

  // Tail
  push();
  translate(10, 0);
  noStroke();
  fill(122, 235, 255);
  triangle(2, 20, 80, 90, 5, 5);
  pop();

  // Top wing
  push();
  angleMode(DEGREES);
  translate(-9, -35);
  rotate(-10);
  scale(0.3);
  noStroke();
  fill(255, 255, 255);
  triangle(40, -40, -50, 60, 150, 280);
  triangle(40, 50, -50, 60, 10, 170);
  pop();

  pop();
}
function Cage(x, y, s) {
  push();
  translate(30, 10);
  scale(s);

  // cage
  push();
  noStroke();
  fill(86, 48, 48);
  rect(x + 170, y + 600, 350, 15, 20); // brench
  fill(80, 80, 80);
  rect(x, y + 390, 210, 40, 120);
  rect(x, y + 700, 210, 40, 120);
  ellipse(x + 105, y + 310, 50); // cage
  ellipse(x + 105, y + 370, 200, 100);
  fill(241, 70, 90);
  ellipse(x + 105, y + 310, 25);

  fill(255, 0, 0);
  push();
  translate(x + 65, y + 630);
  strokeWeight(8);
  stroke(140, 140, 140);
  for (let i = 0; i < 7; i++) {
    let x = -50 + i * 30; // cages bars
    line(x, -200, x, 70);
  }
}
function GameScreen() {
  background(241, 70, 90);
  push();
  Bird(500, birdY, 1.3);
  if (birdY < stopPunkt) {
    // a statement to make bird go down and stop at one point
    birdY += birdSpeed; // new statement
  } else {
    birdY = stopPunkt;
  }
  // // if (y <= 790) { // orginal statement
  // //   y = y / 0.98;
  // // }
  pop();
  Cage(10, -70, 1.2);
}

// results screen
function endButton() {
  ellipse(x + 100, y + 60, s);
}
function endScreen() {
  background(255, 255, 255);
  if (d === 1) fill(255, 0, 120); // used yt video to learn
  if (d === 2) fill(70, 70, 70);
  noStroke();
  endButton();

  fill(0, 0, 0); // score text
  textSize(ts);
  text("You landed!", q - 160, z - 60);
  z = z - speed;
  if (z > 360 || z < 330) {
    // animation so it moves
    speed = speed * -1;
  }

  if (d === 2) fill(255, 255, 255); // make it change color when clicked
  else fill(70, 70, 70);
  textSize(ts - 20);
  text("again", x + 38, y + 75);
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    GameScreen();
  } else if (state === "result") {
    endScreen();
  }
}

//Start screen
function mouseClicked() {
  if (
    state === "start" &&
    mouseX > x &&
    mouseX < x + w &&
    mouseY > y &&
    mouseY < y + h
  ) {
    console.log("Start clicked");
    d = 2;
    state = "game";
  } else if (state === "game") {
    state = "result";
  } else if (
    state === "result" &&
    dist(mouseX, mouseY, x + 100, y + 60) < s / 2
  ) {
    console.log("again cliked");
    d = 2;
    state = "game";
  }
}

//game screen:

//end screen:
// push();
// function mouseCliked() {
// let distance = (dist(mouseX, mouseY, x + 100, y + 60) < s / 2);
// if (distance === endButton) {
//   console.log("again clicked");
//   d = 2;
// }
// }
// pop();
