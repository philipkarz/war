
var score = 0

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
            { src : 'images/ironman.jpg', value: 5 },
            { src : 'images/hulk.png', value: 8 },
    
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
    player1Score = score ++
    checkWinner() 
})

function checkWinner() {
    if (card1.value > card2.value) {
        winner.text('Player1 Wins!') 
    } else if (card1.value === card2.value) {
        winner.text('Its a Tie!')
    } else {
        winner.text('Player2 Wins!')
    }
    reset.show()
    
}
//get players name then make it a variable
//animate text of winner
var reset=$('#reset')
reset.hide()

 var div = $('#div')
 
 function startGame() {

    // if (cardsInPlay === 2) 
     //when player presses start btn 
     //show cards
     div.show()
     
 }

function restart() {
    currentPlayer = game.player1
   
}

var player1Score = game.player1.score

var player2Score = game.player2.score

function countDown(){
    seconds = seconds - 1
    timeLeft.innerHTML = 'Time Left: ' + seconds + ' seconds'
    if (seconds <= 0){
        clearInterval( theIntervalId );
        alert('Your score is ' + score);
        if(player1Score == null){
            player1Score = score
        }
        else {
            player2Score = score
        }
        $(‘#turn’).toggleClass(‘a’);
        turnsPlayed += 1

        if(turnsPlayed == 5) {
            if(player1Score > player2Score) {
                alert('Player 1 wins')
            }
            else {
                alert('Player 2 wins')
            }
        }


        theIntervalId = setInterval(countDown, 1000)
        seconds = 30
        timeLeftElement.innerHTML = “Time Left: ” + seconds + ” seconds”
        score = 0
        pointsElement.innerText = “Score: 0”
    } 

    // var audio = "//audio clip"
    // audio.play()