let playerScore = 0;
let computerScore = 0;
let userInput = "0";

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

const resetOutcomeText = function () {
  document.getElementById("outcomeText").innerHTML = "Rock, Paper, Scissors?";
};

const resetScore = function () {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").innerHTML =
    "Player Score: " + playerScore;
  document.getElementById("computerScore").innerHTML =
    "Computer Score: " + computerScore;
};

const getPlayerChoice = function (choice) {
  userInput = choice;
  playRound();
};

const getComputerChoice = function () {
  return getRandomValue();
};

const getRandomValue = function () {
  const randomValue = Math.random();
  if (randomValue < 0.33333) {
    return "rock";
  } else if (randomValue < 0.66666) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = function () {
  const computerChoice = getComputerChoice();

  if (userInput === "rock" && computerChoice === "paper") {
    computerScore += 1;
    document.getElementById("computerScore").innerHTML =
      "Computer Score: " + computerScore;
    changeBackgroundColor("#FFB6C1");
    document.getElementById("choicesBar").innerHTML =
      "Player chooses rock, computer chooses paper. Computer wins!";
    document.getElementById("outcomeText").innerHTML = "Rock, Paper, Scissors?";
  } else if (userInput === "rock" && computerChoice === "scissors") {
    playerScore += 1;
    document.getElementById("playerScore").innerHTML =
      "Player Score: " + playerScore;
    changeBackgroundColor("#90EE90");
    document.getElementById("choicesBar").innerHTML =
      "Player chooses rock, computer chooses scissors. Player wins!";
    document.getElementById("outcomeText").innerHTML = "Rock, Paper, Scissors?";
  } else if (userInput === "paper" && computerChoice === "rock") {
    playerScore += 1;
    document.getElementById("playerScore").innerHTML =
      "Player Score: " + playerScore;
    changeBackgroundColor("#90EE90");
    document.getElementById("choicesBar").innerHTML =
      "Player chooses paper, computer chooses rock. Player wins!";
    document.getElementById("outcomeText").innerHTML = "Rock, Paper, Scissors?";
  } else if (userInput === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    document.getElementById("computerScore").innerHTML =
      "Computer Score: " + computerScore;
    changeBackgroundColor("#FFB6C1");
    document.getElementById("choicesBar").innerHTML =
      "Player chooses paper, computer chooses scissors. Computer wins!";
    document.getElementById("outcomeText").innerHTML = "Rock, Paper, Scissors?";
  } else if (userInput === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    document.getElementById("computerScore").innerHTML =
      "Computer Score: " + computerScore;
    changeBackgroundColor("#FFB6C1");
    document.getElementById("choicesBar").innerHTML =
      "Player chooses scissors, computer chooses rock. Computer wins!";
    document.getElementById("outcomeText").innerHTML = "Rock, Paper, Scissors?";
  } else if (userInput === "scissors" && computerChoice === "paper") {
    playerScore += 1;
    document.getElementById("playerScore").innerHTML =
      "Player Score: " + playerScore;
    changeBackgroundColor("#90EE90");
    document.getElementById("choicesBar").innerHTML =
      "Player chooses scissors, computer chooses paper. Player wins!";
    document.getElementById("outcomeText").innerHTML = "Rock, Paper, Scissors?";
  } else if (userInput === computerChoice) {
    document.getElementById("outcomeText").innerHTML = "Rock, Paper, Scissors?";
    changeBackgroundColor("#FFFFE0");
    document.getElementById("choicesBar").innerHTML = "TIE";
  }
  if (playerScore === 5) {
    document.getElementById("outcomeText").innerHTML = "Game over, You win!";
    setTimeout(resetOutcomeText, 5000);
    setTimeout(changeBackgroundColor("white"), 7000);
    resetScore();
    document.getElementById("choicesBar").innerHTML = "";
  } else if (computerScore === 5) {
    document.getElementById("outcomeText").innerHTML = "Game over, you lose!";
    setTimeout(resetOutcomeText, 5000);
    setTimeout(changeBackgroundColor("white"), 7000);
    resetScore();
    document.getElementById("choicesBar").innerHTML = "";
  }
};

document.getElementById("playerScore").innerHTML =
  "Player Score: " + playerScore;

document.getElementById("computerScore").innerHTML =
  "Computer Score: " + computerScore;

// ABILITY TO ENABLE/DISABLE BUTTON JUST IN CASE I WANT TO ADD DELAY -
// IN BUTTON CLICKABILITY IF I DECIDED TO ADD PLAYER/AI CHOICE IMAGE FOR A FEW SECONDS

// const buttons = document.querySelectorAll("button");

// const disableButton = function () {
//   buttons.forEach((button) => {
//     button.disabled = true;
//   });
// };

// const enableButton = function () {
//   buttons.forEach((button) => {
//     button.disabled = false;
//   });
// };
