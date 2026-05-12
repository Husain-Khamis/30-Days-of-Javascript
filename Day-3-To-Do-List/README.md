# My To-Do List

A vanilla JavaScript to-do app with drag-to-reorder, inline editing, filtering, and localStorage persistence - built with no frameworks or libraries.

---

## Features

- **Add Tasks** - Submit via button or Enter key, empty input is rejected with an error message
- **Complete Tasks** - Checkbox toggles a task between Active and Completed, with visual feedback
- **Edit Tasks** - Inline prompt to rename any task without leaving the page
- **Delete Tasks** - Remove individual tasks instantly
- **Clear Completed** - Remove all completed tasks in one click
- **Filter** - Radio buttons to view All, Active, or Completed tasks
- **Task Count** - Live counter showing how many tasks remain active
- **Drag to Reorder** - HTML5 drag-and-drop to rearrange tasks
- **Persistence** - Tasks saved to localStorage and restored on page refresh

---

## How to Run

1. Clone or download the project
2. Open `index.html` in your browser
3. No installation or setup required - pure HTML, CSS, and JavaScript

---

## What I Learned

- How to dynamically create and render DOM elements from an array of objects
- How `filter()` and `map()` work without mutating the original array
- How to use `localStorage` to persist data across page refreshes
- How the HTML5 Drag and Drop API works with `dragstart`, `dragover`, and `drop` events
- How to swap array items by index to reorder tasks after a drag
- Why re-rendering from a single source of truth keeps the UI in sync

---

## Tech Stack

- HTML
- CSS (Flexbox)
- Vanilla JavaScript (no frameworks)

---

## Concepts Practiced

| Concept | Used For |
|---|---|
| `Array.filter()` | Filtering tasks by status, deleting, clearing completed |
| `Array.map()` | Toggling status and editing task names |
| `localStorage` | Persisting tasks across page refreshes |
| DOM manipulation | Dynamically rendering task cards |
| HTML5 Drag & Drop | Reordering tasks by dragging |
| `Date.now()` | Generating unique IDs for each task |