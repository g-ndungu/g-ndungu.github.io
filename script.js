// Path: script.js

// There are lots of different ways to get elements 
// from the 'DOM' (Document Object Model) in JavaScript.
const body = document.querySelector("body");
const paragraph = document.getElementById("paragraph");
const header = document.getElementsByTagName("h1")[0];
const button = document.querySelector("button");
const input = document.getElementsByClassName("input")[0];

let bodyPink = true;

// We can add whats called an 'event listener' to an element.
// We then define a function that is called when the event happens.
// In this case we listen for a click on the button and then run a function
// This function can modify the html and css values of the elements
button.addEventListener("click", () => {
  if (bodyPink) {
    body.style.backgroundColor = "#c6cd13";
    paragraph.style.color = "#ff00bb";
    bodyPink = false;
  } else {
    body.style.backgroundColor = "#ff00bb";
    paragraph.style.color = "#c6cd13";
    bodyPink = true;
  }

  if (input.value !== "") {
    header.textContent = input.value;
  }
  
});
