let currentQuestionNumber = 0;
let score;

const questionHtml = ['<div id="question-content"><h4 class="pt-3">Question 1 / 6</h4><p>Insert the missing part of the code to return the number of items in the <span>moons</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">moons = [“Charon”, “Hydra”, “Kerberos”, “Nix”, “Styx”];<br>moons.<input id="answer-input" type="text" size="6" autofocus autocomplete="off">;</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 2 / 6</h4><p>Insert the missing part of the code to return the string <span>"merry-go-round"</span>.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">words = ["merry", "go", "round"];<br>words.join(<input id="answer-input" type="text" size="3" autofocus autocomplete="off">);</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 3 / 6</h4><p>Insert the missing part of the code to add <span>"macaroni"</span> to the end of the <span>pasta</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">pasta = ["spaghetti", "penne", "fusilli"];<br>pasta.<input id="answer-input" type="text" size="4" autofocus autocomplete="off">("macaroni");</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 4 / 6</h4><p>Insert the missing part of the code to remove <span>"Bert"</span> from the end of the <span>beatles</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">beatles = ["John", "Paul", "George", "Ringo", "Bert"];<br>beatles.pop<input id="answer-input" type="text" size="2" autofocus autocomplete="off">;</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 5 / 6</h4><p>Insert the missing part of the code to change the value of <span>"None"</span> to <span>"Null"</span> in the <span>dataTypes</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">ataTypes = ["String", "Boolean", "None"];<br>dataTypes<input id="answer-input" type="text" size="3" autofocus autocomplete="off"> = "Null";</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>', '<div id="question-content"><h4 class="pt-3">Question 6 / 6</h4><p>Insert the missing part of the code to add <span>"five"</span> and <span>"four"</span> to the start of the <span>countdown</span> array.</p><div id="changeable-content-subblock"><div class="answer-background p-3"><p class="answer-text">countdown = ["three", "two", "one", "lift-off"];<br>countdown.<input id="answer-input" type="text" size="7" autofocus autocomplete="off">("five", "four");</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div></div>'];

const questionAnswers = ['length', '"-"', 'push', '()', '[2]', 'unshift'];

const correctMessageHtml = '<div class="answer-background p-3"><h4><i class="fa-solid fa-check pr-2"></i>That&#39;s the right answer!</h4></div><button id="next-question-btn" class="in-quiz-btn btn btn-lg mt-3">Next question <i class="fa-solid fa-chevron-right"></i></button>'

const incorrectMessageHtml = '<div class="answer-background p-3"><h4><i class="fa-solid fa-xmark pr-2"></i>Incorrect</h4></div><button id="try-again-btn" class="in-quiz-btn btn btn-lg mr-2 mt-3">Try again</button><button id="next-question-btn" class="in-quiz-btn btn btn-lg mt-3">Next question <i class="fa-solid fa-chevron-right"></i></button>'

// add event listener to "Start the quiz" button

startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz);

// function to start the quiz

function startQuiz() {
    // set score to 0
    score = 0;

    // display question 1
    showNextQuestion();
};

// function to check whether the correct answer has been given

function checkAnswer() {
    submittedAnswer = document.getElementById("answer-input").value;
    console.log(submittedAnswer);

    if ((submittedAnswer === questionAnswers[currentQuestionNumber-1]) || (currentQuestionNumber===2 && submittedAnswer === "'-'")) {
        
        // increment the score by 1
        score++;
    
        showCorrectMessage();
    }

    else {
        showIncorrectMessage();
    }
};

function showCorrectMessage() {
    document.getElementById("changeable-content-subblock").innerHTML = correctMessageHtml;

    if (currentQuestionNumber<6) {
        nextQuestionButton = document.getElementById("next-question-btn");
        nextQuestionButton.addEventListener("click", showNextQuestion);
    }

    else {
        document.getElementById("next-question-btn").innerHTML = "Show my score!"
        // add event listener to show my score button
    }
   
};

function showIncorrectMessage() {
    document.getElementById("changeable-content-subblock").innerHTML = incorrectMessageHtml;

    if (currentQuestionNumber<6) {
        nextQuestionButton = document.getElementById("next-question-btn");
        nextQuestionButton.addEventListener("click", showNextQuestion);
    }

    else {
        document.getElementById("next-question-btn").innerHTML = "Show my score!"
        // add event listener to show my score button
    }
   
};

function showNextQuestion() {
    // increment question number by 1
    currentQuestionNumber++;

    document.getElementById("changeable-content").innerHTML = questionHtml[currentQuestionNumber-1];
    
     // add event listener to "Submit answer" button
     submitAnswerButton = document.getElementById("submit-btn");
     submitAnswerButton.addEventListener("click", checkAnswer);
};

// add event listener to <a> elements

links = document.getElementsByTagName("a");
for (let i=0; i<=links.length; i++) {
    links[i].addEventListener("click", showLinkUnavailableAlert);
};

// function to show an alert if a link is clicked

function showLinkUnavailableAlert() {
    alert("This link is not currently available.")
}