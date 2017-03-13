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
      self.velY = -14;
      console.log("location y " + self.y);
    }
  });
};

Bird.prototype.update = function() {
  this.ticks++;
  if (this.ticks % 15 === 0) {
    this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length; //determines when to change bird frame for animation
  }
  if (this.y < -15) {
    this.velY = 12;
    console.log("too high")
  }
  if (this.y > 660) {
    console.log("too low")
    alert("you lose");
    location.reload();
  }
  this.y += this.velY;
  this.velY += 1.25;
};

Bird.prototype.render = function() {
  let renderX = this.x - this.width/2;
  let renderY = this.y - this.height/2;
  this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY)
};
