const cityName = document.querySelector('p.city');
const input = document.querySelector('input');
const errorMsg = document.querySelector('p.error_message');
const temp = document.querySelector('p.temp');
const date = document.querySelector('p.date');
const weatherDescription = document.querySelector('p.description');
const feelsLike = document.querySelector('p.feels_like');
const windSpeed = document.querySelector('p.wind_speed');
const pressure = document.querySelector('p.pressure');
const humidity = document.querySelector('p.humidity');
const clouds = document.querySelector('p.clouds');
const visibility = document.querySelector('p.visibility');
const rain = document.querySelector('p.rain');

const apiInfo = {
    link : "https://api.openweathermap.org/data/2.5/weather?q=",
    key : "&appid=8cc5b993b049b2773030eac30c6e4f27",
    units : "&units=metric",
    lang : "&lang=pl"
}

function getWeather (){
    const apiCity = input.value || "Gdańsk";
    const apiURL = `${apiInfo.link}${apiCity}${apiInfo.key}${apiInfo.units}${apiInfo.lang}`;
    //console.log(apiURL);

    axios.get(apiURL).then((response) => {
        console.log(response.data);

        cityName.textContent = `${response.data.name}, ${response.data.sys.country}`;
        temp.textContent = `${Math.round(response.data.main.temp)}°C`;
        date.textContent = ``;
        weatherDescription.textContent = `${response.data.weather[0].description}`;
        feelsLike.textContent = `${Math.round(response.data.main.feels_like)}°C`;
        windSpeed.textContent = `${Math.round(response.data.wind.speed *3.6)}km/h`;
        pressure.textContent = `${response.data.main.pressure}hPa`;
        humidity.textContent = `${response.data.main.humidity} %`;
        clouds.textContent = `${response.data.clouds.all} %`;
        visibility.textContent = `${response.data.visibility} m`;
        rain.textContent = ``;
    })
}

function getWeatherByEnter (e){
    if (e.key === 'Enter') {
        getWeather();
    }
}

input.addEventListener('keypress', getWeatherByEnter);