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
    if (weather === "snow") { //gets weather
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("its snowing")
      $(bttn).appendTo("#go")
    } else if(weather === "clear"){
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("its clear")
      $(bttn).appendTo("#go")
    } else if(weather === "rain") {
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("its raining")
      $(bttn).appendTo("#go")
    }else if(weather === "partlycloudy") {
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("its a little cloudy")
      $(bttn).appendTo("#go")
    } else {
      $("#status").html("")
      $("#go button").remove()
      $("#status").append("its something")
      $(bttn).appendTo("#go")
    }
  })
} //Gets weather
})

});
