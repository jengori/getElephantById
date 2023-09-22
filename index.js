// define variables for question number and score

let currentQuestionNumber;
let score;

// array of quiz question objects

const questions = 
    [
        {
        'number' : 1,
        'task': 'Insert the missing part of the code to return the number of items in the <span>moons</span> array.',
        'codeSnippet': 'moons = [“Charon”, “Hydra”, “Kerberos”, “Nix”, “Styx”];<br>moons.<input id="answer-input" type="text" size="6" autofocus autocomplete="off">;',
        'answer': 'length'
        },

        {
        'number': 2,
        'task': 'Insert the missing part of the code to return the string <span>"merry-go-round"</span>.',
        'codeSnippet': 'words = ["merry", "go", "round"];<br>words.join(<input id="answer-input" type="text" size="3" autofocus autocomplete="off">);',
        'answer': '"-"'
        },

        {
        'number': 3,
        'task': 'Insert the missing part of the code to add <span>"macaroni"</span> to the end of the <span>pasta</span> array.',
        'codeSnippet': 'pasta = ["spaghetti", "penne", "fusilli"];<br>pasta.<input id="answer-input" type="text" size="4" autofocus autocomplete="off">("macaroni");',
        'answer': 'push'
        },

        {
        'number': 4,
        'task': 'Insert the missing part of the code to remove <span>"Bert"</span> from the end of the <span>beatles</span> array.',
        'codeSnippet': 'beatles = ["John", "Paul", "George", "Ringo", "Bert"];<br>beatles.pop<input id="answer-input" type="text" size="2" autofocus autocomplete="off">;',
        'answer': '()'    
        },

        {
        'number': 5,
        'task': 'Insert the missing part of the code to change the value of <span>"None"</span> to <span>"Null"</span> in the <span>dataTypes</span> array.',
        'codeSnippet': 'dataTypes = ["String", "Boolean", "None"];<br>dataTypes<input id="answer-input" type="text" size="3" autofocus autocomplete="off"> = "Null";',
        'answer': '[2]'
        },

        {
        'number': 6,
        'task': 'Insert the missing part of the code to add <span>"five"</span> and <span>"four"</span> to the start of the <span>countdown</span> array.',
        'codeSnippet': 'countdown = ["three", "two", "one", "lift-off"];<br>countdown.<input id="answer-input" type="text" size="7" autofocus autocomplete="off">("five", "four");',
        'answer': 'unshift'
        }
    ];

// function to create html for a question object

    function makeQuestionHtml(num) {
        return '<div id="question-content"><h4 class="pt-3">Question ' + questions[num].number +' / 6</h4><p>' + questions[num].task +'</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">' + questions[num].codeSnippet + '</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>'
    };

// add html for each quiz question to an array

let questionHtml = [];
for (let i=0; i<questions.length; i++) {
    questionHtml.push(makeQuestionHtml(i));
}
 
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

    if ((submittedAnswer === questions[currentQuestionNumber-1].answer) || (currentQuestionNumber===2 && ["'-'", "`-`"].includes(submittedAnswer))) {
        
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

    // update html content
    document.getElementById("changeable-content-subblock").innerHTML = '<div class="answer-background p-3"><h4><i class="fa-solid fa-check pr-2"></i>That&#39;s the right answer!</h4></div><button id="next-question-btn" class="in-quiz-btn btn btn-lg mt-3">Next question <i class="fa-solid fa-chevron-right"></i></button>';

    // add event listeners
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
    // update html content
    document.getElementById("changeable-content-subblock").innerHTML = '<div class="answer-background p-3"><h4><i class="fa-solid fa-xmark pr-2"></i>Incorrect</h4></div><button id="try-again-btn" class="in-quiz-btn btn btn-lg mr-2 mt-3">Try again</button><button id="next-question-btn" class="in-quiz-btn btn btn-lg mt-3">Next question <i class="fa-solid fa-chevron-right"></i></button>';

    // add event listeners
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
