# Movie Search

A cinematic movie search app built with React that lets users search for movies, view details, and track recently viewed titles.

## Features

- Real-time search with 400ms debounce, no request fired on every keystroke
- Movie grid with posters, titles, years and types
- Loading skeleton cards while fetching results
- Full movie details panel: plot, director, actors, rating, runtime, genre
- Recently viewed section, tracks last 4 clicked movies, no duplicates
- 3 distinct error states: no results, no internet, API error
- Dark cinematic theme inspired by Netflix
- Mobile responsive layout

## Tech Stack

- React 19
- Vite
- CSS
- OMDb API

## How to Run

```bash
npm install
npm run dev
```

Add a `.env` file in the root with your OMDb API key as 
```
VITE_API_KEY=your_omdb_api_key
```

## What I Learned

- How `useEffect` dependency arrays control when effects run and why cleanup functions matter
- How `AbortController` cancels stale fetch requests when the user types quickly
- Why two separate `useEffect` are needed for different fetch scenarios
- How to build reusable custom hooks: `useFetch`, `useDebounce`, `useLocalStorage`
- The difference between loading states for a list vs a single item

## Challenges

The infinite loop bug in the details `useEffect` was the hardest problem, `setSelectedMovie` triggered the effect again creating an endless fetch cycle. Fixed it by checking if `selectedMovie.Plot` already exists before fetching.