# To-Do-List-React

A fully functional to-do list built with React

## What I Built

A task management app that lets you add, complete, edit, and delete tasks - with filtering and a live task counter. Built from scratch using React with no component libraries.

## Features

- Add tasks via button or Enter key
- Mark tasks as complete (strikethrough)
- Edit tasks inline
- Delete tasks
- Filter by All / Active / Completed
- Live count of remaining tasks
- Empty state when no tasks match

## Tech Stack

- React 19
- Vite
- CSS

## How to Run

```bash
npm install
npm run dev
```

## What I Learned

- How to structure a React app across multiple components
- How props flow down and events flow up
- Why state lives in the closest common parent (`App.jsx`)
- The difference between local state (`isEditing` in `TodoItem`) and shared state (`tasks` in `App`)
- Why React handles the DOM automatically — you update data, React updates the screen
