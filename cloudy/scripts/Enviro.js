const Env = function(canv, ctx){
  this.canv = canv;
  this.ctx = ctx;
  //this.score = 0;
  this.ticks = 0;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 2;
  this.bgWidth = 450;
  this.bgImg = document.getElementById("bg");
}

Env.prototype.update = function(){
  this.ticks++;
//  if (this.ticks > 260 && this.ticks % 138 === 0) {
  //  this.score++

//  }

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

Env.prototype.scoreCtr = function() {
  this.ctx.fillStyle = "DarkRed"
  this.ctx.font = "40px Sugar";
  this.ctx.textAlign = "center";
  this.ctx.fillText("Score: " + this.score, this.canv.width/2, this.canv.height - 550)

}
