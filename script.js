var gameBoard = document.querySelector(".gameBoard");
var scoreBoard = document.querySelector(".scoreBoard");
var startButton = document.querySelector(".startButton");
var timer = document.querySelector(".timer");
var score = 0;
var qCounter = 0;
var timeLeft = 3; //TODO: Change back to 75s

// Hide Score Board container until quiz is completed
scoreBoard.style.display = "none";
// Set up countdown timer starting at 75 seconds (timeLeft)
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

// TODO: (Loop) Display multiple choice question and answer:
const myQuestions = [
  {
    q: "What is not a style guideline of a West Coast India Pale Ale?",
    answers: ["Bitter", "Roasty", "Caramel", "Golden to amber color"],
    correctAnswer: ["Roasty"],
  },
  {
    q: "What does butyric acid smell like?",
    answers: [
      "Baby diapers",
      "Used athletic socks",
      "Burned rubber",
      "Cardboard",
    ],
    correctAnswer: "Baby diapers",
  },
  {
    q: "What is not true of a Mixed Culture Beer?",
    answers: ["Tart", "Funky", "Full-bodied", "Low bitterness"],
    correctAnswer: "Full-bodied",
  },
  {
    q: "When a beer is oxidized, what does it taste like?",
    answers: ["Cardboard", "Metallic", "Baby vomit", "Horse blankets"],
    correctAnswer: "Cardboard",
  },
  {
    q: "What does NOT affect beer negatively?",
    answers: [
      "Warm storage",
      "Oxygen at packaging",
      "Beer spoilage organisms",
      "None of the above",
    ],
    correctAnswer: "None of the above",
  },
  {
    q: "What is a Bohemian Pilsner?",
    answers: [
      "Crisp",
      "Refreshing",
      "The best ever",
      "Hop bomb that removes your ability to taste anything for the duration of James Cameron’s 'Avatar'",
    ],
    correctAnswer:
      "Hop bomb that removes your ability to taste anything for the duration of James Cameron’s 'Avatar'",
  },
  {
    q:
      "If hydrogen sulfide was present in your beer, what would it smell like?",
    answers: ["Rotten eggs", "Bubblegum", "Rusty metal", "Skunky"],
    correctAnswer: "Rotten eggs",
  },
  {
    q: "What does diacetyl smell like?",
    answers: ["Movie theater popcorn", "Green Apple", "Crackers", "Wet dog"],
    correctAnswer: "Movie theater popcorn",
  },
  {
    q: "How wouldn't you describe a kölsch",
    answers: [
      "Very pale to light gold color",
      "Mild fruitiness",
      "Low carbonation",
      "Light and crisp body",
    ],
    correctAnswer: "Low carbonation",
  },
  {
    q: "How would you not describe a Barley Wine?",
    answers: ["THICC body", "Sessionable", "8%+ ABV", "Is life"],
    correctAnswer: "Sessionable",
  },
  {
    q:
      "What is not a part of the three-tier system for alcohol distribution created after Prohibition?",
    answers: ["Producer", "Retailer", "Customer", "Distributor"],
    correctAnswer: "Customer",
  },
  {
    q: "What solution should not be used to clean a draft system?",
    answers: ["Caustic", "Acid", "Sanitizer", "Bleach"],
    correctAnswer: "Bleach",
  },
  {
    q: "Before and during fermentation, what is measured using a hydrometer?",
    answers: ["Gravity", "Alcohol percentage", "Hops", "Color"],
    correctAnswer: "Gravity",
  },
  {
    q:
      "What is the name of the device attached directly to the keg in order to dispense beer?",
    answers: ["Tap", "Coupler", "Shank", "Faucet"],
    correctAnswer: "Coupler",
  },
  {
    q: "What can you expect to not get from a Milkshake IPA?",
    answers: ["Lactose", "Fruit", "Hop bitterness", "Diabetes"],
    correctAnswer: "Hop bitterness",
  },
  {
    q: "What does Tetrahydropyridine (THP) taste like?",
    answers: [
      "Not that bad!",
      "Mouse urine",
      "Hop bitterness",
      "'I can't even taste it' - A home brewer after their first sour brew",
    ],
    correctAnswer: "Mouse urine",
  },
  {
    q: "What does dimethyl sulfide taste like?",
    answers: ["Cooked vegetables", "Rotten eggs", "Bread", "Peppers"],
    correctAnswer: "Cooked vegetables",
  },
  {
    q: "What could you expect to not be in the style guidelines for a saison?",
    answers: ["Anything", "Anything", "Anything", "Isn't made with barley"],
    correctAnswer: "Isn't made with barley",
  },
  {
    q: "Hard seltzers are not:",
    answers: [
      "Technically beer",
      "Made from 100% cane/corn sugar",
      "Hard to make",
      "the cash cow for some craft beer breweries",
    ],
    correctAnswer: "Hard to make",
  },
  {
    q: "What does isovaleric acid smell like?",
    answers: ["Stinky cheese", "Electrical fires", "Strawberries", "Bananas"],
    correctAnswer: "Stinky cheese",
  },
];
for (let i = 0; i < myQuestions.length; i++) {
  //  gameBoard.innerHTML =
}
// bttnOne.addEventListener("click", function)
function startQuiz() {
  score = 0;
  //   gameBoard.style.display = "none";
  // display questions
  //start/show timer
  //function = grab the questions
}
function getQuestions() {
  //   myQuestions++;
  //create h1
  gameBoard.innerHTML = myQuestions[qCounter].q;
  //create p tag or something with buttons a, b, c, d
  //Loop answers x4 for each answer associated with each button
  for (let i = 0; i < length < 5; i++) {
    gameBoard.innerHTML = myQuestions[qCounter].answers[i];
  }
  // document.getElementbyID
  //for each function myQuestion.questionOne.answers
  //get current question from array
  //show questions, title
  //look over choices
  //display to page
  // TODO:buttons exist on page prior to question?
  // TODO:create with the questions (div appended)?
}
function questionClick() {
  // compare clicked question with correct answer myQuestion.qOne.correctAnswer
}
function endQuiz() {
  if (timeLeft === 0) {
    scoreBoard.style.display = "block";
    gameBoard.style.display = "none";
  }
  //happens when time is up countdownClock
  //hide game board/show the score board
  // scoreBoard.style.display = "block";
  // gameBoard.style.display = "none";
}

// scoreBoard contain form for user name
//create leaderBoard
//get item/set item "class".val

//     -TODO: Add points to the user's score when answered correctly. Reduce the time left by 10 seconds if answered incorrectly. Display whether the answer is answered correctly or not
// var correct = gameBoard.innerHTML
// var incorrect = gameBoard.innerHTML
// if(answer === true){
//     display correct;
//     score + 100;
// }else {
//     display incorrect;
//     timeLeft -5;
// }
//     -TODO: Repeat loop to move to next question
// TODO: When timer equals zero, the quiz is finished, show the user end of game screen
///////////////////////////////////////////////////////////////
// TODO: Hide Game Board, show Score Board
// scoreBoard.style.display = "block";
// gameBoard.style.display = "none";
// TODO: On completion of quiz, total score is displayed and user inputs their name
// TODO: User's name and score are logged on leader board:
//     -TODO: Score board is saved to server? (getItem, setItem, JSON.stringify()? and JSON.parse()?).

// TODO: "Start quiz" button starts the quiz on Game Board and hides the button itself.
startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  countdownClock();
  startQuiz();
  getQuestions();
  //startQuiz
});
endQuiz();
