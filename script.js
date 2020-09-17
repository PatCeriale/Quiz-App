var gameBoard = document.querySelector(".gameBoard");
var scoreBoard = document.querySelector(".scoreBoard");
var leaderBoard = document.querySelector(".leaderBoard");
var playerList = document.querySelector(".playerList");
var question = document.querySelector(".question");
var answers = document.querySelector(".answers");
var buttonA = document.querySelector(".buttonA");
var buttonB = document.querySelector(".buttonB");
var buttonC = document.querySelector(".buttonC");
var buttonD = document.querySelector(".buttonD");
var startButton = document.querySelector(".startButton");
var submitBtn = document.querySelector("#submitBtn");
var userName = document.querySelector("#exampleInputName");
var timer = document.querySelector(".timer");
var userScore = document.querySelector("#userScore");
var score = 0;
var qCounter = 0;
var timeLeft = 75;
var players = [];

// Hide Score Board until quiz is completed,
scoreBoard.style.display = "none";
// Hide Leader Board until user inputs name
leaderBoard.style.display = "none";
// Hide answer buttons until quiz is started
answers.style.display = "none";
// Set up countdown timer that ends game when time is up
function countdownClock() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time remaining: " + timeLeft;
    //launch Score Board function();
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

const myQuestions = [
  {
    q: "What is not a style guideline of a West Coast India Pale Ale?",
    answers: ["Bitter", "Roasty", "Caramel", "Golden to amber color"],
    correctAnswer: "Roasty",
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
    q: "What is not a way to describe a Bohemian Pilsner?",
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

function getQuestions() {
  //Places the current question in the h1 on Game Board and answers to a corresponding and clickable button. Sourced from myQuestions array
  question.innerHTML = myQuestions[qCounter].q;
  buttonA.textContent = myQuestions[qCounter].answers[0];
  buttonB.textContent = myQuestions[qCounter].answers[1];
  buttonC.textContent = myQuestions[qCounter].answers[2];
  buttonD.textContent = myQuestions[qCounter].answers[3];
}

function onAnswerClick(e) {
  // Compares the correct answer to the user's input
  e.preventDefault();
  const index = e.target.getAttribute("data-index");
  if (
    myQuestions[qCounter].correctAnswer === myQuestions[qCounter].answers[index]
  ) {
    // If the user is correct, they are awarded points and correct is displayed on the screen
    score++;
    document.getElementById("congrats").textContent = "That was correct!";
  } else {
    // If the user is incorrect, time is taken away from the clock and incorrect is displayed on the screen
    timeLeft--;
    document.getElementById("congrats").textContent = "That was wrong!";
  }
  qCounter++;
  if (qCounter < myQuestions.length) {
    getQuestions();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  // Fires when time is up countdownClock
  //Game Board is hidden, Score Board is shown
  if (timeLeft === 0) {
    var userName = document.getElementById("submitBtn");
    scoreBoard.style.display = "block";
    gameBoard.style.display = "none";
    userScore.textContent =
      "Congratulations your score is " +
      score +
      " out of " +
      myQuestions.length;
  }
}

// TODO: User's name and score are logged on leader board:
//     -TODO: Score board is saved to local storage? (getItem, setItem, JSON.stringify()? and JSON.parse()?).
// JSON.stringify();
//

// function renderList() {
//   // Render a new li for each player
//   for (var i = 0; i < players.length; i++) {
//     var player = players[i];
//   }
//   var li = document.createElement("li");
//   li.textContent = player;
//   li.setAttribute("data-index", i);

//   playerList.appendChild(li);
// }

// submitBtn.addEventListener("submit", function () {
//   preventDefault();
//   var userNameText = userName.Value.trim();
//   leaderBoard.style.display = "block";
//   if (userNameText === "") {
//     return;
//   }
// });

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  gameBoard.style.background = "white";
  answers.style.display = "block";
  countdownClock();
  getQuestions();
  endQuiz();
  //TODO: renderList();
});

buttonA.addEventListener("click", onAnswerClick);
buttonB.addEventListener("click", onAnswerClick);
buttonC.addEventListener("click", onAnswerClick);
buttonD.addEventListener("click", onAnswerClick);
