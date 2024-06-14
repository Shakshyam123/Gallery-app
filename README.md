## Table of Contents

- [About](#about)
- [Features](#features)
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Usage](#Usage)
- [ GameLogic](#gamelogic)
- [Contributing](#contributing)

# About

This is a simple Tic Tac Toe game implemented in JavaScript, HTML, and CSS. The game allows two players to take turns and play Tic Tac Toe on a 3x3 grid. The first player to align three marks in a row, column, or diagonal wins the game.

## Features

- Two-player gameplay
- Interactive 3x3 grid
- Highlight winning combination
- Reset button to start a new game

## Screenshot

![Screenshot](./images/tic tac toe.png)

### Prerequisites

You will need a modern web browser to run this game.

## Installation

Step-by-step instructions on how to get the development environment running.

```bash
git clone https://github.com/Shakshyam123/tic-tac-toe.git
cd Shakshyam-tic-tac-toe
yarn install
yarn dev
```

## Usage

1. Open the game in your web browser.
2. Player 1 (X) and Player 2 (O) take turns clicking on the empty cells of the grid.
3. The game automatically checks for a win or a draw after each move.
4. The game highlights the winning combination if there is a winner.
5. Click the "Reset" button to start a new game.

## Game Logic

The game logic checks for the following winning combinations:

- Horizontal rows
- Vertical columns
- Diagonal lines

The function `checkWinner(state, winnerLogic)` iterates through the predefined winning combinations and determines if there is a winner.

## Contributing

If you would like to contribute to the project, please fork the repository and submit a pull request. We appreciate any contributions!
