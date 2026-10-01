const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById("progressText"); 
const scoreText  = document.getElementById("scoreText");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion={};
let acceptingAnswers= false;
let score=0;
let questionCounter=0;
let availableQuestions=[]
let questions = [
  {
    question: "All cats are born with what color eyes?",
    choice1: "Gray",
    choice2: "Blue",
    choice3: "Green",
    choice4: "Yellow",
    answer: 2
  },
  {
    question: "How many whiskers does the average cat have on each side of its face?",
    choice1: "2",
    choice2: "4",
    choice3: "12",
    choice4: "1200",
    answer: 3
  },
  {
    question: "When does a cat purr?",
    choice1: "When it cares for its kittens",
    choice2: "When it needs comfort",
    choice3: "When it feels content",
    choice4: "All of the above",
    answer: 4
  }
]


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length==0 || questionCounter>= MAX_QUESTIONS){
      localStorage.setItem("mostRecentScore",score)
        return window.location.assign("/end.html");
    }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  // update the progress bar
  
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
  // console.log(availableQuestions);
  acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener("click",e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice=e.target;
        const selectedAnswer=selectedChoice.dataset["number"];
        const classToApply= 
        selectedAnswer==currentQuestion.answer? 'correct':'incorrect';
       if(classToApply == "correct"){
        incrementScore(CORRECT_BONUS);
       }

        selectedChoice.parentElement.classList.add(classToApply); 
        setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply); 
          getNewQuestion();
          }, 1000);
      
    });
});

incrementScore = num => {
  score+=num;
  scoreText.innerText = score;
};
startGame();


