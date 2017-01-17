$(document).ready(function() {
  // $("#testbutton").on("click", function() { //click button to get api:
  var lat;
  var long;
  $("#sunicon").hide();
  $("#rainicon").hide();
  $("#cloudicon").hide();

  if (navigator.geolocation) { //find local coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      //      $("#localData").html("latitude: " + lat + "<br>longitude: " + long);
      var myAPIkey = "APPID=c37b862c49db62516f76f2f4cc58fd0f";
      var myAPIcall = "http://api.openweathermap.org/data/2.5/weather?" + myAPIkey + "&lat=" + lat + "&lon=" + long;
       //     alert (myAPIcall); // just to watch code
      $.getJSON(myAPIcall, function(json) {
        $("#testAPI").html(JSON.stringify(json));
         //      console.log(json);

        var myCity = json.name; //string
        $("#myCity").text(json.name);

        var myWeather = json.weather; //object that holds rain, sun etc
        //     console.log(myWeather);
        //     alert(JSON.stringify(myWeather));

        var weatherToday = myWeather[0].main;
        //         alert(weatherToday);
        $("#myWeather").text(weatherToday); //puts weather on screen

        var myTemp = json.main.temp;
        myTemp = Math.round(myTemp - 272.15); // temp in celcius
        var tempFahr = Math.round(myTemp * 1.8 + 32); //temp i Fahrenheit

        $("#tempToday").text(myTemp); //puts temp in celsius on screen
        $("#fahrToday").text(tempFahr);

        if (weatherToday == "Clouds") { // change background-image
          $("#cloudicon").show();
          $(".main-container").css("background-image", "URL( http://res.cloudinary.com/pialisecloud/image/upload/v1456686593/Weather-site/clouds-747254_1920.jpg)");
        } else
        if (weatherToday == "Rain") {
          $("#rainicon").show();
          $(".main-container").css("background-image", "URL(http://res.cloudinary.com/pialisecloud/image/upload/v1456686600/Weather-site/rain-122691_1920.jpg)");
        } else
        if (weatherToday == "Drizzle") {
          $("#rainicon").show();
          $(".main-container").css("background-image", "URL(http://res.cloudinary.com/pialisecloud/image/upload/v1456686600/Weather-site/rain-122691_1920.jpg)");
        } else
        if (weatherToday == "Snow") {
          $("#rainicon").show();
          $(".main-container").css("background-image", "URL(http://res.cloudinary.com/pialisecloud/image/upload/v1456686612/Weather-site/winter-20234_1920.jpg)");
        } else
        if (weatherToday == "Mist") {
          $("#rainicon").show();
          $(".main-container").css("background-image", "URL(http://res.cloudinary.com/pialisecloud/image/upload/v1457989671/autumn-194834_1920_nponck.jpg)");
        } else
        if (weatherToday == "Fog") {
          $("#rainicon").show();
          $(".main-container").css("background-image", "URL(http://res.cloudinary.com/pialisecloud/image/upload/v1457989671/autumn-194834_1920_nponck.jpg)");
        } else
        if (weatherToday == "Thunderstorm") {
          $("#rainicon").show();
          $(".main-container").css("background-image",
            "URL(http://res.cloudinary.com/pialisecloud/image/upload/v1456686583/Weather-site/flash-1043778_1920.jpg)");
        } else
        if (weatherToday == "Clear") {
          $("#sunicon").show();
          $(".main-container").css("background-image",
            "URL(http://res.cloudinary.com/pialisecloud/image/upload/v1442827990/stillestorm_ktl3uj.jpg)");
        } else {
          $("#sunicon").show();
        }
      }); //end of getJSON
    });
  } //end of navigator.geolocation
  //  }); // end of click   
}); //end of ready

$("button.temp").on("click", function() {

  var cont = $("p").text();
  if (cont == "Click for F") {
    $("p").text("Click for C");
    $("h3.normalTemp").css("display", "none");
    $("h3.altTemp").css("display", "block");

  } else if (cont == "Click for C") {
    $("p").text("Click for F");
    $("h3.altTemp").css("display", "none");
    $("h3.normalTemp").css("display", "block");
  }
});