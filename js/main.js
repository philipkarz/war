var seconds = 10
var startGame = $('#start-game')
var carddiv = $('#carddiv')
var restart=$('#restart')
// carddiv.hide()
// restart.hide()

startGame.on('click', function() {
theIntervalId = setInterval(countDown, 1000)
// carddiv.show()
    
})

var card1 = null
var card2 = null
var game = {
    player1: {
        score: 0,
        cards: [
            { src : 'images/superman.jpeg', value: 9 },
            { src : 'images/batman.jpg', value: 8 },
           
        ]
    },
    player2: {
        score: 0,
        cards: [
            { src : 'images/ironman.jpg', value: 10 },
            { src : 'images/hulk.png', value: 10 },
    
        ]
    }
}

currentPlayer = game.player1
 
 function switchPlayer() {
     if(currentPlayer === game.player1) {
         currentPlayer = game.player2
     } else {
         currentPlayer = game.player1
     }
  }

  
var cardOne = $('#cardOne')
var cardTwo = $('#cardTwo')
var winner = $('#winner')
var player1Score = game.player1.score
var player2Score = game.player2.score
var score = 0
var player1Points = $('#player1-points')
var player2Points = $('#player2-points')

function shuffleCards(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
        // Generate a random index
        var randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap the card at the current index with the card at the random index
        var tempCard = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex] = tempCard;
    }
    return cards
}



cardOne.on('click', function() {
    var cardsInPlay = shuffleCards(game.player1.cards)
    card1 = cardsInPlay.pop()
    cardOne.attr('src', card1.src)
    switchPlayer()
})

cardTwo.on('click', function() {
    
    var cardsInPlay = shuffleCards(game.player2.cards)
    card2 = cardsInPlay.pop()
    cardTwo.attr('src', card2.src)
    checkWinner() 
    winner.text('')
    switchPlayer()
})

function checkWinner() {
    console.log(card1.value, card2.value)
    if (card1.value > card2.value) {
        winner.text('This round goes to Player 1!') 
        player1Score += 1
        player1Points.text(player1Score)
    } else if (card1.value === card2.value) {
        winner.text('Its a Tie!')
    } else {
        winner.text('This round goes to Player 2!')
        player2Score += 1
        player2Points.text(player2Score)
    }
    
    
}
//get players name then make it a variable
//animate text of winner

var timeLeft = $('#timeLeft')
var finalWinner = $('#final-winner')

function countDown(){
    seconds = seconds - 1
    timeLeft.html('Time Left: ' + seconds + ' seconds')
    console.log(player1Score, player2Score)

    if(seconds <= 0){
        clearInterval(theIntervalId)
        restart.show()
        //check player 1 and player 2 score
        if (player1Score > player2Score) {
            finalWinner.text('DC WINS!')
        } else if (player1Score === player2Score) {
            finalWinner.text('Tied!') 
        } else {
            finalWinner.text('MARVEL WINS!') 
        }
    }
}

function flipCard() {

}


restart.on('click', function() {
    cardOne.attr('src', './images/back.png')
    player1Points.text('')
    player2Points.text('')
    currentPlayer = game.player1
    clearInterval(theIntervalId)
    finalWinner.text('')
})
    

var sound = new Audio('winner.mp3')
    sound.play()