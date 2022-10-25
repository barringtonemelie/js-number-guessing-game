//Spara variabler från DOM
const userGuess = document.querySelector(".user-guess"); 


//Generera random nummer funktion

function randomInteger (max) {
    //max + 1 to include the maximun number as well 
    const num = Math.floor(Math.random() * (max + 1));
    return num;  
}

console.log(randomInteger(100)); 

//Jämför användarens gissning med random-numret, returnera true or false - funktion

function compareGuess (userNum, randomNum) {
    // true = user won, false = user lost

    //TO DO: Jämför om numret var lägre eller högre
    let result; 
    if (userNum === randomNum) {
        result = true; 
    }
    else {
        result = false; 
    }
    return result; 
}

//Ta emot true or false från jämförelsen, skriv ut resultat - skicka resultat till nästa funktion

function printResult (userWon) {
    //TO DO: Printa i html
    if (userWon) {
        console.log("Congrats! You won!"); 
    }
    else {
        console.log("You lost. Try again!"); 
    }
}

//Printa ut tidigare gissningar 

//Funktion som körs när användaren klickar