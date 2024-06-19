const apikey = "67d5a9e8de3bce23fb00b6eec7171680"; 
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(`${apiURL}&q=${city}&appid=${apikey}`);
    if (response.ok) {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src ="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src ="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src ="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src ="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src ="images/mist.png";
        }
        
        
    } else {
        alert("City not found");
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather("Tunisia");