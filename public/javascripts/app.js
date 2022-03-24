var fetchWeather = "/weather";

// const weatherForm = document.querySelector('form');
// const search = document.querySelector('input');

const toggleSwitch = document.querySelector('.switch')

const weatherIcon = document.querySelector('.weatherIcon i');
const weatherCondition = document.querySelector('.weatherCondition');

const tempElement = document.querySelector('.temperature span');

const locationElement = document.querySelector('.place');

const dateElement = document.querySelector('.date');

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

dateElement.textContent = new Date().getDate() + ", " + monthNames[new Date().getMonth()].substring(0, 3);


// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

// App data
const weather = {

    
}

weather.temperature = {
    unit: "celsius"
}


function changeTempIndex(celsius){

    if(weather.temperature.unit == "celsius"){

        let fahrenheit = celsiusToFahrenheit(celsius);
        fahrenheit = Math.floor(fahrenheit)

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit"

    }else{

    
        tempElement.innerHTML = `${celsius}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }

}


// weatherForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     locationElement.textContent = "Loading...";
//     tempElement.textContent = "";
//     weatherCondition.textContent = "";
//     const locationApi = fetchWeather + "?address=" + search.value;
//     fetch(locationApi).then(response => {
//         response.json().then(data => {
//             if(data.error) {
//                 locationElement.textContent = data.error;
//                 tempElement.textContent = "";
//                 weatherCondition.textContent = "";
//             } else {
//                 console.log()
//                 if(data.description === "rain" || data.description === "fog") {
//                     weatherIcon.className = "wi wi-day-" + data.description
//                 } else {
//                     weatherIcon.className = "wi wi-day-cloudy"
//                 }
//                 locationElement.textContent = data.cityName;
//                 tempElement.textContent = (data.temperature - 273.5).toFixed(2) + String.fromCharCode(176);
//                 weatherCondition.textContent = data.description.toUpperCase();
//             }
//         }) 
//     });
// })