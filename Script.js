var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
			 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
			 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
			 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var playerHand;
var dealerHand;

const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')

let isStand = false

startGame();

function drawRandomCard(deck){ // Generates random card
	var randomIndex = Math.floor((Math.random() * deck.length));
	return deck[randomIndex];
}

function startGame(){	// Gives cards
	playerHand = [drawRandomCard(deck), drawRandomCard(deck)]; 
	dealerHand = [drawRandomCard(deck)];	
	checkWin() 
}

function getHandValue(hand){  // Calculates Hand Value
	var sum = 0;
	for(var i=0; i<hand.length; i++){
		sum += hand[i];
	}
	return sum;
}

function hit(){
	if(getHandValue(playerHand) < 21 && (getHandValue(dealerHand) < 21)){ // If dealerHand and playerHand is under 21:
		playerHand.push(drawRandomCard(deck));
		document.getElementById("player-hand").innerHTML = playerHand;
		document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
	}
	checkWin()
}

function checkWin(){
	if (getHandValue(dealerHand) == 21){ // Check If Dealer Got 21
		winningMessageTextElement.innerText = 'Dealer Wins!'
		winningMessageElement.classList.add('show')
		isStand = true
	}

	if (getHandValue(playerHand) == 21){ // Check If Player Got 21
		winningMessageTextElement.innerText = 'Player Wins!'
		winningMessageElement.classList.add('show')
		isStand = true
	}


	if(getHandValue(dealerHand) > 21){ // Checks if Dealer busted
		winningMessageTextElement.innerText = 'Dealer Busted!'
		winningMessageElement.classList.add('show')
		isStand = true
	}

	if(getHandValue(playerHand) > 21){ 	// Checks if player busted
		winningMessageTextElement.innerText = 'Player Busted!'
		winningMessageElement.classList.add('show')
		isStand = true
	}
	}

function stand(){
	if(document.getElementById('restartButton').clicked = true && (getHandValue(dealerHand) < 17)){
		do {
			dealerHand.push(drawRandomCard(deck));
			document.getElementById("dealer-hand").innerHTML = dealerHand;
			document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
			}
			while (getHandValue(dealerHand) < 17);
		}
		if (getHandValue(playerHand) ==	 (getHandValue(dealerHand))){ // Checks if draw
			winningMessageTextElement.innerText = 'Draw!'
			winningMessageElement.classList.add('show')
			isStand = true
		}
			
		if (getHandValue(dealerHand) ==	 (getHandValue(playerHand))){ // Checks if draw
			winningMessageTextElement.innerText = 'Draw!'
			winningMessageElement.classList.add('show')
			isStand = true
		}

		checkWin()
		if (isStand == false){
			checkStandWin()
		}
	}


function checkStandWin(){
	if (getHandValue(playerHand) > (getHandValue(dealerHand))){ // Checks if player won
		winningMessageTextElement.innerText = 'Player wins!'
		winningMessageElement.classList.add('show')}
	
	if (getHandValue(dealerHand) > (getHandValue(playerHand))){ // Checks if dealer won
		winningMessageTextElement.innerText = 'Dealer wins!'
		winningMessageElement.classList.add('show')}
}

function restartGame(){
	location.reload();
}

document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);

document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);