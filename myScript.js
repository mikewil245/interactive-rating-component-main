"use strict";
const numberButtons = document.querySelectorAll(".rate-number");
const sumbitButton = document.getElementById("submit-button");
const selectedNumber = document.getElementById("selected-number");

numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    // adds a click for each number/btn
    //onced click on one of the numbers..
    if (number === "hsl(25, 97%, 53%)") {
      // if my number is already highlighted orange then..
      number.style.backgroundColor = ""; // set it back to it's orignal bg color
      number.style.color = ""; // set it back to it's orignal txt color
    } else {
      // when clicking a new number and it's not highlighted orange then..
      //////////////////////////////////////////////////
      //resets all btns to its origanal color
      numberButtons.forEach((number) => {
        number.style.backgroundColor = "";
        number.style.color = "";
      });
      //////////////////////////////////////////////////
      //Gives new selected button the new BG and txt color
      number.style.backgroundColor = "hsl(25, 97%, 53%)"; // switches to the new number once clicked and changes the bg color
      number.style.color = "#ffffff"; // switches to the new number once clicked and changes the txt color
    }
  });
});

// Add click event listener to each number element
numberButtons.forEach((number) => {
  number.addEventListener("click", function () {
    // after i clicked it, it gets the selected number and store it in the selectedNumber variable.
    const selectedNumber = this.textContent;

    //from my html, i grabbed the id from special-number and updated its text number everytime i click it.
    document.getElementById("special-number").textContent /* originally 4*/ =
      selectedNumber; // changes when i click it
  });
});

sumbitButton.addEventListener("click", () => {
  document.querySelector(".rating-state-start").classList.add("hidden");
  document.querySelector(".rating-state-end").classList.remove("hidden");
});
