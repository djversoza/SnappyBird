$(document).ready(function() {


  $("form").on("submit", function(e) {
    e.preventDefault()
    var inner = $("#st").val();
    var inner2 = $("#cty").val();

    if (inner === "" || inner2 === "") {
      alert("Enter state eg: 'CA' and a city eg: 'Sacramento'");
    } else {
    console.log(inner);
    console.log(inner2);
    $("form").trigger("reset")


  $.getJSON("http://api.wunderground.com/api/cf05667bc1bf5438/forecast/q/"+inner+"/"+ inner2+ ".json", function(data){
    console.log(data.forecast.txt_forecast.forecastday[0].icon);
    var weather = data.forecast.txt_forecast.forecastday[0].icon;
    var bttn = document.createElement('button');
    bttn.className = "play"
    $(bttn).text("PLAY")
    var game = document.createElement("a")
    console.log(game);

    // reduce lines 28 to 68 ( 40 lines of code to no more than 10 lines of code )
    var gameOptions = {snow: ["../snowy/index.html", "url(tree.jpg)", "snow out there, stay warm!"],
                       clear: ["../sunny/index.html", "url(blue.jpg)", "all clear, ready to fly!"],
                       rain: ["../rainy/index.html", "url(rain.jpg)", "rain! fly at your own risk!"],
                       cloudy: ["../cloudy/index.html", "url(cloudy.png)", "its cloudy today!"],
                       default: [ "../sunny/index.html", "url(cloudy.png)", weather]};



    if (gameOptions[weather]) {
          getter(gameOptions[weather][2], gameOptions[weather][1], gameOptions[weather][0] )
        } else {
          getter(gameOptions["default"][2], gameOptions["default"][1], gameOptions["default"][0])
        }



    function getter(msg, bg, file) {
      $("#status").html("")
      $("#go button").remove()
      $("#status").append(msg)
      $("body").css("background-image", "")
      $("body").css("background-image", bg)
      $(bttn).appendTo("#go")
      $(game).attr("href", file)
    }


    $(".play").click(function() {
      window.location.href=game;
    })
  })
 }  //Gets weather
})

});
