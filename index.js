// define variables for question number and score

let currentQuestionNumber;
let score;

// array containing html for individual questions

const questionHtml = ['<div id="question-content"><h4 class="pt-3">Question 1 / 6</h4><p>Insert the missing part of the code to return the number of items in the <span>moons</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">moons = [“Charon”, “Hydra”, “Kerberos”, “Nix”, “Styx”];<br>moons.<input id="answer-input" type="text" size="6" autofocus autocomplete="off">;</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 2 / 6</h4><p>Insert the missing part of the code to return the string <span>"merry-go-round"</span>.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">words = ["merry", "go", "round"];<br>words.join(<input id="answer-input" type="text" size="3" autofocus autocomplete="off">);</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 3 / 6</h4><p>Insert the missing part of the code to add <span>"macaroni"</span> to the end of the <span>pasta</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">pasta = ["spaghetti", "penne", "fusilli"];<br>pasta.<input id="answer-input" type="text" size="4" autofocus autocomplete="off">("macaroni");</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 4 / 6</h4><p>Insert the missing part of the code to remove <span>"Bert"</span> from the end of the <span>beatles</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">beatles = ["John", "Paul", "George", "Ringo", "Bert"];<br>beatles.pop<input id="answer-input" type="text" size="2" autofocus autocomplete="off">;</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 5 / 6</h4><p>Insert the missing part of the code to change the value of <span>"None"</span> to <span>"Null"</span> in the <span>dataTypes</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">dataTypes = ["String", "Boolean", "None"];<br>dataTypes<input id="answer-input" type="text" size="3" autofocus autocomplete="off"> = "Null";</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 6 / 6</h4><p>Insert the missing part of the code to add <span>"five"</span> and <span>"four"</span> to the start of the <span>countdown</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">countdown = ["three", "two", "one", "lift-off"];<br>countdown.<input id="answer-input" type="text" size="7" autofocus autocomplete="off">("five", "four");</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>'];

// array containing correct answers to quiz questions

const questionAnswers = ['length', '"-"', 'push', '()', '[2]', 'unshift'];

// arrays containing html for correct / incorrect answer messages

const correctMessageHtml = '<div class="answer-background p-3"><h4><i class="fa-solid fa-check pr-2"></i>That&#39;s the right answer!</h4></div><button id="next-question-btn" class="in-quiz-btn btn btn-lg mt-3">Next question <i class="fa-solid fa-chevron-right"></i></button>'

const incorrectMessageHtml = '<div class="answer-background p-3"><h4><i class="fa-solid fa-xmark pr-2"></i>Incorrect</h4></div><button id="try-again-btn" class="in-quiz-btn btn btn-lg mr-2 mt-3">Try again</button><button id="next-question-btn" class="in-quiz-btn btn btn-lg mt-3">Next question <i class="fa-solid fa-chevron-right"></i></button>'
 
// add event listener to "Start the quiz" button

startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz);

// function to start the quiz

function startQuiz() {
    // set score to 0 and question number to 0
    currentQuestionNumber = 0;
    score = 0;

    // display question 1
    showNextQuestion();
};

// function to check whether the correct answer has been given

function checkAnswer() {
    submittedAnswer = document.getElementById("answer-input").value;

    if ((submittedAnswer === questionAnswers[currentQuestionNumber-1]) || (currentQuestionNumber===2 && ["'-'", "`-`"].includes(submittedAnswer))) {
        
        // increment the score by 1
        score++;
    
        showCorrectMessage();
    }

    else {
        showIncorrectMessage();
    }
};

// function to display page content for when a question is answered correctly

function showCorrectMessage() {
    document.getElementById("changeable-content-subblock").innerHTML = correctMessageHtml;

    if (currentQuestionNumber<6) {
        nextQuestionButton = document.getElementById("next-question-btn");
        nextQuestionButton.addEventListener("click", showNextQuestion);
    }

    else {
        document.getElementById("next-question-btn").innerHTML = "Show my score!"
        document.getElementById("next-question-btn").setAttribute("id", "show-score-btn");
        showScoreButton = document.getElementById("show-score-btn");
        showScoreButton.addEventListener("click", showScore);
    }
};

// function to show page content for when a question is answered incorrectly

function showIncorrectMessage() {
    document.getElementById("changeable-content-subblock").innerHTML = incorrectMessageHtml;

    if (currentQuestionNumber<6) {
        nextQuestionButton = document.getElementById("next-question-btn");
        nextQuestionButton.addEventListener("click", showNextQuestion);
    }

    else {
        document.getElementById("next-question-btn").innerHTML = "Show my score!";
        document.getElementById("next-question-btn").setAttribute("id", "show-score-btn");
        showScoreButton = document.getElementById("show-score-btn");
        showScoreButton.addEventListener("click", showScore);
    }

    tryAgainButton = document.getElementById("try-again-btn");

    tryAgainButton.addEventListener("click", repeatQuestion);
   
};

// function to show the next question in the quiz

function showNextQuestion() {
    // increment question number by 1
    currentQuestionNumber++;

    document.getElementById("changeable-content").innerHTML = questionHtml[currentQuestionNumber-1];
    
    // add event listener to "Submit answer" button
    submitAnswerButton = document.getElementById("submit-btn");
    submitAnswerButton.addEventListener("click", checkAnswer);
};

// function to repeat the question (option available if question is answered incorrectly)

function repeatQuestion() {
    document.getElementById("changeable-content").innerHTML = questionHtml[currentQuestionNumber-1];
    
    // add event listener to "Submit answer" button
    submitAnswerButton = document.getElementById("submit-btn");
    submitAnswerButton.addEventListener("click", checkAnswer); 
};

// function to show the final score at the end of the quiz

function showScore() {

    const finalScoreHtml = '<div class="answer-background p-3"><h4>Your final score is ' + score + ' out of 6!</h4><p class="small">You can take the quiz again or continue to the next section of the course.</p></div><button id="restart-btn" class="in-quiz-btn btn btn-lg mr-2 mt-3">Take the quiz again</button><button id="continue-btn" class="in-quiz-btn btn btn-lg mr-2 mt-3">Continue <i class="fa-solid fa-chevron-right"></i></button>';

    document.getElementById("changeable-content").innerHTML = finalScoreHtml;

    restartQuizButton = document.getElementById("restart-btn");
    restartQuizButton.addEventListener("click", resetQuiz);

    continueButton = document.getElementById("continue-btn");
    continueButton.addEventListener("click", function() {
        alert("This function is not available.");
    })
};

// function to restart the quiz

function resetQuiz() {
    // show html for quiz start screen
    document.getElementById("changeable-content").innerHTML = '<p class="intro py-3">Now that you have completed the course material on array methods, you are ready to take this mini-quiz to test your knowledge of what you have learned!</p><button id="start-btn" class="btn btn-lg align-items-center">Start the quiz >></button>';

    // add event listener to start button
    startButton = document.getElementById("start-btn");
    startButton.addEventListener("click", startQuiz);
};

// add event listener to <a> elements

links = document.getElementsByTagName("a");
for (let i=0; i<links.length; i++) {
    links[i].addEventListener("click", showLinkUnavailableAlert);
};

// function to show an alert if a link is clicked

function showLinkUnavailableAlert() {
    alert("This link is not currently available.")
};