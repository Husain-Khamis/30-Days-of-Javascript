# Day 1 — Tip Calculator

## What it does
Calculates the tip amount, total bill, bill per person, and tip per person based on the bill amount, number of people, and tip percentage selected.

## Features
- Real-time calculation — updates on every keystroke
- Custom tip percentage input
- Input validation — handles negative numbers, zero people, and non-numeric inputs
- Error messages for invalid inputs
- Reset button with fade transition
- Dark theme UI

## What I learned
- JavaScript basics — variables, functions, conditionals
- How to fetch DOM elements from HTML using `querySelector`
- How to read and update DOM elements from JavaScript using `.value` and `.textContent`
- Event listeners — `input` and `click` events
- Showing and hiding elements with `style.display`
- Basic CSS flexbox layout

## Hardest part
CSS — getting the layout centered and consistent across all elements took longer than expected. Learned that `display: inline` ignores width, and that inline styles in HTML override CSS files.

## Tech
- HTML
- CSS
- Vanilla JavaScript

## Test Cases
| Input | Expected Output |
|-------|----------------|
| Bill $100, 15% tip, 2 people | Tip/person $7.50 · Total/person $57.50 |
| Bill $0, any tip | Shows $0.00 |
| 0 people | Error: cannot be zero |
| Negative bill | Error: negative numbers not allowed |
| Non-numeric input | Error: only numbers allowed |
| Custom 25%, bill $80, 4 people | Tip/person $5.00 · Total/person $25.00 |
| Reset | Clears all fields and results |