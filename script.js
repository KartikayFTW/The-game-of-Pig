"use strict";

//selecting elements;
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--0");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
