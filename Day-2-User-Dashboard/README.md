# User List Dashboard

A vanilla JavaScript dashboard that displays 12 hardcoded users as interactive cards. Users can be filtered, sorted, and summarized through a live stats bar — all without any frameworks or libraries.

---

## Features

- **Card Grid** — Each user is displayed in a styled card showing their name, role, age, country, and active status
- **Filter by Role** — Dropdown to filter users by `admin`, `user`, or `guest`
- **Filter by Active Status** — Checkbox to show only active users
- **Filter by Country** — Text search that matches any part of a country name (case-insensitive)
- **Sort** — Sort users by name (A-Z, Z-A) or age (ascending, descending)
- **Stats Bar** — Displays total users, active count, and average age — updates on every filter change
- **Empty State** — Shows a friendly message when no users match the current filters

---

## How to Run

1. Clone or download the project
2. Open `index.html` in your browser
3. No installation or setup required — it's pure HTML, CSS, and JavaScript

---

## What I Learned

- How to render an array of objects dynamically using the DOM
- How `filter()` creates a new array without modifying the original
- How to chain array methods: `filter()` → `sort()` → `renderCards()`
- How `reduce()` calculates a running total (used for average age)
- How `sort()` works with a compare function for both numbers and strings
- The difference between `id` (unique) and `class` (reusable) in HTML
- How to use the ternary operator for conditional display (`✅` / `❌`)
- Why the original data array should never be mutated when filtering

---

## Tech Stack

- HTML
- CSS (Grid, Flexbox)
- Vanilla JavaScript (no frameworks)

---

## Concepts Practiced

| Concept | Used For |
|---|---|
| `Array.filter()` | Filtering users by role, active status, country |
| `Array.sort()` | Sorting by name and age |
| `Array.reduce()` | Calculating total and average age |
| `addEventListener` | Reacting to filter and sort changes |
| CSS Grid | Card layout |
| CSS Flexbox | Filter bar and stats bar layout |
| Ternary operator | Active status indicator |