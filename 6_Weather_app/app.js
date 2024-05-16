const apiKey = 'cc948d103b47b2fab187d7b17ce9164a';
const apiUrl =
    'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('#searchBox');
const searchBtn = document.querySelector('#searchBtn');
const weatherIcon = document.querySelector('#weather-icon');
const cardBg = document.querySelector('#cardBg');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#weather').style.display = 'none';
    } else {
        var data = await response.json();

        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML =
            Math.round(data.main.temp) + '°C';
        document.querySelector('#humidity').innerHTML =
            data.main.humidity + ' %';
        document.querySelector('#wind').innerHTML = data.wind.speed + ' km/hr';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png';
            cardBg.src = 'gifs/cloud.gif';
            // card.src = 'gifs/cloud.gif';
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png';
            cardBg.src = 'gifs/clear.gif';
            // card.src = 'gifs/clear.gif';
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
            cardBg.src = 'gifs/drizzle.gif';
            // card.src = 'gifs/drizzle.gif';
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png';
            cardBg.src = 'gifs/mist.gif';
            // card.src = 'gifs/mist.gif';
        }
        document.querySelector('#weather').style.display = 'block';
        document.querySelector('#error').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
checkWeather(searchBox.value);
