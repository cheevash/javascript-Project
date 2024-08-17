const wordE1=document.getElementById('word');
const textE1=document.getElementById('text');
const scoreE1=document.getElementById('score');
const timeE1=document.getElementById('time');

const btnLevelE1=document.getElementById('level-btn');
const settingsE1=document.getElementById('settings');
const levelFormE1=document.getElementById('level-form');
const levelE1=document.getElementById('level');
const gameoverE1=document.getElementById('gameover-contianer');

const words =["หมา","แมว","จระเข้","หมู","นก","ไก่","ลำโพง","ปลา","หนู","ผึ้ง","วัว","ต่อ","มด","ช้าง"];

let randomWord;
let score = 0;
let time = 10; 
const saveMode=localStorage.getItem('mode') !==null ? localStorage.getItem('mode'): 'medium';


let level ='medium'

const timeInterval = setInterval(updateTime,1000);

function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)]
}

function displayWordToUI(){
    randomtext=getRandomWord();
    wordE1.innerHTML=randomtext;
    timeE1.innerHTML=time;
}

textE1.addEventListener('input',(e)=>{
    const inputText=e.target.value;
    if(inputText === randomtext){
        if(saveMode == 'easy'){
            time+=5;
        } 
        else if (saveMode == 'medium'){
            time+=3;
        }
        else{
            time+=2;
        }
        displayWordToUI();
        updateScore();
        e.target.value='';
    }

})

function updateScore(){
    score+=10;
    scoreE1.innerHTML=score;
}

function updateTime(){
    time--;
    timeE1.innerHTML=time;
    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}
function gameOver(){
    gameoverE1.innerHTML=`
    <h1>จบเกมแล้วนะครับ</h1>
    <p>คะแนนของคุณ = ${score} แต้ม</p>
    <button onclick="location.reload()">เล่นอีกครั้ง</button>`;
    gameoverE1.style.display='flex';
}

btnLevelE1.addEventListener('click',()=>{
    settingsE1.classList.toggle('hide');
});

levelE1.addEventListener('change',(e)=>{
    level=e.target.value;
    localStorage.setItem("mode",level)
});
function startgame(){
    levelE1.value=saveMode;
    
    if(saveMode == 'easy'){
        time=15;
    } 
    else if (saveMode == 'medium'){
        time=10;
    }
    else{
        time=5;
    }

    displayWordToUI();
}

startgame();

textE1.focus();