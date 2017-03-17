var Effect = function(canv, ctx) {
  this.canv = canv;
  this.ctx = ctx;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 15;
  this.bgWidth = 450;
  this.bgImg = document.getElementById("efct");
}

Effect.prototype.update = function(){


  this.bgPos -= this.bgSpeed;
  if (this.bgPos < -this.bgWidth) {
    this.bgPos = 0;
  }
};

Effect.prototype.render = function(){
  for (let i = 0; i <= this.canv.width/this.bgWidth+1; i++){
  this.ctx.drawImage(this.bgImg, this.bgPos + i * this.bgWidth, 0);
  }

}
