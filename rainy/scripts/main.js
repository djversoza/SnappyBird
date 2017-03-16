window.onload = function(){
  const canv = document.getElementById("canvas")
  canv.width = window.innerWidth;
  canv.height = 600;

  const ctx = canv.getContext('2d');


  const env = new Env(canv, ctx);
  const bird = new Bird(250, 250, ctx, canv);

  var highScore = localStorage.getItem("hScore");
    console.log(highScore)
    $(".reset").append("<h1>" + "HighScore: " + highScore + "</h1>")

  var btn = document.createElement("button")
  $(btn).html("Replay")
  $(btn).click(function() {
    location.reload()
  });
  $(".cen").append(btn)
  const pipes = [];

  window.addEventListener('keydown', function(z){
    if (z.keyCode === 13) {

  let setPipe = genRndPipes(ctx, canv.width, canv.height);
  pipes.push(setPipe.top, setPipe.bottom)
  setInterval(function(){
    let setPipe = genRndPipes(ctx, canv.width, canv.height);
    pipes.push(setPipe.top, setPipe.bottom)
  }, 1900);
  gameLoop();



  /*======GAME LOOP======*/
  function gameLoop() {
    //ctx.fillRect(0, 0, canv.width, canv.height)


    bird.update(pipes);

    if(!bird.hit){

        env.update();

        pipes.forEach(function(pipe1){
          pipe1.update();
        })
    }

    env.render();
    pipes.forEach(function(pipe1){
      pipe1.render();
    })
    bird.scoreCtr();

    bird.render();
    if (bird.hit) {
      gameOver(ctx, canv, bird.score, highScore);
    }
    window.requestAnimationFrame(gameLoop)
  }
 }
}); //<-----event listener
};

function genRndPipes(ctx, canvWidth, canvHeight){
  let pTop = Math.round(Math.random() * 250 + 20); //determines the max and min length of the pipes
  let pBottom = canvHeight - 210 - pTop; //determines open space in middle of the pipes
  let returnVal = {};
  returnVal.top = new Pipe(canvWidth, -5, pTop, 6, ctx)
  returnVal.bottom = new Pipe(canvWidth, canvHeight + 5 - pBottom, pBottom, 6, ctx)
  return returnVal;
}



function gameOver(ctx, canv, score, highScore) {
  if (score > highScore) {
    localStorage.setItem("hScore", score);
    highScore = localStorage.getItem("hScore")

  }

  ctx.fillStyle = "DarkRed"
  ctx.font = "40px Sugar";
  ctx.textAlign = "center";
  ctx.fillText("Game Over!", canv.width/2, canv.height/2)
  ctx.fillText("Score: " + score, canv.width/2, canv.height/2 + 50)

}
