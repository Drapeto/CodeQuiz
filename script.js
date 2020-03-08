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
    question: "The Element Object represents and HTML element, like P, DIV, A, TABLE, or any other HTML element.",
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
    options: ["A. var myObj = { "":"", "":, "":"" };", "B. var myJSON = JSON.stringify(myObj);"],
    answer: "var myJSON = JSON.stringify(myObj);"
},
]
var outline = questions.length;
var questNum = 0;
var timer = document.getElementById("timer");
var submitBtn = document.getElementById("submitBtn")
var score = 0;
var interval;
var highScores =new Array();
var options;
var question = "";
var answer = "";
var choiceNum = questions[questNum]['options'].length

question += '<p>'