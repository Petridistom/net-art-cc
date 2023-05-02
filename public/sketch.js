document.body.style.margin   = 0
document.body.style.overflow = `hidden`

// assign empty array to `granules`
let granules = [];

// set max amount of sand
const maxLength = 100;

function setup () {
   createCanvas (innerWidth, innerHeight)
}

function  draw () {
   background (`turquoise`)
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

// add resizabilty
function windowResized () {
  resizeCanvas (window.innerWidth, window.innerHeight)
}