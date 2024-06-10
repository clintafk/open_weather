const container = document.querySelector('.container');
const search = document.querySelector('.city_searchbox button');
const searchBox = document.querySelector('.search-input');
const citySearchBox = document.querySelector('.city_searchbox input');
const weatherBox1 = document.querySelector('.weather-details');
const weatherBox2 = document.querySelector('.weather-details2');

const fetchWeather = () => {
    const APIKey = 'a5ffbe27d6974533ef33c26ded7edf65';
    const citySearchBoxValue = document.querySelector('.city_searchbox input').value;

    if (citySearchBoxValue == '')
        return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearchBoxValue}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                return;
            }

            const body = document.body;
            const weather_city = document.querySelector('#main-weather-city');
            const icon  = document.querySelector('#main-weather-icon');
            const weather_type = document.querySelector('#main-weather-type');
            const temperature = document.querySelector('#main-weather-temp');
            const description = document.querySelector('#main-weather-description');
            const humidity = document.querySelector('#main-weather-humidity');
            const wind = document.querySelector('#main-weather-wind');
            const visibility = document.querySelector('#main-weather-visibility');
            const pressure = document.querySelector('#main-weather-pressure');
            
            switch (json.weather[0].main) {
                case 'Clear':
                    body.style.backgroundImage = "url('images/clear.jpg')"
                    icon.innerHTML = 'clear_day';
                    break;
                
                case 'Rain':
                    body.style.backgroundImage = "url('images/rain.jpg')"
                    icon.innerHTML = 'rainy';
                    break;

                case 'Snow':
                    body.style.backgroundImage = "url('images/snow.jpg')"
                    icon.innerHTML = 'weather_snowy';
                    break;

                case 'Clouds':
                    body.style.backgroundImage = "url('images/clouds.jpg')"
                    icon.innerHTML = 'partly_cloudy_day';
                    break;

                case 'Haze':
                    body.style.backgroundImage = "url('images/haze.jpg')"
                    icon.innerHTML = 'mist';
                    break;
                
                default:
                    icon.src = '';
            }

            weather_city.innerHTML = `${json.name}, ${json.sys.country}`;
            weather_type.innerHTML = `${json.weather[0].main}`;
            temperature.innerHTML = `${parseInt(json.main.temp)}<h1 style=display:inline;>°C</h1>`;
            description.innerHTML = `Feels like ${parseInt(json.main.feels_like)}°C, ${json.weather[0].description}.`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${json.wind.speed}mph`;
            visibility.innerHTML = `${parseInt(json.visibility)}km`;
            pressure.innerHTML = `${json.main.pressure}hPa`;
        });
};

// search.addEventListener('click', fetchWeather);
// search.addEventListener('click', ()=> {
//     const APIKey = 'a5ffbe27d6974533ef33c26ded7edf65';
//     const citySearchBoxValue = document.querySelector('.city_searchbox input').value;
//
//     if (citySearchBoxValue == '')
//         return
//
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearchBoxValue}&units=metric&appid=${APIKey}`)
//         .then(response => response.json())
//         .then(json => {
//             if (json.cod === '404') {
//                 return;
//             }
//
//             console.log(json.coord.lat);
//             console.log(json.coord.lon);
//
//             const body = document.body;
//             const weather_city = document.querySelector('#main-weather-city');
//             const icon  = document.querySelector('#main-weather-icon');
//             const weather_type = document.querySelector('#main-weather-type');
//             const temperature = document.querySelector('#main-weather-temp');
//             const description = document.querySelector('#main-weather-description');
//             const humidity = document.querySelector('#main-weather-humidity');
//             const wind = document.querySelector('#main-weather-wind');
//             const visibility = document.querySelector('#main-weather-visibility');
//             const pressure = document.querySelector('#main-weather-pressure');
//             
//             switch (json.weather[0].main) {
//                 case 'Clear':
//                     body.style.backgroundImage = "url('images/clear.jpg')"
//                     icon.innerHTML = 'clear_day';
//                     break;
//                 
//                 case 'Rain':
//                     body.style.backgroundImage = "url('images/rain.jpg')"
//                     icon.innerHTML = 'rainy';
//                     break;
//
//                 case 'Snow':
//                     body.style.backgroundImage = "url('images/snow.jpg')"
//                     icon.innerHTML = 'weather_snowy';
//                     break;
//
//                 case 'Clouds':
//                     body.style.backgroundImage = "url('images/clouds.jpg')"
//                     icon.innerHTML = 'partly_cloudy_day';
//                     break;
//
//                 case 'Haze':
//                     body.style.backgroundImage = "url('images/haze.jpg')"
//                     icon.innerHTML = 'mist';
//                     break;
//                 
//                 default:
//                     icon.src = '';
//             }
//
//             weather_city.innerHTML = `${json.name}, ${json.sys.country}`;
//             weather_type.innerHTML = `${json.weather[0].main}`;
//             temperature.innerHTML = `${parseInt(json.main.temp)}<h1 style=display:inline;>°C</h1>`;
//             //description.innerHTML = `${json.weather[0].description}`;
//             description.innerHTML = `Feels like ${parseInt(json.main.feels_like)}°C, ${json.weather[0].description}.`;
//             humidity.innerHTML = `${json.main.humidity}%`;
//             wind.innerHTML = `${json.wind.speed}mph`;
//             visibility.innerHTML = `${parseInt(json.visibility)}km`;
//             pressure.innerHTML = `${json.main.pressure}hPa`;
//         });
// });

citySearchBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchWeather();
    }
})
