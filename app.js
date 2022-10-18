
// save the quiz in araay 
const quizData = [
    {
        quiz:"Which one is the first fully supported 64-bit operating system",
        ans_A: "Windows Vista",
        ans_B: "Mac",
        ans_C: "Linux",
        ans_D: "Windows XP",
        correct: "c"
    },
    {
        quiz:"Computer Hard Disk was first introduced in 1956 by",
        ans_A: "Dell",
        ans_B: "Apple",
        ans_C: "Microsoft",
        ans_D: "IBM",
        correct: "d"
    },
    {
        quiz:"Which of the following is not a web browser",
        ans_A: "MOSAIC",
        ans_B: "WWW",
        ans_C: "Facebook",
        ans_D: "NETscape navigator",
        correct: "c"
    },
    {
        quiz:"Which protocol is used to send e-mail",
        ans_A: "HTTP",
        ans_B: "POP3",
        ans_C: "SMTP",
        ans_D: "SSH",
        correct: "c"
    },
    {
        quiz:"Which computer program converts assembly language to machine language",
        ans_A: "Interpreter",
        ans_B: "Compiler",
        ans_C: "Comparator",
        ans_D: "Assembler",
        correct: "d"
    },
    {
        quiz:"A computer use which type of number system to calculate and to store data",
        ans_A: "binary",
        ans_B: "octal",
        ans_C: "hexadecimal",
        ans_D: "decimal",
        correct: "a"
    },
    {
        quiz:"Who created the C programming Language",
        ans_A: "Ken Thompson",
        ans_B: "Sennis Ritchie",
        ans_C: "Robin Milner",
        ans_D: "Frieder Nake",
        correct: "b"
    },
    {
        quiz:"Which one is the first high level programming language",
        ans_A: "C",
        ans_B: "COBOL",
        ans_C: "FORTRAN",
        ans_D: "PYTHON",
        correct: "c"
    },
    {
        quiz:"Which one is volatile memory in a computer system",
        ans_A: "HardDisk",
        ans_B: "RAM",
        ans_C: "ROM",
        ans_D: "one Drive",
        correct: "b"
    },
    {
        quiz:"One Terabyte (1 TB) is equal to",
        ans_A: "1024 GB",
        ans_B: "2000 GB",
        ans_C: "1012 GB",
        ans_D: "1028 GB",
        correct: "a"
    },
];


let currentQuestion = 0;    // counter
let score = 0 ; //count your answer
const question = document.querySelector("h2")
const a = document.getElementById("answerA");
const b = document.getElementById("answerB");
const c = document.getElementById("answerC");
const d = document.getElementById("answerD");
const next = document.getElementById("next");
const ans_A = document.getElementById("a");
const ans_B = document.getElementById("b");
const ans_C = document.getElementById("c");
const ans_D = document.getElementById("d");
let answersEl = document.querySelectorAll(".answer");


function uncheck(){
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;

    });
}
function setQuiz(){

    // this part to remove checked mark from input radio
    
        uncheck();
    //--------------------------------------------------

    // this part to set the question and answer
    question.innerText = quizData[currentQuestion].quiz;
    a.innerText =  quizData[currentQuestion].ans_A;
    b.innerText =  quizData[currentQuestion].ans_B;
    c.innerText =  quizData[currentQuestion].ans_C;
    d.innerText =  quizData[currentQuestion].ans_D;
}
function getAns(){
    //this FUNC to assign your answer value to val = ans by save its ID
    let answer = undefined;
    answersEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;

        }
        
    });
    return answer;
}

    





   

   


//---------------------------------------------------------------
// here we statr
setQuiz();
next.addEventListener("click" , () => {
    let answer = getAns();
    // console.log(answer);
    if(answer){ // check if the user chosse answer
        if(answer === quizData[currentQuestion].correct){ //check if corecct increace score
            score++;
        }
        currentQuestion++;
        if(currentQuestion <quizData.length){
            setQuiz();
        }else{
        const result = document.getElementById("quizBox");
        result.innerHTML = `<div class = "result"><h1>YOUR score ${score} / ${quizData.length}</h1></div>` // print result
        }
    }
    console.log(answersEl.checked);
       let vip= document.getElementById("quizBox");
       vip.classList.toggle("error") 
    
    
		});
       
