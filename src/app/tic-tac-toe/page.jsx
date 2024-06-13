"use client";

import React, { useState } from "react";

import Square from "./square/page";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  function checkWinner() {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  }
  const isWinner = checkWinner();
  console.log("hello", isWinner);
  function handleClicked(index) {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  }

  function handleReset() {
    setState(Array(9).fill(null));
  }
  return (
    <div className="ml-10">
      {isWinner ? (
        <>
          {isWinner} won the game
          <button
            onClick={handleReset}
            className="border-2 p-2 rounded-lg bg-slate-700 text-white ml-4"
          >
            play again
          </button>
        </>
      ) : (
        <>
          <h1 className="text-5xl font-extrabold text-center ">Tic Tac Toe</h1>
          <div className=" flex justify-evenly items-center ">
            <Square onClick={() => handleClicked(0)} value={state[0]} />
            <Square
              value={state[1]}
              onClick={() => {
                handleClicked(1);
              }}
            />
            <Square
              value={state[2]}
              onClick={() => {
                handleClicked(2);
              }}
            />
          </div>
          <div className=" flex  justify-evenly items-center  ">
            <Square
              value={state[3]}
              onClick={() => {
                handleClicked(3);
              }}
            />
            <Square
              value={state[4]}
              onClick={() => {
                handleClicked(4);
              }}
            />
            <Square
              value={state[5]}
              onClick={() => {
                handleClicked(5);
              }}
            />
          </div>
          <div className=" flex  justify-evenly items-center">
            <Square
              value={state[6]}
              onClick={() => {
                handleClicked(6);
              }}
            />
            <Square
              onClick={() => {
                handleClicked(7);
              }}
              value={state[7]}
            />
            <Square
              value={state[8]}
              onClick={() => {
                handleClicked(8);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
