var game = {
    player1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    
    player2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

currentPlayer = game.player1

function switchPlayer() {
   if(currentPlayer === game.player1) {
       currentPlayer = game.player2
   } else {
       currentPlayer = game.player1
   }
}

function shuffleCards() {
    for (var i = cards.length - 1; i > 0; i--) {
      // Generate a random index
      var randomIndex = Math.floor(Math.random() * (i + 1));
      // Swap the card at the current index with the card at the random index
      var tempCard = cards[i];
      cards[i] = cards[randomIndex];
      cards[randomIndex] = tempCard;
    }
  }

var cardOne = $('#cardOne')
var cardTwo = $('#cardTwo')

cardOne.on('click', function() {

}

cardTwo.on('click', function() {
    
}

function winner() {

}