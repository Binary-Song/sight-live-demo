// Import everything from the sight-wasm module
import * as sight from "sight-wasm";

// Wait for the DOM to be fully loaded before accessing elements
window.addEventListener("DOMContentLoaded", () => {
  // Get reference to the input box by its id
  const inputBox = document.getElementById("user-input");
  // Get reference to the output box by its id
  const outputBox = document.getElementById("output-box");
  // Get reference to the button by its id
  const runBtn = document.getElementById("run-btn");

  // Add a click event listener to the button
  runBtn.addEventListener("click", () => {
    // Get the value entered by the user in the input box
    const userInput = inputBox.value;
    // Call the type_source function from sight-wasm with the user input
    const result = sight.type_source(userInput);
    // Display the result in the output box
    outputBox.textContent = result ?? "NOT WORKING";
  });
});