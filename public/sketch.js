document.body.style.margin   = 0
document.body.style.overflow = `hidden`

function setup () {
   createCanvas (innerWidth, innerHeight);
   background (0);
   noStroke();
}

function  draw () {
fill(random(180,255), random(200,255), random(230, 255));
if (mouseIsPressed) {
   circle(mouseX, mouseY, 120);
   // console.log(`your mum is ${mouseX} kilos fat`);
}
}

function mousePressed() {
   background(random(180, 255), random(200, 255), random(180,255));

}
