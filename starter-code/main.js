console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*if ((cardOne === cardTwo) || (cardThree === cardFour)) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
if (cardThree === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
*/
var createCards = function(){
var gameBoard = document.getElementById('game-board');
for(var i = 1; i <= 4; i++){
	//Create newCard as a Div
	var newCard = document.createElement('div')
	//Add Class of .card to the NewCard
	newCard.className = 'card';
	//Append card to the board
	gameBoard.appendChild(newCard);
	}
}

createCards();

