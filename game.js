function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(241, 212, 255);
}

// // birblander start
let x = 300; // variable x
let y = 400;
let w = 150; // weight
let h = 200; // height
let q = 375; // variable x for "birblander"
let z = 350; // variable y for "birblander"
let ts = 70; // text size for
let speed = 1; // speed of animaton "birblander"

d = 1; // variable for color in rect

createCanvas(800, 800);
background(255, 255, 255);

function button() {
  // start button
  rect(x, y, h, w);
}

function draw() {
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

function mouseClicked() {
  // mouse cliked to change color of button and see clicked
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    console.log("Clicked");
    d = 2;
  }
}

//game screen
