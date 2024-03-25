// class WeatherLibrary {
//     constructor(apiKey) {
//         // Define the base URL of the weather data API
//         this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
//         // Store the API key for accessing the weather data API
//         this.apiKey = apiKey;
//     }

// //     async getWeatherData(city) {
// //         try {
// //             // Construct the API URL with the city name and API key
// //             const apiUrl = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

// //             // Fetch weather data from the API
// //             const response = await fetch(apiUrl);
// //             const data = await response.json();

// //             // Extract relevant weather information
// //             const currentWeather = data.weather[0].main;
// //             const humidity = data.main.humidity;
// //             const windSpeed = data.wind.speed;
// //             const rainfall = data.rain ? data.rain['1h'] : 0;

// //             // Return weather data
// //             return {
// //                 weather: currentWeather,
// //                 humidity: humidity,
// //                 windSpeed: windSpeed,
// //                 rainfall: rainfall
// //             };
// //         } catch (error) {
// //             throw new Error('Failed to fetch weather data');
// //         }
// //     }
// // }

//     // async getWeatherData(city) {
//     //     try {
//     //         // Construct the API URL with the city name and API key
//     //         const apiUrl = `https://cors-anywhere.herokuapp.com/${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

//     //         // Fetch weather data from the API
//     //         const response = await fetch(apiUrl, {
//     //             headers: {
//     //                 'Origin': window.location.origin // Pass the current origin as the value for the 'Origin' header
//     //             }
//     //         });
//     //         const data = await response.json();

//     //         // Extract relevant weather information
//     //         const currentWeather = data.weather[0].main;
//     //         const humidity = data.main.humidity;
//     //         const windSpeed = data.wind.speed;
//     //         const rainfall = data.rain ? data.rain['1h'] : 0;

//     //         // Return weather data
//     //         return {
//     //             weather: currentWeather,
//     //             humidity: humidity,
//     //             windSpeed: windSpeed,
//     //             rainfall: rainfall
//     //         };
//     //     } catch (error) {
//     //         throw new Error('Failed to fetch weather data');
//     //     }
//     // }
// }

// // Export the WeatherLibrary class for use in other modules
// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
//     module.exports = WeatherLibrary;
// }


class WeatherLibrary {
    constructor(apiKey) {
        // Define the base URL of the weather data API
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        // Store the API key for accessing the weather data API
        this.apiKey = apiKey;
    }

    async getWeatherData(city) {
        try {
            // Construct the API URL with the city name and API key
            const apiUrl = `https://cors-anywhere.herokuapp.com/${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
            // const apiUrl = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

            // Fetch weather data from the API
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Extract relevant weather information
            const currentWeather = data.weather[0].main;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const rainfall = data.rain ? data.rain['1h'] : 0;

            // Return weather data
            return {
                weather: currentWeather,
                temperature: temperature,
                humidity: humidity,
                windSpeed: windSpeed,
                rainfall: rainfall
            };
        } catch (error) {
            throw new Error('Failed to fetch weather data');
        }
    }
}

// Export the WeatherLibrary class for use in other modules
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = WeatherLibrary;
}
