function registering(){
    const fullname= document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password= document.getElementById('password').value;
    sessionStorage.setItem('fullname',fullname);
    sessionStorage.setItem('EmailAdded', email);
    sessionStorage.setItem('PasswordAdded', password);
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

function login(){
    const InputedEmail = document.getElementById('login-email').value;
    const InputedPassword = document.getElementById('login-password').value;
    const OriginalEmail = sessionStorage.getItem('EmailAdded');
    const OriginalPassword = sessionStorage.getItem('PasswordAdded');
    if (InputedEmail === OriginalEmail && InputedPassword === OriginalPassword){
        document.getElementById('login').style.display = 'none';
        document.getElementById('exam-brief').style.display = 'block';
        fullname= sessionStorage.getItem('fullname');
        document.getElementById('name').innerHTML = `Welcome, ${fullname}`;
        alert("You may proceed");
    } else {
        alert ("either password or email is incorrect")
    }
}
const questions= [{question: "what is the most common surname in the United States?", options: ["Williams", "Smith", "Johnson", "Jones"], answer: "Smith"},
{question: "Which planet has the most moons?", options: ["Venus", "Neptune", "Saturn", "Jupiter"], answer:"Saturn"},
{question: "Which Netflix show had the most streaming views in 2021?", options: ["game of thrones", "squid game", "breaking bad", "stranger things"], answer:"squid game"},
{question: "In which country is the chernobyl nuclear plant located?", options: ["Russia", "Germany", "Ukraine", "China"], answer: "Ukraine"},
{question: "What is the longest river in the world?", options:["The Nile", "The Amazon", "The Yangtze", "The Mekong"], answer:"The Nile"},
{question: "How many keys does a classic piano have?", options: ["65","92","88","74"], answer: "88"},
{question: "When was Netflix founded?", options: ["2003", "1999", "2001", "1997"], answer:"1997"},
{question: "How many bones do sharks have?", options:["173", "zero", "86", "112"], answer: "zero"},
{question: "Which country is known as the land of the rising sun?", options: ["China", "North Korea", "South Korea", "Japan"], answer: "Japan"},
{question: "When did the titanic sink?", options: ["1912", "1903", "1907", "1913"], answer: "1912"}];

let questionindex=0;
let currentTime;

function timerStart(){
    let remaining = 60;
    document.getElementById('time').innerHTML = remaining;
    currentTime = setInterval (() => {
        remaining --;
        document.getElementById('time').innerHTML = remaining;
        if (remaining <=0){
            clearInterval(currentTime);
            answers.appendChild('did not answer')
            next();
        }
    }, 1000);
}
function start(){
    document.getElementById('exam-brief').style.display='none';
    document.getElementById('exam').style.display='block';
    display();
}
let answers = [];
function selected(answer){
    answers[questionindex]= answer;
    next();
}
function next(){
    questionindex ++;
    clearInterval(currentTime);
    display();
}
function display() {
    if (questionindex < questions.length){
        document.getElementById('text-of-question').innerHTML= questions[questionindex].question;
        const choices = document.getElementById('options');
        choices.innerHTML='';
        questions[questionindex].options.forEach(chosen => {
            const chosenButton = document.createElement('button');
            chosenButton.innerHTML=chosen;
            chosenButton.onclick = ()=> selected(chosen);
            choices.appendChild(chosenButton);
        });
        timerStart();
    } else{
        resultDisplay();
    }
}
let correct=0;

function resultDisplay() {
    document.getElementById('exam').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    for (let i=0; i<questions.length; i++){
        if (questions[i].answer == answers[i]){
            correct++;
        }
        const output= document.createElement('p');
        output.innerHTML= 'for Question ${i + 1} : your answer: ${answers[i]}, Correct answer: ${questions[i].answer} \n';
        document.getElementById('result-output').innerHTML= output;
    }
    document.getElementById('result-score').innerHTML = 'your score is ${correct} out of 10';
}

