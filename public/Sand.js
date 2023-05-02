class Sand {
    // define properties
    // of each granule
    constructor (x, y, s) {
      this.x = x;
      this.y = y;
      this.s = s;
      this.d = 0;
      this.r = 0;
    }
    
    display() {
      // stye and draw
      // each granule
      noStroke()
      fill(227, 206, 175)
      rect(this.x, this.y, this.s, this.s)
    }
    
  move() {
      
      // get random decimal
      this.r = random(1)
      
      // 50% chance 
      // transformation 1 runs
      if (this.r > 0.5){
        //1 
        if (0 <= this.d && this.d <= 10) {
          this.x += random(-2,2);
          this.d ++
        }
        if (this.d >= 10 && this.d <= 20) {
          this.x -= random(-2,2)
          this.d ++
        }
        if (this.d >= 20) {
          this.d = 0
        }
      }
      
      // 50% chance transformation
      // 2 runs
      if (this.r < 0.5) {
        //2
        this.y += 3
      }
    }
  }