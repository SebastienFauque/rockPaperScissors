let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  if (letter === 's') return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} beats ${convertToWord(computerChoice)}${(smallCompWord)} you win.`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 333);
}


function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} loses to ${convertToWord(computerChoice)}${(smallCompWord)} you lose.`;
  console.log('YOU LOST THIS ONE', computerScore);
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 333);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} draws ${convertToWord(computerChoice)}${(smallCompWord)} you tie.`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 333);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("user choice => " + userChoice);
  console.log("computer choice => " + computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}



function main(){
  rock_div.addEventListener('click', function() {
    console.log("u click rok" )
    game("r");
  })
  paper_div.addEventListener('click', function() {
    console.log("u click papr" )
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    console.log("u click skis" )
    game("s");
  })
}

main();

//bugs
//SOLVED = user: s comp: r //doesn't update comp score, no error msg // doesn't run all the code in the lose function, doesn't print the message// SOLUTION: update lose condition switch case with lose outcomes
//SOLVED = user: s comp: s //typeError //potential solutions: remove emoji= DID NOT FIX // potential: fix id tag in html file to be computer-score on line 16
//SOLVED = user: s comp: s // referenceError user is not defined line 61
//SOLVED = user: s comp: p // reference error: user is not defined line 37
//SOLVED = user: s comp: p // typeError : convertToWord is not a function line 30 // SOLUTION: }${ in between convertToWord and smallUserWord/smallCompWord
//SOLVED user: s comp: s // ^ditto line 54

//wants
// once numbers get high, modify the scoreboard to not overlap the score