// generating a random number between 1 and 20, including the start and the end values

let secretNumber = Math.floor(Math.random() * 20) + 1; 
let highScore = 0;
let score = 20;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

// Adding event listeners for the check button
document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value); 

// checking for validity od the input number
    if(guess < 1 || guess > 20){
        displayMessage( " 🚫Guessed Number should be within the range of 1 & 20.");
        return;
    } else if(guess === secretNumber){
        displayMessage( "🎉 Congratulations! Correct number.");
        document.querySelector(".number").textContent = secretNumber

        document.querySelector("body").style.backgroundColor = 'green';
        document.querySelector(".number").style.width = "30rem";

        //adding the blinking and success sound effect to the body
        document.querySelector("body").classList.add("animated", "blinking");
        const successSound = new Audio("success.mp3");
        successSound.play();
        
        setTimeout (() => {
            document.querySelector("body").classList.remove("animated", "blinking");
            document.querySelector("body").style.backgroundColor = "#222";
            document.querySelector(".number").style.width = "15rem";
        }, 4000); // removing the animation after 1 second

        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    

    } else if(guess !== secretNumber){
        if(score > 1)
        displayMessage(guess > secretNumber ? "🔺 Too high!" : "🔻Too low!");

        document.querySelector("body").style.backgroundColor = 'red';
        document.querySelector(".number").style.width = "30rem";

        //adding the blinking and beep sound effect to the body
        document.querySelector("body").classList.add("animated", "shake");
        const horrorBeep = new Audio("beep.mp3");
        horrorBeep.play();


        setTimeout(() => {
            document.querySelector("body").classList.remove("animated", "shake");
            document.querySelector("body").style.backgroundColor = "#222";
            document.querySelector(".number").style.width = "15rem";
        }, 1000); // removing the animation after 1 second

        score--;
        document.querySelector(".score").textContent = score;
    } else {
        displayMessage("❌You have lost the Game!");
        document.querySelector(".score").textContent = 0;

        
    }
});

// Try again functionalities

document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage("guess number ...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})