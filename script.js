var gameBoard = document.querySelector(".gameBoard");
var scoreBoard = document.querySelector(".scoreBoard");
var startButton = document.querySelector(".startButton");
var timer = document.querySelector(".timer");
var score = 0;

// Hide Score Board container
scoreBoard.style.display = "none";
// TODO: Set up countdown timer starting at 60 seconds
var timeLeft = 5; //TODO: Change back to 75s

function countdownClock() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time remaining: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      //launch Score Board function();
    }
  }, 1000);
}
// TODO: "Start quiz" button starts the quiz on Game Board and hides the button itself. (.onclick vs .addEventListener?)
startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  countdownClock();
});

// TODO: (Loop) Display multiple choice question and answer:
//     -TODO: Create questions as objects? with answers as an array ["A", "B", "C", "D"]
//     -TODO: Add points to the user's score when answered correctly. Reduce the time left by 10 seconds if answered incorrectly.
// if(answer is true){
//     score + 100;
// }else {
//     timeLeft -5;
// }

//     -TODO: Display whether the answer is answered correctly or not
//     -TODO: Repeat loop to move to next question
// TODO: When timer equals zero, the quiz is finished, show the user end of game screen
// TODO: Extra points given if time is left on clock (Seconds left * extra points)
///////////////////////////////////////////////////////////////
// TODO: Hide Game Board (display = "none") show Score Board (display = "block")

// TODO: On completion of quiz, total score is displayed and user inputs their name
// TODO: User's name and score are logged on leader board:
//     -TODO: Score board is saved to server? (getItem, setItem, JSON.stringify()? and JSON.parse()?).

// 1. create Element
// 2. add content and styling
// 3. append to parent element
