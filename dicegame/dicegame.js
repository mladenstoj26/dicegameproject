function myFunction() {
  var x = document.getElementById("demo")
  x.innerHTML = Math.floor((Math.random() * 100) + 1);

  


runGame();
console.log("Baseball Game")


function runGame(){
	let players = [];
	choosePlayerCount(players);
	let inningCounter = 1;
	let numberOrInnings = chooseInningCount();

	while(InningCounter <= numberOrInnings){
      rollDice(players)
      let winnerIndex = determineInningWinner(players);
      players[winnerIndex].score ++;
      reportInningWinner(winnerIndex);
      roundCounter ++;
  }

  let gameWinnerIndex = determineGameWinner(players);
  	reportGameWinner(gameWinnerIndex);
  	chooseReplay();
}
  function choosePlayerCount(players){
  	let numberOfPlayers = prompt("How many players would like to play?");
  	for(let i = 0; i < numberOfPlayers; i++){
    players.push({score: 0, roll: 0 })
  }
}

function chooseRoundCount(){
	return prompt("How many rounds would you like to play")
}


for(let i = 0; i< 2; i++){
	player.push({score: 0, roll: 0})
}
function rollDice(players){
  for(let i = 0; i < players.length; i++){
    players[i].roll = rollDie(4);
    players[i].roll += rollDie(6);
    players[i].roll += rollDie(8);
    players[i].roll += rollDie(10);
    players[i].roll += rollDie(12);
    players[i].roll += rollDie(20);
  }
}

function rollDie(numberofSides){
	return Math.floor( Math.random() * numberofSides) +1;
}
function determineInningWinner(players){
	let winnerIndex = 0;

	for(let i = 1; i < players.length; i++){
	if(players[i].roll > players[winnerIndex].roll){
		winnerIndex = i;
		}
	}
	return winnerIndex
}

function reportInningWinner(winnerIndex){
  console.log("Player " + (winnerIndex + 1) + " has won the Inning switch sides.")
}

function determineGameWinner(players){
  let gameWinnerIndex = 0;

  for(let i = 1; i < players.length; i++){
      if(players[i].score > players[gameWinnerIndex].score){
        gameWinnerIndex = i;
      }
  }
  return gameWinnerIndex;
}
function reportGameWinner(gameWinnerIndex){
  console.log("Player " + (gameWinnerIndex + 1) + " has won the game.")
}

function chooseReplay(){
	let inputIsValid = false;
	while(!inputIsValid){
	let input = prompt("would you like to play again? 'yes' or 'no'");
		if(input == "yes"){
			inputIsValid = true;
			runGame();
		}
		//else if(input == "no"){
			//inputIsValid = true;
			//console.log("Thank you for playing!")
		//}
	//}
//}
