"use strict";
// https://codepen.io/lalwanivikas/pen/eZxjqo
//Select all elements from the DOM

const numbers = document.querySelectorAll(".number"); // number buttons
const operators = document.querySelectorAll(".operator"); // operator buttons
const equalTo = document.querySelector("#equalTo"); // equal button
const clear = document.querySelector("#clear"); //clear button
const resultDisplay = false;
const display = document.querySelector(".display");

// const keyOperators = document.querySelectorAll(".operator");
// const keyDot = document.querySelector("#dot");
// const division = document.querySelector("#division");
// const keyPlus = document.querySelector("#plus");
// const keyMinus = document.querySelector("#minus");
// const keyTimes = document.querySelector("#times");

// adding click handlers to number buttons

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (e) {
    let currentString = numbers[i].innerHTML;
    let lastCharacter = currentString[currentString.length - 1];
    console.log(currentString);

    if (resultDisplay === false) {
      display.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplay === true && lastCharacter === "+") ||
      lastCharacter === "-" ||
      lastCharacter === "x" ||
      lastCharacter === "%"
    ) {
      resultDisplay = false;
      display.innerHTML += e.target.innerHTML;
    } else {
      resultDisplay = false;
      display.innerHTML = "";
      display.innerHTML += e.target.innerHTML;
    }
  });
}

//adding click handlers to number buttons
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function (e) {
    let currentString = display.innerHTML;
    let lastCharacter = currentString[currentString.length - 1];
    // console.log(currentString);

    if (
      lastCharacter === "+" ||
      lastCharacter === "-" ||
      lastCharacter === "x" ||
      lastCharacter === "%"
    ) {
      let newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      display.innerHTML = newString;
    } else if (currentString.length == 0) {
      console.log("enter a number first");
    } else {
      display.innerHTML += e.target.innerHTML;
    }
  });
}

// on click of equal button

equalTo.addEventListener("click", function () {
  //this is the string that will be processing
  let inputString = input.innerHTML;

  let numbers = inputString.split(/\+|\-|\x|\%/g);

  let operators = inputString.replace(/[0-9]|\./g, "").split("");
  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");
});
