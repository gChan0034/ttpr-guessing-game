/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

/* 
NUMBER GUESSING GAME
Implement the missing code based on the comments
*/

// Generate random number between 1-100 (inclusive)
function generateWinningNumber() {
  // Return random integer
  const winningNumber = Math.floor(Math.random()*100+1)
  return winningNumber
}

// Shuffle array using Fisher-Yates algorithm
function shuffle(array) {
  // Modify array in place and return it

  for (i = array.length; i >= 0; i--){
    for (j = 0; j <= array.length; j++){
      array[i, j] = array[j, i]
    }
  }
}

class Game {
  constructor() {
    // Initialize properties:
    this.hintMax = 100
    this.hintMin = 1

    // - playersGuess (current guess)
    this.playersGuess = null

    // - pastGuesses (array of previous guesses)
    this.pastGuess = []

    // - winningNumber (generated number)
    this.winningNumber = generateWinningNumber()

  }

  // Return absolute difference between guess and winning number
  difference() {
    // Calculate and return difference
    const diff = Math.abs(this.playersGuess - this.winningNumber)
  }

  // Return true if guess is lower than winning number
  isLower() {
    // Return boolean comparison
    if(this.playersGuess < this.winningNumber)
      return true
    else
      return false
  }

  // Validate and process guess
  playersGuessSubmission(num) {
    // Throw error if invalid number
    if(num >= 0 || num < 100){
      alert("Out of range")
    }
    // Set playersGuess
    else{
      this.playersGuess = num
    }
    // Return checkGuess result
    this.checkGuess()

  }

  // Evaluate guess and return feedback message
  checkGuess() {
    if(i < 6){
    // Handle win condition
    // Handle duplicate guess


    // Add to pastGuesses

    }
    // Handle max guesses
    else
      alert("You have reached the max number of guesses.")
    // Return temperature feedback

  }

  // Generate array with 3 numbers (winning + 2 random)
  provideHint() {
    // Create array and shuffle
    const hintArray = [winningNumber]

    for (i = 1; i <= 3; i++){
      hintArray[i] = Math.floor(Math.random()*hintMax+hintMin)
    }
    

    for (i = 0; i <= hintArray.length; i++){
      if(hintArray[i] > hintArray[i-1]){
        hintMax = hintArray[i]
      }
      if(array[i] <  hintMin){
        hintMin = hintArray[i]
      }
    }


    shuffle(hintArray)

    return hintArray
  }
}

// DOM Setup - Implement event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initialize game state
  // Get DOM elements
  // Set up event handlers for:
  // - Submit guess
  
  // - Reset game

  // - Show hint
  provideHint()
  // Implement:
  // - Input validation
  // - Display updates
  // - Game state management
});
