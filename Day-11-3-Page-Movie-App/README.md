# Movie Search - React Router

A refactored version of the Movie Search app rebuilt with React Router, adding client-side routing, persistent search history, and a multi-page architecture. Users can browse featured movies, search by title, and view full movie details, all without a page reload.

## Features

- 3-page architecture: Home, Search, and Movie Detail
- Client-side routing with React Router, no full page reloads
- Navbar with NavLink, active route is visually highlighted
- Home page fetches featured movies on load
- Search page with 400ms debounce, no request fired on every keystroke
- Search results persist when navigating back using sessionStorage
- Movie detail page reads IMDb ID from URL with useParams
- Back button uses navigate(-1) to return to previous page
- 404 page for invalid routes
- Browser tab title updates on every route change
- Loading skeletons on both search results and movie details
- 3 error states: no results, no internet, API error

## Tech Stack

- React 19
- React Router v6
- Vite
- CSS
- OMDb API

## How to Run

```bash
npm install
npm run dev
```

Add a `.env` file in the root with:
```
VITE_API_KEY=your_omdb_api_key
```

## What I Learned

- How React Router replaces manual state-based navigation with URL-driven routing
- Why useParams is cleaner than passing movie IDs through props or state
- How sessionStorage preserves page state across navigation without a backend
- The difference between Link and NavLink and when to use each
- How to split a monolithic App.jsx into focused page components, each owning their own state and fetch logic
- Why document.title updates matter for UX and browser history

## Challenges

The hardest part was understanding how routing replaces state-based navigation. In the previous version, clicking a movie set sidePanel to true and showed MovieDetails inline. With React Router, clicking a movie navigates to a new URL and MovieDetailPage fetches its own data using useParams. Making that mental shift from showing and hiding components to navigating to a new page was the key insight of this project.