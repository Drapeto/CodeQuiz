var questions = [
    {
        question: "What is querySelector?",
        options: ["button", "math", "object method", "array"],
        answer: "object method"
    },
    {
        question: "What does the acronym JSON mean?",
        options: ["javaScript object number", "javaScript object node", "javaScript object notation"],
        answer: "javaScript object notation"
    },
    {
        question: "The Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Which is an example of a variables?",
        options: ["var price1 = 5;", "var x = 5;", "var pi = 3.14;", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which is an example of a JavaScript Object converted into JSON?",
        options: ["A. var myObj = { };", "B. var myJSON = JSON.stringify(myObj);"],
        answer: "var myJSON = JSON.stringify(myObj);"
    },
]
var outline = questions.length;
var questNum = 0;
var timer = document.getElementById("timer");
var submitBtn = document.getElementById("btn_submit_initials")
var score = 0;
var interval;
var highScores = new Array();

function displayQuestionAndAnswer(questNum) {
    var options;
    var question = "";
    var answer = "";
    var choiceNum = questions[questNum]['options'].length;

    question += '<p>' +questions[questNum]['question'] +'</p>';

    options = "<ul>";
    for (i = 0; i < choiceNum; i++) {
        var selected = questions[questNum]['options'][i];
        options += '<li class="options" onclick="grade(\'' + selected + '\')">' + selected + '</li>';
    }
    options += "</ul>";

    answer += question + options;

    document.getElementById("intro").innerHTML = answer;
}

function stopTimer() {
    clearInterval(interval);
}

function scorePoint() {
    score = score + 20;
}

function grade(answer) {
    if (answer === questions[questNum]['answer']) {
        scorePoint();
        questNum++;
        if (outline > questNum) {
            displayQuestionAndAnswer(questNum);
        }
        else {
            getInitials();
        }
    }
    else {
        questNum++;
        seTime = setTime - 15;
    if (outline > questNum) {
        displayQuestionAndAnswer(questNum);
    }
    else {
         getInitials();
        }   

    }

}

function highScores() {
    var initials = document.getElementById("initials").value;
    localStorage.setItem("initials", initials);
    playerInitialsAndScore = localStorage.getItem('initials')+' - '+ score;
    highScores.push(playerInitialsAndScore);
    document.getElementById("score").innerText = highScores.toString();
}

function getInitials() {
    stopTimer();
    gatherInitials =
    "<input type='text' id='initials' value='' placeholder='Enter Your Initials Here'><button id='btn_submit_initials'>Submit</button>";
    document.getElementById("intro").innerHTML = gatherInitials;
    document.getElementById("btn_submit_initials").addEventListener("click", highScores);
}
function startTimer() {
    document.getElementById("start").style.display = "none";
    displayQuestionAndAnswer(questNum);
    
    setTime = 60;
    interval = setInterval(function() {
        setTime = setTime - 1;
        timer.textContent = setTime;
        if(setTime <= 0)
        {
            getInitials();       
         }
    }, 1000);
}

start.addEventListener("click", startTimer);