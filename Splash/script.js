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




  $.getJSON("http://api.wunderground.com/api/cf05667bc1bf5438/forecast/q/"+inner+"/"+ inner2+".json", function(data){
    console.log(data.forecast.txt_forecast.forecastday[0].icon);
    var weather = data.forecast.txt_forecast.forecastday[0].icon;
    var bttn = document.createElement('button');
    bttn.className = "play"
    $(bttn).text("PLAY")
    var game = document.createElement("a")
    console.log(game);
    if (weather === "snow") { //gets weather
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("snow out there, stay warm!")
      $(bttn).appendTo("#go")
    } else if(weather === "clear"){
      $("#status").html("")
      $("#go button").remove();
      $("#status").append("all clear, ready to fly!");
      $(bttn).appendTo("#go");
      $(game).attr("href", "../index.html")
    } else if(weather === "rain") {
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("its raining, fly at your own risk!")
      $(bttn).appendTo("#go")
    }else if(weather === "partlycloudy") {
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("its cloudy today!")
      $(bttn).appendTo("#go")
    } else {
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("careful out there!")
      $(bttn).appendTo("#go")
    }
    $(".play").click(function() {
      window.location.href=game;
    })
  })
 }  //Gets weather
})

});
