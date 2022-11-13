const computerChoice = document.getElementById('comp-choice')
const playerChoice = document.getElementById('player-choice')
const resultsDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let choice;
let compMove;
let result;


//for each click dispaly player choice
choices.forEach(choice => choice.addEventListener('click', (e) =>{
    choice = e.target.id
    playerChoice.innerHTML = choice
    console.log(choice)
    genCompMove()
    getResult()
}));


//random number computer move
function genCompMove(){
    const rndNmbr = Math.floor(Math.random() * 3)
    console.log(rndNmbr)
    if (rndNmbr === 0){
        compMove = 'Rock'
    }
    if (rndNmbr === 1){
        compMove = 'Papper'
    }
    if (rndNmbr === 2){
        compMove = 'Scissors'
    }
    computerChoice.innerHTML = compMove
}
//Compare Resualt
function getResult(){
    if (compMove === playerChoice){
        result = 'Draw';
    }
    else if (compMove === 'Rock' || playerChoice === 'Papper'){
        result = 'You lose...';
    }
    else if (compMove === 'Papper' || playerChoice === 'Scissors'){
        result = 'You win!';
    }
    else if (compMove === 'Scissors' || playerChoice === 'Rock'){
        result = 'You win!';
    }
    else if (compMove === 'Rock' || playerChoice === 'Papper'){
        result = 'You lose...';
    }    
    else {result = 'You lose...'}
    console.log(result)
    resultsDisplay.innerHTML = result
};