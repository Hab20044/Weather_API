// 1ce1faa09c6c4e529b4173254241412  

// http://api.weatherapi.com/v1/search.json?key=1ce1faa09c6c4e529b4173254241412
async function getWeatherData() {
  let response = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=1ce1faa09c6c4e529b4173254241412&q=egypt&days=3"
  );
  let finalResponse = await response.json();
  console.log(finalResponse);
  todayWeatherData(finalResponse);
  tomWeatherData(finalResponse);
  afterTomWeatherData(finalResponse);
}
getWeatherData();

function todayWeatherData(data) {
  console.log(data.current.condition.icon);

  document.querySelector("#temp").innerHTML = data.current.temp_c + " c";


  document.querySelector("#condition").innerHTML = data.current.condition.text;


  // document.querySelector("#condition").innerHTML = data.current.condition.icon


  document.querySelector("#wind").innerHTML = data.current.wind_kph;

  document.querySelector("#wind_dir").innerHTML = data.current.wind_dir;


document.querySelector("#rain").innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain + "%"

}


function tomWeatherData(data) {
  console.log(data.forecast.forecastday[1].day.avgtemp_c);
  document.querySelector("#temp1").innerHTML =
    data.forecast.forecastday[1].day.maxtemp_c + "c";
   document.querySelector("#mintemp").innerHTML = data.forecast.forecastday[1].day.mintemp_c + "c";
  document.querySelector("#condition1").innerHTML =
    data.forecast.forecastday[1].day.condition.text;
  // document.querySelector("#condition1").innerHTML = data.forecast.forecastday[1].day.condition.icon
}

function afterTomWeatherData(data) {
  console.log(data.forecast.forecastday[2].day.avgtemp_c);
  document.querySelector("#temp2").innerHTML =
    data.forecast.forecastday[2].day.maxtemp_c + "c";
    document.querySelector("#mintemp1").innerHTML = data.forecast.forecastday[2].day.mintemp_c + "c";
  document.querySelector("#condition2").innerHTML =
    data.forecast.forecastday[2].day.condition.text;
  // document.querySelector("#condition2").innerHTML = data.forecast.forecastday[2].day.condition.icon
}
