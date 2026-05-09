# Refractored Weather App
A vanilla JavaScript weather app that fetches real-time weather data from the OpenWeatherMap API. Users can search any city, toggle between °C and °F, and quickly re-search from a history of their last 5 searches. It also provides a 5 day forecast report from the same API.

---

## Features
- **City Search** - Type any city name and press Search to fetch live weather data
- **Weather Display** - Shows city name, country, temperature, weather description, humidity, wind speed, and a live weather icon
- **5 Day Forecast Report Display** - Displays 5 forecast cards with date, icon, temperature, humidity and a description
- **°C/°F Toggle** - Converts temperature units on the fly without making a new API call
- **Search History** - Last 5 searches saved as clickable chips, click any to re-fetch instantly
- **Loading Spinner** - CSS animated spinner appears during every fetch and hides on completion
- **Error Handling** - Separate messages for empty input, city not found, and network errors
- **Debounced Search** - Auto searches after the user stops typing for 500ms, no request for each key typed

---

## How to Run
1. Clone or download the project
2. Sign up for a free API key at [openweathermap.org](https://openweathermap.org/api)
3. Create a `config.js` file in the root folder:
```javascript
const config = {
    apiKey: "YOUR_API_KEY_HERE"
}
```
4. Open `index.html` in your browser using Live Server
> ⚠️ Add `config.js` to your `.gitignore` - never commit your API key

---

## What I Learned
- How `async/await` is just cleaner syntax for Promises, same behaviour, easier to read
- How `try/catch/finally` replaces `.then().catch().finally()` and when each block runs
- Why `Promise.allSettled()` is safer than `Promise.all()`, one failure does not cancel everything
- How to filter an array of 40 forecast entries down to 5 daily entries using `dt_txt`
- How debounce works, cancelling a timer on every keystroke and restarting it until the user stops
- How to classify errors, network failures vs API-level errors vs city not found
- Why `cod: 404` needs to be checked inside the fulfilled block, not the catch block
- How to clear dynamically created elements with `innerHTML = ''` before re-rendering
- Why `return` inside a `filter` callback is different from `return` inside a `forEach` callback

---

## Tech Stack
- HTML
- CSS (Flexbox, CSS animations)
- Vanilla JavaScript (Fetch API, Promises)
- OpenWeatherMap API

---

## Concepts Practiced
| Concept | Used For |
|---|---|
| `async/await` | Refactoring fetch logic from Promise chains |
| `try/catch/finally` | Replacing `.then().catch().finally()` |
| `Promise.allSettled()` | Fetching current weather and forecast simultaneously |
| `Array.filter()` | Filtering 40 forecast entries to 5 daily entries |
| Debounce with `setTimeout` | Limiting API calls while user types |
| `createElement` + `innerHTML` | Rendering forecast cards dynamically |
| Error classification | Showing different messages per error type |
| `config.js` + `.gitignore` | Keeping API key out of version control |