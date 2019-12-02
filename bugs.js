/*KC IMED
Fall2019*/

class Bugs {
  constructor() {
    this.r = 150;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
  }

  jump() {
      if (this.y == height - this.r) {
        this.vy = -35;
      }
    }

    show() {
        image(bugsImg, this.x, this.y, this.r, this.r);  
      }
    }
