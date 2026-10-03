# Quick Quiz 🐱

A short cat trivia quiz built with HTML, CSS, and JavaScript.

## Features

- Multiple-choice questions shown in random order
- Progress bar and question counter
- Live score tracking (+10 points per correct answer)
- Green/red feedback after each answer
- Save your name and score at the end
- High Scores page showing the top 5 players, stored in the browser with `localStorage`

## Built With

- **HTML** for the page structure
- **CSS** for styling (flexbox layout, hover effects, progress bar)
- **JavaScript** for the game logic, DOM manipulation, and `localStorage`

## How to Run

1. Clone the repository:
```
   git clone https://github.com/malaikxa/quiz-website.git
```
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.

> Note: the links use root paths (like `/game.html`), so run it with Live Server rather than opening the file directly.

## Project Structure

| File | Purpose |
|------|---------|
| `index.html` | Home page |
| `game.html`, `game.js`, `game.css` | The quiz itself |
| `end.html`, `end.js` | Final score and save-name form |
| `highscores.html`, `highscores.js`, `highscores.css` | High scores list |
| `app.css` | Shared styles |
| `Questions.json` | Quiz question data |

## What I Learned

- Working with the DOM and event listeners
- Saving and reading data with `localStorage`
- Building a multi-page site with shared CSS
- Using Git and GitHub

## Future Improvements

- Add more questions and categories
- Load questions from `Questions.json`
- Add a timer for each question
- Make the site work on GitHub Pages

## Author

Malaika Afzal ([@malaikxa](https://github.com/malaikxa))
