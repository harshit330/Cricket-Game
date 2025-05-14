let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);


function resetScore(scoreStr) {

  score = scoreStr ? JSON.parse(scoreStr) :{
    win: 0,
    lost: 0,
    tie : 0,
  };

  score.displayScore = function() {
    return ` Score: Won: ${score.win}, Lost:${score.lost}, Tie: ${score.tie}`;

  };

  showResult();

}

function showResult(userChoice,computerChoice,resultMsg){
  localStorage.setItem('score', JSON.stringify(score));
 
  document.querySelector('#user-Choice').innerText = userChoice !== undefined ? `you have chosen ${userChoice}` : '';

  document.querySelector('#computer-move').innerText = computerChoice !== undefined ? `Computer choice is ${computerChoice}` : '';

  document.querySelector('#result').innerText = resultMsg !== undefined ? resultMsg : '';

  document.querySelector('#score').innerText = score.
    displayScore();
  
}

function playGame(userChoice) {
  const userChoiceMsg = `You have chosen ${userChoice}`;
  let randomNumber = Math.random() * 3;
  let computerChoice;

  if (randomNumber <= 1) {
    computerChoice = 'Bat';
  } else if (randomNumber <= 2) {
    computerChoice = 'Ball';
  } else {
    computerChoice = 'Stump';
  }

  let resultMsg;

  if (
    (userChoice === 'Bat' && computerChoice === 'Ball') ||
    (userChoice === 'Ball' && computerChoice === 'Stump') ||
    (userChoice === 'Stump' && computerChoice === 'Bat')
  ) {
    score.win++;
    resultMsg = 'User won.';
  } else if (userChoice === computerChoice) {
    score.tie++;
    resultMsg = "It's a tie.";
  } else {
    score.lost++;
    resultMsg = 'Computer has won.';
  }
  showResult(userChoice, computerChoice, resultMsg);
  
}
