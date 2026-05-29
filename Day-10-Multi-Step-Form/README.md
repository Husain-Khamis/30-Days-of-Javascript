# Multi-Step Registration Form

A multi-step account registration form built with React. Users fill in their personal info, account details, and interests across 4 steps. On submission, a mock API call fires and displays a personalised success message.

## Features

- Input validation on blur for email, password, and age
- Progress bar that shows the current step as a percentage
- Back buttons that return to previous steps but keep the data entered
- Interests displayed as buttons so they can be selected and unselected easily
- Success screen shows a welcome message for the user
- Responsive and minimal design

## Tech Stack

- React 19
- Vite
- CSS

## How to Run

npm install
npm run dev

## What I Learned

- To update state in a parent from a child, you need to pass down a prop
- State should live in the closest common ancestor of all components that need it
- Spreading `...formData` lets you update one field without losing the other fields unchanged
- How onChange handlers flow between parent and child components

## Challenges

Responsiveness was the trickiest part, making the form look good across different screen sizes without breaking the layout on mobile.