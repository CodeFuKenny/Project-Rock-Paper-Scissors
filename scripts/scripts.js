var pscore;
var cscore;

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function computerPlay() {
    let x = getRandomInt(0,2)
    if (x == 0){
        return "Rock"
    }
    else if (x == 1){
        return "Paper";
    }
    else{
        return "Scissors"
    }
}

function playRound(ps,cs){
    let win = "You Chose " + ps +"\n" + "You Win! " + ps + " beats " + cs + "!";
    let lose = "You Chose " + ps + "\n"+"You Lose! " + cs + " beats " + ps + "!";
    let tie = "This is a tie, you both chose " + ps;
    if ((ps == "Rock" && cs == "Paper") || 
        (ps == "Paper" && cs == "Scissors") ||
        (ps == "Scissors" && cs == "Rock")){
        cscore++
        return lose
    }
    else if (ps == cs){
        return tie;
    }
    else {
        pscore++;
        return win;
    }
}

function game(){
    pscore = 0;
    cscore = 0;
    let i;
    for (i = 0 ; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        result = playRound(playerSelection,computerSelection)
        console.log(result);
    } 
    if( pscore > cscore) {
        console.log("Congratulations, you win! \n")
        console.log("The final score is: " + pscore + " - " + cscore + ".")
    }
    else if (pscorre == cscore) {
        console.log("It is a tie. \n")
        console.log("The final score is: " + pscore + " - " + cscore + ".")
    }
    else {
        console.log("You lost.")
        console.log("The final score is: " + pscore + " - " + cscore + ".")
    }
}
game();


