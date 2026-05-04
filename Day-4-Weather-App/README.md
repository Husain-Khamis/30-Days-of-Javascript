# Weather App
A vanilla JavaScript weather app that fetches real-time weather data from the OpenWeatherMap API. Users can search any city, toggle between °C and °F, and quickly re-search from a history of their last 5 searches.

---

## Features
- **City Search** — Type any city name and press Search to fetch live weather data
- **Weather Display** — Shows city name, country, temperature, weather description, humidity, wind speed, and a live weather icon
- **°C/°F Toggle** — Converts temperature units on the fly without making a new API call
- **Search History** — Last 5 searches saved as clickable chips — click any to re-fetch instantly
- **Loading Spinner** — CSS animated spinner appears during every fetch and hides on completion
- **Error Handling** — Separate messages for empty input, city not found, and network errors

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
> ⚠️ Add `config.js` to your `.gitignore` — never commit your API key

---

## What I Learned
- How `fetch` works and what a Promise chain looks like in practice
- The difference between `.then()`, `.catch()`, and `.finally()` and when each fires
- Why `.catch()` doesn't catch API-level errors like 404 — and how to check `data.cod` instead
- How to construct dynamic URLs using template literals
- How to access nested API response data like `data.weather[0].description`
- Why mixing `style.display` and `classList` causes bugs — and why consistency matters
- How to store a Celsius value at the top level so a toggle can convert without re-fetching
- How to dynamically create and append buttons to the DOM using `createElement` and `appendChild`
- Why `config.js` is used instead of `.env` in plain HTML/JS projects without a build tool

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
| `fetch` + `.then().catch().finally()` | Fetching weather data from the API |
| Template literals | Building dynamic API URLs and display strings |
| `classList.add/remove` | Showing and hiding elements consistently |
| `createElement` + `appendChild` | Rendering history chips dynamically |
| `data.cod` check | Detecting city not found vs network error |
| CSS `@keyframes` | Animated loading spinner |
| `unshift` + `pop` | Maintaining a max-5 search history array |
| `config.js` + `.gitignore` | Keeping API key out of version control |