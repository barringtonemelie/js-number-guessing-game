//Spara variabler från DOM
const userGuess = document.getElementById("user-guess");
const button = document.getElementById("btn");
const feedback = document.querySelector(".feedback");
const refreshButton = document.querySelector(".refresh"); 
const list = document.querySelector(".previous-guesses-list"); 
button.addEventListener("click", runGame); 
refreshButton.addEventListener("click", refreshGame); 

const randomNumber = randomInteger(100); 
// console.log(randomNumber); 
let guessCounter = 0; 

function runGame () {
    const validation = userGuess.value; 
    if (Number.isNaN(validation) || validation < 0 || validation > 100 || validation === "") {
        feedback.innerHTML = `Please enter a whole number between 0 and 100.`;
        feedback.style.padding = '1rem'; 
    }
    else {
        guessCounter++; 
        if (guessCounter === 5) {
            const highOrLow = compareGuess(userGuess, randomNumber, true); 
            if (highOrLow === "You won!") {
                addGuess(userGuess, highOrLow); 
            }
            else {
                addGuess(userGuess, highOrLow); 
                feedback.innerHTML = `You've run out of guesses. <br> Press the button to play again!`;
                feedback.style.padding = '1rem'; 
                refreshButton.classList.toggle("refresh"); 
                button.remove(); 
            }
            
        }
        else if (guessCounter > 5) {
            feedback.innerHTML = `You've run out of guesses. <br> Press the button to play again!`;
            feedback.style.padding = '1rem'; 
        }
        else {
            const highOrLow = compareGuess(userGuess, randomNumber); 
            addGuess(userGuess, highOrLow); 
        }
    }
}

function refreshGame () {
    location.reload(); 
}

function randomInteger (max) {
    //max + 1 to include the maximun number as well 
    const num = Math.floor(Math.random() * (max + 1));
    return num;  
}

function compareGuess (userNum, randomNum, isLastGuess) {
    let result; 
    const user = Number(userNum.value);


    if (user === randomNum) {
        result = "You won!";
        feedback.innerHTML = `You won! Congratulations! <br> Press the button to play again.`;
        feedback.style.padding = '1rem'; 
        refreshButton.classList.toggle("refresh"); 
        button.remove();
    }
    else if (user > randomNum) {
        result = "Too high!"; 
        if (isLastGuess) {
            feedback.innerHTML = `You guessed ${user} which is too high.`;
            feedback.style.padding = '1rem'; 
        }
        else {
            feedback.innerHTML = `You guessed ${user} which is too high. <br> Try again...`;
            feedback.style.padding = '1rem'; 
        }
    }
    else {
        result = "Too low!";
        if (isLastGuess) {
            feedback.innerHTML = `You guessed ${user} which is too low.`;
            feedback.style.padding = '1rem'; 
        }
        else {
            feedback.innerHTML = `You guessed ${user} which is too low. <br> Try again...`;
            feedback.style.padding = '1rem'; 
        }
        
    }
    return result; 
}


function addGuess (guess, comparison) {
    list.innerHTML += `<li>You guessed ${guess.value}. ${comparison}</li>`;
}


