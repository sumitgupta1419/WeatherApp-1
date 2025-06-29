document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const cityName = document.getElementById('city-name').value;
    getWeatherData(cityName);
});
function getWeatherData(city) {
    
    const weatherData = {
        temperature: '25°C',
        description: 'Sunny',
        feelsLike: '27°C',
        humidity: '40%',
        windSpeed: '3 m/s',
        icon: 'https://via.placeholder.com/100' 
    };
    
    document.getElementById('temperature').innerText = `Temperature: ${weatherData.temperature}`;
    document.getElementById('description').innerText = `Description: ${weatherData.description}`;
    document.getElementById('feels-like').innerText = `Feels like: ${weatherData.feelsLike}`;
    document.getElementById('humidity').innerText = `Humidity: ${weatherData.humidity}`;
    document.getElementById('wind-speed').innerText = `Wind speed: ${weatherData.windSpeed}`;
    document.getElementById('weather-icon').src = weatherData.icon;
    
    document.getElementById('weather-data').style.display = 'block';
}