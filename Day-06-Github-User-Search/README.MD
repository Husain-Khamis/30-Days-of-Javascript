# GitHub Developer Card

A vanilla JavaScript app that searches any GitHub username and generates a developer card showing their profile and top repositories.

---

## Features

- **Profile Card** - Displays avatar, username, bio, and follower count
- **Most Starred Repo** - Finds and links the user's highest starred repository
- **Most Forked Repo** - Finds and links the user's most forked repository
- **Last Updated Repo** - Finds and links the most recently pushed repository
- **Error Handling** - Covers empty input, invalid usernames, and API rate limiting
- **GitHub Theme** - Dark UI inspired by GitHub's color scheme

---

## How to Run

1. Clone or download the project
2. Open `index.html` in your browser
3. No installation or setup required - pure HTML, CSS, and JavaScript

---

## What I Learned

- How to make sequential API calls using `async/await` and `try/catch`
- How `reduce()` finds a single best value from an array of objects
- How to check `res.ok` and `res.status` to handle different API error types
- Why `onclick` is safer than `addEventListener` when re-assigning handlers
- How to manage UI state (show/hide) across multiple search interactions

---

## Tech Stack

- HTML
- CSS (Flexbox)
- Vanilla JavaScript (no frameworks)
- GitHub REST API (no key required)

---

## Concepts Practiced

| Concept | Used For |
|---|---|
| `async/await` | Fetching user and repo data sequentially |
| `Array.reduce()` | Finding most starred, forked, and recently pushed repos |
| `res.ok` / `res.status` | Handling 404 and 403 API responses |
| `classList` | Showing and hiding card and error states |
| CSS Flexbox | Card and search bar layout |
| GitHub REST API | Fetching public user and repo data |# GitHub Developer Card
