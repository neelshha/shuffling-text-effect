// Get the HTML element with the ID 'shuffling-heading' and store it in a variable
const heading = document.getElementById('shuffling-heading');

// Define the final text to display after shuffling
const finalText = "bruteforce";

// Set the duration (in milliseconds) for how long each letter shuffle lasts
const shuffleDuration = 100;

// Set the delay (in milliseconds) before revealing the next letter
const revealDelay = 500;

// Split the final text into an array of individual letters
const letters = finalText.split('');

// Create an array to hold the current state of letters, initialized with empty strings
const currentText = Array(finalText.length).fill('');

// Initialize a counter to track how many letters have been revealed
let revealedCount = 0;

// Function to shuffle the letters displayed in the heading
function shuffle() {
    // Generate a shuffled string by mapping over the letters array
    const shuffledText = letters.map((char, index) => {
        // If the letter has been revealed, keep it; otherwise, generate a random letter
        return currentText[index] || String.fromCharCode(Math.random() * 26 + 65).toLowerCase();
    }).join(''); // Join the shuffled letters back into a single string

    // Update the heading's inner text with the shuffled string
    heading.innerText = shuffledText;

    // Continue shuffling if not all letters have been revealed
    if (revealedCount < finalText.length) {
        // Call the shuffle function again after the specified duration
        setTimeout(shuffle, shuffleDuration);
    }
}

// Function to reveal letters of the final text one by one
function revealLetter() {
    // Check if there are still letters to reveal
    if (revealedCount < finalText.length) {
        // Set the next letter in the currentText array to the corresponding letter in finalText
        currentText[revealedCount] = finalText[revealedCount];
        
        // Update the heading's inner text with the current text state
        heading.innerText = currentText.join('');

        // Increment the revealedCount to move to the next letter
        revealedCount++;

        // Call the revealLetter function again after the specified delay
        setTimeout(revealLetter, revealDelay);
    }
}

// Start the shuffling process
shuffle();

// Start revealing letters after a delay calculated based on the shuffle duration
setTimeout(revealLetter, shuffleDuration * (finalText.length + 1));