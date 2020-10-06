$(document).ready(function(){
   $("#input").click(function(){
        console.log(input)
        $("#user_input").text("");
    })
})
var APIKey = "d1d4950a5e55ca145491b03c5a7cd8d2";
var city = $("#input");
// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;


$.ajax({
    url: queryURL,
    method: "GET"
  })
  