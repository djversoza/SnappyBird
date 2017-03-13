const Bird = function(x, y, ctx) {
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.velY = 0;
  this.width = 90;
  this.height = 64;
  this.ticks = 0; //determines animation
  this.spriteIndex = 0; //determines animation
  this.sprites = [document.getElementById("bird1"),
                  document.getElementById("bird2"),
                  document.getElementById("bird1"),
                  document.getElementById("bird3")]
  const self = this;
  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 32) {
      self.velY = -16;
      console.log("jump");
    }
  });
};

Bird.prototype.update = function() {
  this.ticks++;
  if (this.ticks % 15 === 0) {
    this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length; //determines when to change bird frame for animation
  }
  this.y += this.velY;
  //this.velY += 2;
};

Bird.prototype.render = function() {
  let renderX = this.x - this.width/2;
  let renderY = this.y - this.height/2;
  this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY)
};
