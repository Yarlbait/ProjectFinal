# Dice Game - COMP2132 Final Project

This project is a browser-based dice game developed for the final project of COMP2132 - Web Development at BCIT. The game pits the player against a computer in a simple game of chance, with three rounds of dice rolls and custom scoring rules.

## Game Description

- The player and the computer each roll two dice per round.
- There are three rounds in total.
- Scoring rules:
  - If either die shows a 1, the round score is 0.
  - If both dice show the same number (a pair), the round score is (die1 + die2) * 2.
  - Otherwise, the score is the sum of the two dice.
- After three rounds, the player with the highest total score wins.
- The game displays the round score, running total, and result after the final round.
- A reset button allows the game to restart.

## Folder Structure

finalProject/
├── index.html
├── css/
│ └── style.css # Compiled from style.scss
├── scss/
│ └── style.scss # SCSS source
├── js/
│ └── main.js # JavaScript game logic
├── img/
│ └── dice1.png to dice6.png
└── README.md

## Design

- Font: Roboto (imported from Google Fonts)
- Color Scheme: Red, Yellow, White
- Dice images are styled with borders and responsive layout
- The message area is centered between the player and computer dice visuals

## Getting Started

1. Clone or download this repository.
2. Make sure you have all six dice images (`dice1.png` to `dice6.png`) located in the `img/` folder.
3. Open `index.html` in a modern web browser.
4. Click the "Roll Dice" button to play. The game will automatically stop after three rounds.
5. Use the "Reset Game" button to restart the game at any time.

## Technologies Used

- HTML5
- SCSS (compiled to CSS)
- JavaScript
- Google Fonts

## Author

Earl Bate  
British Columbia Institute of Technology  
COMP2132 - Web Development  
Instructor: Johnny Zhang

## License

This project was created for academic purposes and is not licensed for commercial distribution.
