window.onload = function(){
  const canv = document.getElementById("canvas")
  canv.width = window.innerWidth;
  canv.height = 600;

  const ctx = canv.getContext('2d');

  const env = new Env(canv, ctx);
  const bird = new Bird(250, 250, ctx);

  const pipes = [];
  setInterval(function(){
    let setPipe = genRndPipes(ctx, canv.width, canv.height);
    pipes.push(setPipe.top, setPipe.bottom)
  }, 2200);
  gameLoop();



  /*======GAME LOOP======*/
  function gameLoop() {
    ctx.fillRect(0, 0, canv.width, canv.height)
    env.update();
    env.render();
    pipes.forEach(function(pipe1){
      pipe1.update();
      pipe1.render();
    })
    bird.update();
    bird.render();
    if (colDetect(bird, pipes)){
      alert(bird.score + " you lose");
      location.reload();
    }
    window.requestAnimationFrame(gameLoop)
  }
};

function genRndPipes(ctx, canvWidth, canvHeight){
  let pTop = Math.round(Math.random() * 250 + 20); //determines the max and min length of the pipes
  let pBottom = canvHeight - 210 - pTop; //determines open space in middle of the pipes
  let returnVal = {};
  returnVal.top = new Pipe(canvWidth, -5, pTop, 4, ctx)
  returnVal.bottom = new Pipe(canvWidth, canvHeight + 5 - pBottom, pBottom, 4, ctx)
  return returnVal;
}

function colDetect(bird, pipes){
  for(var i = 0; i <pipes.length; i++){
    let e = pipes[i];
    let highPipe = e.ypos <= 0;
    let x0 = e.xpos, x1 = e.xpos + e.width;
    if (highPipe) {
      let y0 = e.ypos - 25 + e.height;
      let aTop = bird.x;
      let bTop = bird.y - bird.height/2;
      if (aTop > (x0 - 20) && aTop < x1 && bTop < y0) {
        return true;
      }
    } else {
        let y2 = e.ypos + 12;
        let a = bird.x;
        let b = bird.y + bird.height/2;
        if (a > (x0 - 25) && a < x1 && b > y2) {
          return true;
        }
    }
  };
  return false;
}
