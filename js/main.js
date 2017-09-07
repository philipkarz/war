var seconds = 30
var startGame = $('#start-game')
var board = $('#board')
var restart=$('#restart')
board.hide()
// restart.hide()

// $(function(){
//     $('#fight').typed({
//       strings: ['Ready', 'Set', 'Fight'],
//       typeSpeed: 3
//     });
// });


startGame.on('click', function() {
theIntervalId = setInterval(countDown, 1000)
seconds = 30
board.show()
fightsound.play()
//h1 text ready set fight
    
})

var card1 = null
var card2 = null
var game = {
    player1: {
        score: 0,
        cards: [
            { src : 'images/captain.jpg', value: 1 },
            { src : 'images/batman.jpg', value: 3 },
            { src : 'images/ironman.jpg', value: 6 },
            { src : 'images/rocket.jpg', value: 4 },
            { src : 'images/thor.jpg', value: 10 },
            { src : 'images/hulk.jpg', value: 12 },
            { src : 'images/wolverine.jpg', value: 7 },
            
            { src : 'images/deadpool.jpg', value: 11 },
            
            { src : 'images/capybara.jpg', value: 13 },
            { src : 'images/vision.jpg', value: 8 },
            { src : 'images/punisher.jpg', value: 5 },
            { src : 'images/spiderman.jpg', value: 2 },
            { src : 'images/ghostrider.jpg', value: 9 },
        ]
    },
    player2: {
        score: 0,
        cards: [
            { src : 'images/ironman.jpg', value: 6 },
            { src : 'images/punisher.jpg', value: 5 },
            { src : 'images/thor.jpg', value: 10 },
            { src : 'images/hulk.jpg', value: 12 },
            { src : 'images/deadpool.jpg', value: 11 },
            { src : 'images/wolverine.jpg', value: 7 },
            { src : 'images/ghostrider.jpg', value: 9 },
            { src : 'images/rocket.jpg', value: 4 },
            { src : 'images/captain.jpg', value: 1 },
            { src : 'images/capybara.jpg', value: 13 },
            { src : 'images/vision.jpg', value: 8 },
            { src : 'images/batman.jpg', value: 3 },
            { src : 'images/spiderman.jpg', value: 2 }, 
    
        ]
    }
}

//make gifs

currentPlayer = game.player1
 
 function switchPlayer() {
     if(currentPlayer === game.player1) {
         currentPlayer = game.player2
     } else {
         currentPlayer = game.player1
     }
  }
var fightsound = new Audio('images/fight.mp3')
var sound = new Audio('images/winner3.mp3')  
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

function reset() {
    cardTwo.attr('src', './images/marvel2.jpg')
    cardOne.attr('src', './images/marvel2.jpg')
    card1 = null
    card2 = null
}

var card = $('#card')

cardOne.on('click', function() {
    var cardsInPlay = shuffleCards(game.player1.cards)
    card1 = cardsInPlay.pop()
    cardOne.attr('src', card1.src)
    switchPlayer()

})

//whichever player loses have animation shake card div

cardTwo.on('click', function() {
    
    var cardsInPlay = shuffleCards(game.player2.cards)
    card2 = cardsInPlay.pop()
    cardTwo.attr('src', card2.src)
    if(card1 && card2) {
        checkWinner() 
        setTimeout(function() {
            reset()
        }, 2000)
    }
    winner.text('')
    switchPlayer()
})

// function flipCard() {

//have the animation flipcard to the back
// }

// $('body').on('click', function() {
//  $('h1').effect('bounce', 'slow')
// })

function checkWinner() {
    console.log(card1.value, card2.value)
    if (card1.value > card2.value) {
        winner.text('Player 1 wins this round!') 
        player1Score += 1
        player1Points.text(player1Score)
        // card2.addClass('toggle')
    } else if (card1.value === card2.value) {
        winner.text('Its a Tie!')
    } else {
        winner.text('Player 2 wins this round')
        player2Score += 1
        player2Points.text(player2Score)
        // card1.addClass('toggle')
        
    }
    
    
}
//get players name then make it a variable
//animate text of winner
    



var timeLeft = $('#timeLeft')
var finalWinner = $('#final-winner')

function countDown(){
    seconds = seconds - 1
    timeLeft.html('Time Left: ' + seconds)
    console.log(player1Score, player2Score)

    if(seconds <= 0){
        clearInterval(theIntervalId)
        restart.show()
    
        //check player 1 and player 2 score
        if (player1Score > player2Score) {
            finalWinner.text('WINNER Player 1!')
        } else if (player1Score === player2Score) {
            finalWinner.text('Tied!') 
        } else {
            finalWinner.text('WINNER Player 2!') 
        }
        sound.play()
    }
}


// $('.blink').animate({opacity:0},200,'linear',function(){
//     $(this).animate({opacity:1},200);
//   });


  restart.on('click', function() {
    seconds = 30
    cardTwo.attr('src', './images/marvel2.jpg')
    cardOne.attr('src', './images/marvel2.jpg')
    player1Points.text('')
    player2Points.text('')
    currentPlayer = game.player1
    finalWinner.text('')
    fightsound.play()
    clearInterval(theIntervalId)
    //reset array loop
})

