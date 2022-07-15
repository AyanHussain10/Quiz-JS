function populate(){
    if(quiz.IsEnded()){
        //show score
        showScores();
    }
    else{
        //show question
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;

        //show choices
        var choices=quiz.getQuestionIndex().choices;
        for(var i=0; i<choices.length; i++){
            var element=document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            guess("btn"+i, choices[i]);
        }
        showProgress();
    }
};
function guess(id, guess){
    var button=document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currenQuestionNumber=quiz.questionIndex+1;
    var element=document.getElementById("progress");
    element.innerHTML="Question "+currenQuestionNumber+" of "+ quiz.questions.length;
}

function showScores(){
    var gameOverHtml="<h1>Result</h1>";
    gameOverHtml+="<h2 id= 'score'> Your scores: "+quiz.score+ "<h2/>";
    var element=document.getElementById("quiz");
    element.innerHTML=gameOverHtml;
};

var questions = [
    new Question("which one is not an object oriented pragramming language",["Java","c#","c++","c"], "c"),
    new Question("which language is used for styling web pages?",["HTML","JQuery","css","XML"], "css"),
    new Question("There are _____ main components of object oriented programming.",["1","6","2","4"], "4"),
    new Question("Which language is used for web apps?",["PHP","Python","Javascript","All"], "All"),
    new Question("MVC is a ______.",["Language","Library","Framework","All"], "Framework"),
];

var quiz=new Quiz(questions);

populate();
