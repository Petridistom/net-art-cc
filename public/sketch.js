// assign empty array to `granules`
let granules = [];

// set max amount of sand
const maxLength = 100;

// load sounds
let sparkle

function setup () {
  // set canvas to window dimensions
  createCanvas(windowWidth, windowHeight);
  
  // set rectMode
  rectMode(CENTER);  

  sparkle = loadSound('sounds/sparkle.mp3')
}

function draw () {
  
  // set background colour
  background (0);
  
  //run spawnSugar function
  spawnSand()
  
  // set style
  noFill()
  stroke(176,214,210)

  // defined below
  draw_RS()

  check_collision()
}

function check_collision() {
  for (let i = 0; i < granules.length; i++) {
    // let d = dist(granules[i].x, granules[i].y, bubbles[i].x, bubbles[i].y) // dist between particles and center of the line
    
    if (granules[i].y >= 3.5 * height / 4) {
      granules.shift()
      playSound()
    }
  }
}

function playSound() {
  let r = random(1)
  if (r < 0.5) {sparkle.play()}
  // console.log(r)
}

// define function 'spawnSugar'
function spawnSand () {

  // only runs code if the 
  // mouse is being pressed 
  if (mouseIsPressed) {
    
    if (granules.length < maxLength) {
      // make a new sugar granule,
      // & add it to the 'granules' array
      granules.push (new Sand (mouseX, mouseY, 2))
    }
  }
  
  // removes older granules so
  // new ones can spawn
  if (granules.length === maxLength) {
    granules.shift()
  }
    // use the .forEach () array method
    // to pass each granule, one at a time,
    // as an argument into the g function
    granules.forEach ((g) => {
      
    // run functions from
    // sugar class object
    g.display ()
    g.move ()
  })
}

// define recursive square function
function recursive_square(x, y, s) {
  square(x, y, s)
  
  // end clause
  if (s > random(8, 16)) {
    recursive_square(x + s *0.5, y + s*0.5, s *0.5);
    recursive_square(x - s *0.5, y + s*0.5, s *0.5);
    recursive_square(x - s *0.5, y - s*0.5, s *0.5);
    recursive_square(x + s *0.5, y - s*0.5, s *0.5);    
  }
}

// define draw_RS function
function draw_RS() {
  
  // draw recursive squares
  // at relative positions
  recursive_square(0*    width / 8, 3.35 * height / 4, 36)
  recursive_square(0.5*  width / 8, 3.45 * height / 4, 30)
  recursive_square(0.5*  width / 8, 3.45 * height / 4, 30)
  recursive_square(1*    width / 8, 3.40 * height / 4, 25)
  recursive_square(1.5*  width / 8, 3.40 * height / 4, 35)
  recursive_square(2*    width / 8, 3.60 * height / 4, 26)
  recursive_square(2.5*  width / 8, 3.40 * height / 4, 28)
  recursive_square(3*    width / 8, 3.60 * height / 4, 23)
  recursive_square(3.5*  width / 8, 3.50 * height / 4, 30)
  recursive_square(4*    width / 8, 3.60 * height / 4, 27)
  recursive_square(4.5*  width / 8, 3.70 * height / 4, 18)
  recursive_square(5*    width / 8, 3.50 * height / 4, 24)
  recursive_square(5.5*  width / 8, 3.40 * height / 4, 25)
  recursive_square(6*    width / 8, 3.35 * height / 4, 35)
  recursive_square(6.5*  width / 8, 3.60 * height / 4, 25)
  recursive_square(7*    width / 8, 3.30 * height / 4, 33)
  recursive_square(7.5*  width / 8, 3.30 * height / 4, 29)
  recursive_square(8*    width / 8, 3.30 * height / 4, 43)
}

// add resizabilty
function windowResized () {
  resizeCanvas (window.innerWidth, window.innerHeight)
}