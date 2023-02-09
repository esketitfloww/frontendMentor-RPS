/* CHOICES */
const chooseRock = document.querySelector(".rock-choice");
const chooseScissor = document.querySelector(".scissor-choice");
const choosePaper = document.querySelector(".paper-choice");

/* PAGES */
const triangle = document.querySelector(".triangle");
const homeContent = document.querySelector("#home-content");
const resultContent = document.querySelector("#result");
const again = document.querySelector("#again");

/* TEXT */
const scoreNumber = document.querySelector(".score-result");
const resultText = document.querySelector(".result-text");
let scoreResult = 0;

/* IMAGES */
const userChoice = document.querySelector(".user-choice");
const imageChoice = document.querySelector("#image-choice");
const computerColor = document.querySelector(".computer-choice");
const computerImage = document.querySelector("#computer-image");

/* PLAYERS */
let user;
let computer;

/* FUNCTIONS */
function computerChoice(){

	const randNum = Math.floor(Math.random() * 3) + 1;

	switch (randNum){
		case 1:
			computer = 'rock';
			computerColor.className = 'rock-choice';
			computerImage.src = 'images/icon-rock.svg';
			break
		case 2:
			computer = 'paper';
			computerColor.className = 'paper-choice';
			computerImage.src = 'images/icon-paper.svg';
			break
		case 3:
			computer = 'scissor';
			computerColor.className = 'scissor-choice';
			computerImage.src = 'images/icon-scissors.svg';
			break
	}
};

chooseRock.addEventListener("click", function(){
	homeContent.style.display = 'none';
	triangle.style.display = 'none';
	resultContent.style.display = 'flex';
	player = 'rock';
	computerChoice();
	userChoice.className = 'rock-choice';
	imageChoice.src = 'images/icon-rock.svg';
	resultText.textContent = checkWinner();
	scoreNumber.textContent = scoreCheck();
});
choosePaper.addEventListener("click", function(){
	homeContent.style.display = 'none';
	triangle.style.display = 'none';
	resultContent.style.display = 'flex';
	userChoice.className = 'paper-choice';
	imageChoice.src = 'images/icon-paper.svg';
	player = 'paper';
	computerChoice();
	resultText.textContent = checkWinner();
	scoreNumber.textContent = scoreCheck();
});
chooseScissor.addEventListener("click", function(){
	homeContent.style.display = 'none';
	triangle.style.display = 'none';
	resultContent.style.display = 'flex';
	userChoice.className = 'scissor-choice';
	imageChoice.src = 'images/icon-scissors.svg';
	player = 'scissor';
	computerChoice();
	resultText.textContent = checkWinner();
	scoreNumber.textContent = scoreCheck();
});

again.addEventListener("click", function(){
	homeContent.style.display = 'flex';
	triangle.style.display = 'block';
	resultContent.style.display = 'none';
});

function checkWinner(){
    if(player == computer){
      return "DRAW!";
    }
    else if(computer == "rock"){
      return (player == "paper") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "paper"){
      return (player == "scissor") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "scissor"){
      return (player == "rock") ? "YOU WIN!" : "YOU LOSE!"
    }
};

function scoreCheck() {
  if (checkWinner() === "YOU WIN!") {
    scoreResult += 1;
  } else if (checkWinner() === "YOU LOSE!") {
    scoreResult -= 1;
  }
  return scoreResult.toString();
}