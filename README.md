# Weather App

## Overview
This is a simple Weather App built using React and Material-UI that fetches weather data from OpenWeather API and displays it in a user-friendly manner. Users can search for any city and view its current weather details, including temperature, humidity, and weather conditions.

## Features
- Search for weather information by city name
- Display current temperature, humidity, and weather conditions
- Dynamic weather icons based on conditions
- Background images that change according to the weather
- Error handling for invalid city names

## Tech Stack
- React.js
- Material-UI (MUI)
- OpenWeather API
- CSS

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd weather-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) and replace `API_KEY` in `SearchBox.js`:
   ```javascript
   const API_KEY = "your-api-key";
   ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Open `http://localhost:3000/` in your browser.

## File Structure
```
weather-app/
│-- src/
│   │-- components/
│   │   │-- WeatherApp.js
│   │   │-- SearchBox.js
│   │   │-- InfoBox.js
│   │-- styles/
│   │   │-- SearchBox.css
│   │   │-- InfoBox.css
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## Usage
1. Enter a city name in the search box.
2. Click the "Search" button.
3. View the weather details including temperature, humidity, and weather condition.

## Contributions
Contributions are welcome! Feel free to submit issues and pull requests.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, reach out to [your email or GitHub profile].
