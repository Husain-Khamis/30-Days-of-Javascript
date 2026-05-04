const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('search-input');
const errorMessage = document.getElementById('error-message');
const loadingDiv = document.getElementById('loading');
const resultSection = document.getElementById('results-Section');
const historySection = document.getElementById('history-section');
const apiKey = config.apiKey;

const weatherIcon = document.getElementById('weatherIcon');
const regionArea = document.getElementById('region-area');
const temperatureArea = document.getElementById('temperature-area');
const descriptionArea = document.getElementById('weather-description');
const humidityArea = document.getElementById('humidity-area');
const windSpeed = document.getElementById('windspeed');
let currentTemp = 0;
let isCelsius = true;

const toggleBtn = document.getElementById('toggleBtn');

function searchCity(city) {
        
    loadingDiv.classList.remove('hidden');
    console.log('loading class list:', loadingDiv.classList);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {

        if (data.cod === 404 || data.cod === "404"){
            errorMessage.textContent = "Error, City not found!";
            errorMessage.classList.remove('hidden');
            resultSection.classList.add('hidden');
            return;
        }

        const name = data.name;
        const country = data.sys.country;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        currentTemp = temperature;

        resultSection.classList.remove('hidden');

        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        regionArea.textContent = `${name}, ${country}`;
        temperatureArea.textContent = `The Current Temperature is ${currentTemp.toFixed(2)}°C`
        descriptionArea.textContent = `The Current Weather is ${description}`;
        humidityArea.textContent = `The Humidity Percentage is ${humidity}%`;
        windSpeed.textContent = `The Current Wind Speed is ${wind}m/s`;

        isCelsius = true;
        addToHistory(city);
        errorMessage.classList.add('hidden');
        console.log(data);
    })
    .catch(function(error){
        errorMessage.textContent = "Network Error, Please try again.";
        errorMessage.classList.remove('hidden');
        resultSection.classList.add('hidden');
    })
    .finally(function(){
        loadingDiv.classList.add('hidden');
    }) 
}

let searchHistory = [];

function addToHistory(city) {
    searchHistory.unshift(city);

    if (searchHistory.length > 5) {
        searchHistory.pop();
    }

    historySection.innerHTML = '';

    searchHistory.forEach(function(cityName) {
        const btn = document.createElement('button');
        btn.textContent = cityName;

        btn.addEventListener('click', function() {
            searchCity(cityName);
        });

        historySection.appendChild(btn);
    })
}

toggleBtn.addEventListener('click', function() {
    isCelsius = !isCelsius;

    if (isCelsius) {
        temperatureArea.textContent = `The Current Temperature is ${currentTemp.toFixed(2)}°C`;
    } else {
        const fahrenheit  = (currentTemp * (9/5)) + 32;
        temperatureArea.textContent = `The Current Temperature is ${fahrenheit.toFixed(2)}°F`;
    }

})

searchBtn.addEventListener('click', function(){
    const city = input.value

    if (city === "" || city.length === 0){
        errorMessage.textContent = "Error, City Cannot be Empty, Please enter a city!";
        errorMessage.classList.remove('hidden');
        return;
    }

    searchCity(city);
})