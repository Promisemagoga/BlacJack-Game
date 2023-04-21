
let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let amount = 100


playerEl.innerHTML = "Balance: R" + amount


function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 11) + 1
   if (randomNumber > 10) {
      return 10
   } else if (randomNumber === 1) {
      return 11
   } else {
      return randomNumber
   }
}

function startGame() {
   isAlive = true
   let firstCard = getRandomCard();
   let secondCard = getRandomCard();
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard

   renderGame()
   won +=  10
   lost -=  10
}

let won = amount + 10;
let lost = amount - 10;
function renderGame() {
   if (sum <= 20) {
      message = "Do you want to draw a new card?"
   } else if (sum === 21) {
      message = "You've got a black jack"
      hasBlackJack = true
     
      playerEl.innerHTML = "Balance: R" + won
 
   } else {
      message = "you are out of the game"
      isAlive = false
      playerEl.innerHTML = "Balance: R" + lost
   }

   messageEl.innerHTML = message
   sumEl.innerHTML = "Sum: " + sum;
   cardsEl.innerHTML = "Cards: "  // + cards[0] + " " + cards[1]
   for (let i = 0; i < cards.length; i++) {
      cardsEl.innerHTML += cards[i] + " "
   }


}

// let newCard = 3
// let newSum = sum + newCard
function newCards() {

   if (isAlive === true) {
      let newCard = getRandomCard()
      sum += newCard
      cards.push(newCard)
      renderGame()
   }


   // cardsEl.innerHTML = "Cards: " + firstCard + " " + secondCard + " " + newCard
   // sumEl.innerHTML = "Sum: " + newSum

   // if (newSum <= 20) {
   //    message = "Do you want to draw a new card?"
   // } else if (newSum === 21) {
   //    message = "You've got a black jack"
   //    hasBlackJack = true
   // } else {
   //    message = "you are out of the game"
   //    isAlive = false
   // }

   // messageEl.innerHTML = message

}


