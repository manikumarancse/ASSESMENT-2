// creating an array  to hold the questions and their respective options 
const questions = [
    {
        question: "Which firm has Ratan Tata just invested in on 10th February 2016?",
        answer: [
            { text: "Invictus Oncology Pvt Ltd", correct: true},
            { text: "Tracxn", correct: false},
            { text: "DogSpot", correct: false},
            { text: "FirstCry", correct: false},
        ]
    },{
        question: "Which among the following is the birthplace of Ratan Tata?",
        answer: [
            { text: "Delhi", correct: false},
            { text: "Mumbai", correct: true},
            { text: "Lucknow", correct: false},
            { text: "Pune", correct: false},
        ]
    },{
        question: "When was Ratan Tata born?",
        answer: [
            { text: "28-dec-1937", correct: true},
            { text: "28-dec-1938", correct: false},
            { text: "28-dec-1939", correct: false},
            { text: " 28-dec-1940", correct: false},
        ]
    },{
        question: "What is the middle name of Ratan Tata?",
        answer: [
            { text: "Smar", correct: false},
            { text: "Saman", correct: false},
            { text: "Vijoy", correct: false},
            { text: "Naval", correct: true},
        ]
    },{
        question: "When did Ratan Tata received highest civilian award of India , the Padama Vibhushan?",
        answer: [
            { text: "2006", correct: false},
            { text: "2008", correct: true},
            { text: "2009", correct: false},
            { text: "2011", correct: false},
        ]
    },{
        question: "When did Ratan Tata join TATA group?",
        answer: [
            { text: "1961", correct: false},
            { text: "1963", correct: false},
            { text: "1962", correct: true},
            { text: "1964", correct: false},
        ]
    },{
        question: " Whwn was Ratan Tata appointed as the chairman of Tata Group ?",
        answer: [
            { text: "1995 ", correct: false},
            { text: "1991", correct: true},
            { text: "1997", correct: false},
            { text: "1993 ", correct: false},
        ]
    },{
        question: "ratan Tata started his career in which of the following company of Tata group ?",
        answer: [
            { text: " Tata Power", correct: false},
            { text: "Tata Steel", correct: true},
            { text: "Tata Motors", correct: false},
            { text: "Tcs", correct: false},
        ]
    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const feedBack = document.getElementById("feedback");
const bgclr = document.getElementById("bgclr")

let currentquestionIndex = 0;
let score = 0;

// stating point of the quiz 
function startQuiz(){
    currentquestionIndex=0;
    score=0;
    nextButton.innerHTML= "NEXT";
    showQuestion();


}
// functions to display questions 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

// to show the proper option based on the question 
    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}
// restart fun to restart the quiz once again
function resetState(){
    feedBack.innerHTML = ""
    bgclr.classList.remove('correct');
    bgclr.classList.remove('incorrect');

    nextButton.style.display= 'none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// function to get the clicked option 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    // feed back for particular question
    if(isCorrect){
        selectedBtn.classList.add('correct');
        feedBack.innerHTML = `&#9989; HEYY.... YOU MADE A SOUND DECISION. SCORE:: ${score +1}`;
        bgclr.classList.add('correct');

        score++;


    }else{
        selectedBtn.classList.add('incorrect');
        feedBack.innerHTML = "OOPS...&#10060 MISSTEP ...KEEP CALM AND TRY NEXT ";
        bgclr.classList.add('incorrect');
        

    }
// to display the color based on the correct value 
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");


        }
        button.disabled = true;

    });
    nextButton.style.display = "block";




}
// function to show the score at the last 
function showScore(){
    resetState();
    questionElement.innerHTML = `YOU SCORED ${score} OUT OF ${questions.length} ! `;
    if(score > questions.length/2 ){
        feedBack.innerHTML = "WOW, THAT WAS AWESOME. YOU MADE A GREAT CALLS. &#9989; ";
    }else{
        feedBack.innerHTML = "CLOSE BUT NO CIGAR. TRYING IS ALWAYS BETTER THAN ACHIEVING ";

    }
    
    nextButton.innerHTML = "PLAY AGAIN";
    nextButton.style.display = "block"
}
// function for the button to move next 
function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex < questions.length){
        showQuestion();

    }else{
        showScore();

    }
}
// adding event listner for the button 
nextButton.addEventListener("click", ()=>{
    if(currentquestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();

    }
})
startQuiz();
