# Registration-Form

A mockup registration form built with React that collects user details including name, last name, password, age, and country, then displays a success card upon valid submission.

## Features

- 7 controlled form fields managed with a single `useState` object
- Field validation on blur. Errors appear when you leave a field, not while typing
- Password strength meter (Weak / Medium / Strong) with color indicators
- Submit button disabled until all fields are valid
- Success card displayed on valid submission with name and email summary

## Tech Stack

- React 19
- Vite
- CSS (custom light theme)

## How to Run

```bash
npm install
npm run dev
```

## What I Learned

- How to manage multiple form fields with a single `useState` object instead of separate state for each field
- How to validate different fields and compare them, including comparing `confirmPassword` against `password`
- Why validation fires `onBlur` (when leaving a field) instead of `onChange` (every keystroke), better UX, no errors shown before the user has a chance to type
- How to use `Object.values().every()` to check if all fields are valid before enabling the submit button

## Challenges

Understanding `onBlur` was the trickiest part. Knowing when it fires vs `onChange` and why that distinction matters for form UX.
