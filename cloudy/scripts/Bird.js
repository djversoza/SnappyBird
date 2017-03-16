const Bird = function(x, y, ctx, canv) {
  this.x = x;
  this.y = y;
  this.hit = false;
  this.ctx = ctx;
  this.cH = canv.height;
  this.cW = canv.width;
  this.score = 0
  this.velY = 0;
  this.width = 90;
  this.height = 64;
  this.ticks = 0; //determines when to animate
  this.spriteIndex = 0; //determines which picture to use
  this.sprites = [document.getElementById("bird1"),
                  document.getElementById("bird2"),
                  document.getElementById("bird1"),
                  document.getElementById("bird3")]
  const self = this;
  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 32 && !self.hit) {
      self.velY = -14;
  //    console.log("location y " + self.y);
    }
  });
};

Bird.prototype.update = function(pipes) {
  this.y += this.velY;
  this.velY += 1.25;
  if (this.colDetect(pipes)) {
    this.hit = true;
  }

  this.ticks++;

  if (this.ticks % 10 === 0) {
    this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length; //determines when to change bird frame for animation
  }
  if (this.y < -15) {
    this.velY = 12;
    console.log("too high") // sets upper boundary
  }
  if (this.y > 619) {
    this.hit = true;
  }

};

Bird.prototype.render = function() {
  let renderX =  - this.width/2;
  let renderY =  - this.height/2;
  this.ctx.save();
  this.ctx.translate(this.x, this.y);
  let rota = Math.PI/8 * this.velY/14;
  this.ctx.rotate(rota);
  this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY)

  this.ctx.restore()
};

Bird.prototype.colDetect = function(pipes){
  for(var i = 0; i <pipes.length; i++){
    let e = pipes[i];
    let highPipe = e.ypos <= 0;
    let x0 = e.xpos, x1 = e.xpos + e.width;

    if (this.x > x0 + 10 && this.x < x0 + 15) {
      this.score+= .5
      console.log(this.score)
    }

    if (highPipe) {
      let y0 = e.ypos - 25 + e.height;
      let aTop = this.x;
      let bTop = this.y - this.height/2;
      if (aTop > (x0 - 20) && aTop < x1 && bTop < y0) {

        return true;
      }
    } else {
        let y2 = e.ypos + 12;
        let a = this.x;
        let b = this.y + this.height/2;
        if (a > (x0 - 25) && a < x1 && b > y2) {
          return true;
        }
    }
  };
  return false;
}

Bird.prototype.scoreCtr = function() {
  this.ctx.fillStyle = "DarkRed"
  this.ctx.font = "40px Sugar";
  this.ctx.textAlign = "center";
  this.ctx.fillText("Score: " + this.score, this.cW/2, this.cH - 550)

}
