//DOM
var rollButton = document.getElementById("roll-button");
var dice1Element = document.getElementById("dice1");
var dice2Element = document.getElementById("dice2");
var resultElement = document.getElementById("result");

//Listeners roll dice button
rollButton.addEventListener("click", function ()
{
    //generate numbers
    var dice1= rollDie();
    var dice2= rollDie();

    //update images
    dice1Element.src = "img/dice" + dice1 + ".png";
    dice2Element.src = "img/dice" + dice2 + ".png";
    dice1Element.alt = "Dice showing" + dice1;
    dice2Element.alt = "Dice showing" + dice1;

    //results text
    if (dice1 > dice2)
    {
        resultElement.textContent = "Player 1 Wins!!!!";
    }
    else if (dice2 > dice1)
    {
        resultElement.textContent = "Player 2 Wins!!!!";
    }
    else 
    {
        resultElement.textContent = "It's a Draw!!!!";
    }
});

//Roll die (number between 1 and 6)
function rollDie()
{
    return Math.floor(Math.random() * 6) + 1;
}