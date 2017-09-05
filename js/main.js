var game = {
    player1: {cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    
    player2: {cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    }

// var cards = [ 
//     { src : 'cards/1.gif', value: 1 },
//     { src : 'cards/2.gif', value: 2 },
//     { src : 'cards/3.gif', value: 3 },
//     { src : 'cards/4.gif', value: 4 }
// ]
// var player1 = game.player1

// var player2 = game.player2

var cardInPlay1 = game.player1.cards.pop()

var cardInPlay2 = game.player2.cards.pop()

currentPlayer = game.player1

function switchPlayer() {
   if(currentPlayer === game.player1) {
       currentPlayer = game.player2
   } else {
       currentPlayer = game.player1
   }
}

function shuffleCards() {
    for (var i = game.player1.cards.length - 1; i > 0; i--) {
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
var winner = $('#winner')

cardOne.on('click', function() {
    // shuffleCards()
cardOne.attr('src', cardInPlay1.img)
})

cardTwo.on('click', function() {
// shuffleCards()
cardOne.attr('src', cardInPlay2.img)  
})

function winner() {
if (cardInPlay1.value() > cardInPlay2.value()) {
   winner.innerText('Player1 Wins!') 
} else if (cardInPlay1.value() === cardInPlay2()) {
    winner.innerText('Its a Tie!')
} else {
    winner.innerText('Player2 Wins!')
}
}

function restart() {
    currentPlayer = game.player1
    shuffleCards()

}
var div = $('#div')

function startGame() {
    div.show()
    
}