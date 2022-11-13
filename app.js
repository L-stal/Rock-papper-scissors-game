const computerChoice = document.getElementById('comp-choice')
const playerChoice = document.getElementById('player-choice')
const resultsDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let choice;
let compMove;
let result;


//for each click dispaly player choice
choices.forEach(pChoice => pChoice.addEventListener('click', (e) =>{
    choice = e.target.id
    playerChoice.innerHTML = choice;
    genCompMove();
    getResult();
}));


//random number computer move
function genCompMove(){
    const rndNmbr = Math.floor(Math.random() * 3) 
    if (rndNmbr === 0){
        compMove = "Rock";
    }
    if (rndNmbr === 1){
        compMove = "Paper";
    }
    if (rndNmbr === 2){
        compMove = "Scissors";
    }
    console.log(compMove)
    computerChoice.innerHTML =compMove
};
//Compare Resualt
function getResult(){
    if (compMove === 'Rock' && choice === "Paper"){
        result = 'You win!';
    }
    if (compMove === 'Paper' && choice === "Scissors"){
        result = 'You win!';
    }
    if (compMove === 'Scissors' && choice === "Rock"){
        result = 'You win!';
    }
    if (compMove === 'Paper' && choice === "Rock"){
        result = 'You lose...';
    } 
     if (compMove === 'Scissors' && choice === "Paper"){
        result = 'You lose...';
    } 
    if (compMove === 'Rock' && choice === "Scissors") {
        result = 'You lose...';
    } 
    if (compMove === choice){
        result = 'Its a Draw';
    }
    console.log(choice)
    
    resultsDisplay.innerHTML = result;
    console.log(result)
    
};
/* function getResult() {
    result = compMove == playerChoice ? "Draw"
        : compMove == "Rock" && playerChoice == "Paper" ? "You win..."
            : compMove == "Paper" && playerChoice == "Scissors" ? "You win!"
                : compMove == "Scissors" && playerChoice == "Rock" ? "You win!"
                    : compMove == "Paper" && playerChoice == "Rock" ? "You lose..."
                        : compMove == "Scissors" && playerChoice == "Paper" ? "You lose..."
                            : "You lose...";

    resultsDisplay.innerHTML = result;
    console.log(result); 
}*/