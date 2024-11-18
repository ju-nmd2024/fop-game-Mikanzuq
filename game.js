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
let s = 150;
let ts = 70; // text size
let speed = 1;
d = 1;

// bird variables;
let birdX = 520;
let birdY = 180;
let birdSpeed = 2;
let stopPunkt = 570;
let fallTimer = 0;
let wings = "closed";

// game's logic:
let velocityY = 0.2;
let acceleration = 0.2;
let rotation = 0.2;

// game state:
let gameState = true;

//start screen:
function button() {
  // start button
  rect(x, y, h, w);
}

function startScreen() {
  background(25, 150, 125);
  if (d === 1) fill(255, 0, 120); // used yt video to learn
  // if (d === 2) fill(70, 70, 70);
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

  if (d === 1) fill(255, 255, 255); // make it change color when clicked
  else fill(70, 70, 70);
  textSize(ts - 20);
  text("S t a r t", x + 18, y + 90);

  Bird(610, 650, 1.3);
}

//game screen:
function Bird(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  rotate(rotation);

  // Bottom wing
  push();
  angleMode(DEGREES);
  translate(-35, -35);

  if (wings === "closed") {
    rotate(-10);
  } else if (wings === "open") {
    rotate(-80);
  }

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

  if (wings === "closed") {
    rotate(-10);
  } else if (wings === "open") {
    rotate(-40);
  }

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

  // Make bird move and land
  Bird(500, birdY, 1.3);
  birdY = birdY + velocityY;
  velocityY = velocityY + acceleration;

  if (keyIsDown(32)) {
    console.log("space is pressed");
    velocityY = velocityY - 0.6;
    wings = "open";
  } else {
    console.log("space is released");
    wings = "closed";
  }

  if (birdY <= 180 - 75) {
    birdY = 180 - 75;
    velocityY = +1;
  }
  // actual game
  if (birdY > 570) {
    if (velocityY > 3) {
      console.log("you killed the bird");
      state = "falling";
    } else {
      console.log("you landed!");
      velocityY = 0;
      state = "result";
    }
  }
  pop();
  Cage(10, -70, 1.2);
}

// GameOver screen
function fallingScreen() {
  background(241, 70, 90);
  Bird(500, birdY, 1.3);

  velocityY = velocityY + acceleration;
  birdY = birdY + velocityY;
  rotation = rotation + 15;

  fallTimer += 2;

  if (fallTimer > 60) {
    if (velocityY > 3) {
      state = "result";
    } else {
      state = "result";
    }
    fallTimer = 0;
  }
  Cage(10, -70, 1.2);
}

// result screen
function endButton() {
  ellipse(x + 100, y + 60, s);
}
function endScreen() {
  background(200, 200, 200);
  if (d === 1) fill(0, 0, 150); // used yt video to learn
  noStroke();
  endButton();

  if (d === 1) fill(255, 255, 255); // make it change color when clicked
  textSize(ts - 20);
  text("again", x + 38, y + 75);

  fill(0, 0, 0); // score text
  textSize(ts);

  if (velocityY > 3) {
    text("You killed the bird D: ", q - 280, z - 60);
    Bird(650, 600, 1.2);
    rotation += 5;
  } else {
    text("You landed :D", q - 160, z - 60);
    Bird(650, 600, 1.2);
    wings = "open";
  }

  z = z - speed;
  if (z > 360 || z < 330) {
    // animation so it moves
    speed = speed * -1;
  }
}

function reset() {
  velocityY = 0.2;
  accelaration = 0.2;
  birdY = 180;
  rotation = 0;
  state = "game";
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    GameScreen();
  } else if (state === "falling") {
    fallingScreen();
  } else if (state === "result") {
    endScreen();
  }
}

//when clicked:
function mouseClicked() {
  if (
    state === "start" &&
    mouseX > x &&
    mouseX < x + h &&
    mouseY > y &&
    mouseY < y + w
  ) {
    console.log("Start clicked");
    state = "game";
  } else if (
    state === "result" &&
    dist(mouseX, mouseY, x + 100, y + 60) < s / 2
  ) {
    console.log("again cliked");
    reset();
  }
}

/* My sources: 


*/
