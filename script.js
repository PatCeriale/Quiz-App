var gameBoard = document.querySelector(".gameBoard");
var scoreBoard = document.querySelector(".scoreBoard");
var startButton = document.querySelector(".startButton");
var timer = document.querySelector(".timer");
var score = 0;

// Hide Score Board container until quiz is completed
scoreBoard.style.display = "none";
// Set up countdown timer starting at 75 seconds
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
  //startQuiz
});

// TODO: (Loop) Display multiple choice question and answer:
const myQuestions = [
  {
    qOne: "What is not a style guideline of a West Coast India Pale Ale?",
    answers: ["Bitter", "Roasty", "Caramel", "Golden to amber color"],
    correctAnswer: ["Roasty"],
  },
  {
    qTwo: "What does butyric acid smell like?",
    answers: [
      "Baby diapers",
      "Used athletic socks",
      "Burned rubber",
      "Cardboard",
    ],
    correctAnswer: "Baby diapers",
  },
  {
    qThree: "What is not true of a Mixed Culture Beer?",
    answers: ["Tart", "Funky", "Full-bodied", "Low bitterness"],
    correctAnswer: "Full-bodied",
  },
  {
    qFour: "When a beer is oxidized, what does it taste like?",
    answers: ["Cardboard", "Metallic", "Baby vomit", "Horse blankets"],
    correctAnswer: "Cardboard",
  },
  {
    qFive: "What does NOT affect beer negatively?",
    answers: [
      "Warm storage",
      "Oxygen at packaging",
      "Beer spoilage organisms",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    qSix: "What is a Bohemian Pilsner?",
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
    qSeven:
      "If hydrogen sulfide was present in your beer, what would it smell like?",
    answers: ["Rotten eggs", "Bubblegum", "Rusty metal", "Skunky"],
    correctAnswer: "Rotten eggs",
  },
  {
    qEight: "What does diacetyl smell like?",
    answers: [
      "Movie theater popcorn",
      "Green Apple",
      "Crackers",
      "Sasquatch dung",
    ],
    correctAnswer: "Movie theater popcorn",
  },
  {
    qNine: "How wouldn't you describe a kölsch",
    answers: [
      "Very pale to light gold color",
      "Mild fruitiness",
      "Low carbonation",
      "Light and crisp body",
    ],
    correctAnswer: "Low carbonation",
  },
  {
    qTen: "How would you not describe a Barley Wine?",
    answers: ["THICC body", "Sessionable", "8%+ ABV", "Is life"],
    correctAnswer: "Sessionable",
  },
  {
    qEleven:
      "What is not a part of the three-tier system for alcohol distribution created after Prohibition?",
    answers: ["Producer", "Retailer", "Customer", "Distributor"],
    correctAnswer: "Customer",
  },
  {
    qTwelve: "What solution should not be used to clean a draft system?",
    answers: ["Caustic", "Acid", "Sanitizer", "Bleach"],
    correctAnswer: "Bleach",
  },
  {
    qThirteen:
      "Before and during fermentation, what is measured using a hydrometer?",
    answers: ["Gravity", "Alcohol percentage", "Hops", "Color"],
    correctAnswer: "Gravity",
  },
  {
    qFourteen:
      "What is the name of the device attached directly to the keg in order to dispense beer?",
    answers: ["Tap", "Coupler", "Shank", ""],
    correctAnswer: "Coupler",
  },
  {
    qFifteen: "What can you expect to not get from a Milkshake IPA?",
    answers: ["Lactose", "Fruit", "Hop bitterness", "Diabetes"],
    correctAnswer: "Hop bitterness",
  },
  {
    qSixteen: "What does Tetrahydropyridine (THP) taste like?",
    answers: ["Not that bad!", "Mouse urine", "Hop bitterness", "Diabetes"],
    correctAnswer: "Mouse urine",
  },
  {
    qSeventeen: "What does dimethyl sulfide taste like?",
    answers: ["Cooked vegetables", "Rotten eggs", "Bread", "Peppers"],
    correctAnswer: "Cooked vegetables",
  },
  {
    qEighteen:
      "What could you expect to not be in the style guidelines for a saison?",
    answers: ["Anything", "Anything", "Anything", "Isn't made with barley"],
    correctAnswer: "",
  },
  {
    qNineteen: "Hard seltzers are not:",
    answers: [
      "Technically beer",
      "Made from 100% cane/corn sugar",
      "Hard to make",
      "the cash cow for some craft beer breweries",
    ],
    correctAnswer: "Hard to make",
  },
  {
    qTwenty: "What does isovaleric acid smell like?",
    answers: ["Stinky cheese", "Electrical fires", "Strawberries", "Bananas"],
    correctAnswer: "Stinky cheese",
  },
];
// bttnOne.addEventListener("click", function)

function startQuiz() {
  // hide start screen
  // set score = 0
  // display questions
  //start/show timer
  //function = grab the questions
}
function getQuestions() {
  document.querySelector(".gameBoard");
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
  // compare clicked question with correct answer myQuestion.questionOne.correctAnswer
}
function endQuiz() {
  // if? (timeLeft = 0) {run this function}
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
