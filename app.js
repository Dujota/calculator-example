/* eslint-disable prefer-const */
/**
 * Flow:
 * have a firstNumber
 * choose an operator
 * then a secondNumber
 * wait for the operation to finish
 * display results
 *
 *
 * AKA intial State
 */

// I don't want to run my app, unless jquery has finished downloading
$(document).ready(function() {
  // Variables in the global runtime

  // Initial state below:
  let firstNumber = 0;
  let secondNumber = 0;
  let result = 0;
  let operator = '';
  let isOperatorChosen = false;
  let isCalculated = false;

  // 1.) Start my Calculator (initialization)
  // 2.) When someone hits clear, reset the calculator
  function initalizeCalculator() {
    // set up some initial state (data) --> so the user can go through our flow!!!
  }

  // Event handler functions
  $('.number').on('click', function(evt) {
    // check if we've already ran a calculation

    // check if an operation is chosen
    if (isOperatorChosen) {
      // if so, we should be rendering/showing the secondNumber
      // secondNumber

      // THIS keyword points to the element that was clicked, but it is a dom element so we
      // need to reselect it in order to use jquery methods again.
      console.log($(this).val());
    } else {
      // otherwise we render/show the first number
      // firstNumber
      console.log($(this).val());
    }
  });

  $('.operator').on('click', function(evt) {
    console.log(this);
  });

  $('.equal').on('click', function(evt) {
    console.log(this);
  });

  $('.clear').on('click', function(evt) {
    console.log(this);
  });
  // Run the app
  initalizeCalculator();
});
