const Pipe = function(xpos, ypos, height, speed, ctx){
  this.xpos = xpos;
  this.ypos = ypos;
  this.height = height;
  this.ctx = ctx;
  this.speed = speed;
  this.width = 150;
};

Pipe.prototype.update = function(){
  this.xpos -= this.speed;
};

Pipe.prototype.render = function(){
  this.ctx.fillStyle = "#000000"
  this.ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
  this.ctx.fillStyle = "#74BF2E";
  this.ctx.fillRect(this.xpos + 5, this.ypos+5, this.width - 10, this.height-10)
};
