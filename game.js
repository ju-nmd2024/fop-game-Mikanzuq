function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255, 255, 255);
}

// // // birblander start
// let x = 300; // variable x
// let y = 400;
// let w = 150; // weight
// let h = 200; // height
// let q = 375; // variable x for "birblander"
// let z = 350; // variable y for "birblander"
// let ts = 70; // text size for
// let speed = 1; // speed of animaton "birblander"

// d = 1; // variable for color in rect

// createCanvas(800, 800);
// background(255, 255, 255);

// function button() {
//   // start button
//   rect(x, y, h, w);
// }

// function draw() {
//   background(255, 255, 255);
//   if (d === 1) fill(255, 0, 120); // used yt video to learn
//   if (d === 2) fill(70, 70, 70);
//   noStroke();
//   button();

//   fill(0, 0, 0); // birblander text
//   textSize(ts);
//   text("Birblander", q - 130, z - 60);
//   z = z - speed;
//   if (z > 360 || z < 330) {
//     // animation so it moves
//     speed = speed * -1;
//   }

//   if (d === 2) fill(255, 255, 255); // make it change color when clicked
//   else fill(70, 70, 70);
//   textSize(ts - 20);
//   text("S t a r t", x + 18, y + 90);
// }

// function mouseClicked() {
//   // mouse cliked to change color of button and see clicked
//   if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
//     console.log("Clicked");
//     d = 2;
//   }
// }

//game screen

// bird cage
function draw() {
  background(241, 212, 255);

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
    fill(241, 212, 255);
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
    pop();
    pop();
    pop();
  }
  function Bird(x, y, s) {
    push();
    translate(100, 100);
    scale(s);

    // bottom wing
    push();
    angleMode(DEGREES);
    translate(x - 35, y - 35);
    rotate(-10);
    scale(0.3);
    noStroke();
    triangle(40, -40, -50, 60, 150, 280);
    triangle(40, 50, -50, 60, 10, 170);
    pop();

    // legs
    push();
    translate(x - 110, y - 150);
    strokeWeight(3);
    line(100, 180, 100, 210);
    line(110, 170, 120, 210);
    pop();

    // body
    push();
    angleMode(DEGREES);
    translate(x, y);
    rotate(60);
    noStroke();
    fill(122, 235, 255);
    rect(-75, -25, 100, 60, 60);
    pop();

    // head + face
    push();
    noStroke();
    translate(x + 10, y + 10);
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

    // tail
    push();
    translate(x + 10, y);
    noStroke();
    fill(122, 235, 255);
    triangle(2, 20, 80, 90, 5, 5);
    pop();

    // top wing
    push();
    angleMode(DEGREES);
    translate(x - 9, y - 35);
    rotate(-10);
    scale(0.3);
    noStroke();
    triangle(40, -40, -50, 60, 150, 280);
    triangle(40, 50, -50, 60, 10, 170);
    pop();
  }
  Cage(10, -80, 1.2); //cage done function
  Bird(450, 300, 1.2);
}
