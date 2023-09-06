let currentQuestionNumber;
let score;

const question1Html = '<div id="question-content"><h4 class="pt-3">Question 1 / 6</h4><p>Insert the missing part of the code to return the number of items in the <span>moons</span> array.</p><div class="answer-background p-3"><p class="answer-text">moons = [“Charon”, “Hydra”, “Kerberos”, “Nix”, “Styx”];<br>moons.<input type="text" size="6" autofocus>;</p></div><button id="submit-btn" class="in-quiz-btn btn btn-lg mt-3">Submit answer</button></div>';

const questionAnswers = ['length', '"-"', 'push', 'pop', '[2]', 'unshift'];

// add event listener to "Start the quiz" button

startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz);

// function to start the quiz

function startQuiz() {
    currentQuestionNumber = 1;
    score = 0;
    document.getElementById("changeable-content").innerHTML = question1Html;
};

// add event listener to "Submit answer" button

submitAnswerButton = document.getElementById("submit-btn");
submitAnswerButton.addEventListener("click", checkAnswer);

// function to check whether the correct answer has been given

function checkAnswer(questionNumber) {

}


// add event listener to <a> elements

links = document.getElementsByTagName("a");
for (let i=0; i<=links.length; i++) {
    links[i].addEventListener("click", showLinkUnavailableAlert);
}

// function to show an alert if a link is clicked

function showLinkUnavailableAlert() {
    alert("This link is not currently available.")
}