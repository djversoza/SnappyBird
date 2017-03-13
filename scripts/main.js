window.onload = function(){
  const canv = document.getElementById("canvas")
  canv.width = window.innerWidth;
  canv.height = 600;

  const ctx = canv.getContext('2d');

  const env = new Env(canv, ctx);
  const bird = new Bird(150, 250, ctx)
  gameLoop()

  ctx.fillStyle = "#ffffff";

  /*======GAME LOOP======*/
  function gameLoop() {
    ctx.fillRect(0, 0, canv.width, canv.height)
    env.update();
    env.render();
    bird.update();
    bird.render();
    window.requestAnimationFrame(gameLoop)
  }
};
