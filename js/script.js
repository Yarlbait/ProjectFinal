//Score and round count
var playerScore = 0;
var computerScore = 0;
var round = 0;
var maxRounds =3 ;

//Html elements
var playerDice = document.getElementById("player-dice");
var computerDice = document.getElementById("computer-dice");
var messageDisplay = document.getElementById("message");
var totalScoreDisplay = document.getElementById("total-score");
var rollButton = document.getElementById("roll-button");
var resetButton = document.getElementById("reset-button");

//Random number from 1-6
function rollDie()
{
    return Math.floor(Math.random() * 6) + 1;
}

//Score based on dice values
function calculateScore(die1, die2)
{
  if (die1 === 1 || die2 === 1) 
    {
    return 0; //  rolling 1  is 0 pts
  } 
  else if (die1 === die2) 
    {
    return (die1 + die2) * 2; // Doubles get points doubled
  } 
  else 
    {
    return die1 + die2; // sum of dice if none of the other conditions
  }
}

//display dice images for values
function updateDiceImages(die1, die2, container) 
{
  container.innerHTML = ""; // Clear previous dice

  var img1 = document.createElement("img");
  var img2 = document.createElement("img");

  img1.src = `img/dice${die1}.png`;
  img2.src = `img/dice${die2}.png`;
  img1.alt = `Dice showing ${die1}`;
  img2.alt = `Dice showing ${die2}`;
  img1.classList.add("dice-img");
  img2.classList.add("dice-img");
  container.appendChild(img1);
  container.appendChild(img2);
}

//Round of game
function playRound()
{
    if (round >= maxRounds) return;

    //dice for player and CPU
    var playerDie1 = rollDie();
    var playerDie2 = rollDie();
    var computerDie1 = rollDie();
    var computerDie2 = rollDie();

    //calculate round scores
    var playerRoundScore = calculateScore(playerDie1, playerDie2);
    var computerRoundScore = calculateScore(computerDie1, computerDie2);

    //update total scores
    playerScore += playerRoundScore;
    computerScore += computerRoundScore;

    //update dice immages
    updateDiceImages(playerDie1, playerDie2, playerDice);
    updateDiceImages(computerDie1, computerDie2, computerDice);

    //round message
    var roundMessage = `Round ${round + 1}: Player scored ${playerRoundScore}, CPU scored ${computerRoundScore}`;

    round++;

    //after 3 rounds declare winner
    if(round === maxRounds)
    {
        var result = "";

        if (playerScore > computerScore)
        {
            result = "You win the game!";
        }
        else if (computerScore > playerScore)
        {
            result = "CPU wins the game!"
        }
        else
        {
            result = "It's a draw!";
        }

        roundMessage += `<br><strong>Final Result: </strong> ${result}`;
        rollButton.disabled = true; //disable future rolls
    }

    messageDisplay.innerHTML = roundMessage;
    totalScoreDisplay.textContent = `Total Score - Player: ${playerScore} | CPU: ${computerScore}`;
}

//reset game
function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    round = 0;
    rollButton.disabled = false;

    playerDice.innerHTML = "";
    computerDice.innerHTML = "";

    messageDisplay.textContent = "Roll the dice to begin!";
    totalScoreDisplay.textContent = "Total Score - Player: 0 | CPU: 0";
}

rollButton.addEventListener("click", playRound);
resetButton.addEventListener("click", resetGame);

resetGame();