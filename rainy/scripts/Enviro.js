const Env = function(canv, ctx){
  this.canv = canv;
  this.ctx = ctx;
  this.ticks = 0;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 2;
  this.bgWidth = 450;
  this.bgImg = document.getElementById("bg");
}

Env.prototype.update = function(){
  this.ticks++;


  this.bgPos -= this.bgSpeed;
  if (this.bgPos < -this.bgWidth) {
    this.bgPos = 0;
  }
};

Env.prototype.render = function(){
  for (let i = 0; i <= this.canv.width/this.bgWidth+1; i++){
  this.ctx.drawImage(this.bgImg, this.bgPos + i * this.bgWidth, 0);
  }

}
