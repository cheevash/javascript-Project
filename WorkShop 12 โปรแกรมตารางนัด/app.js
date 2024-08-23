const contDownForm =document.getElementById('contDownForm');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');
const countDownEl =document.getElementById('contdown')

const countdownTitleEl = document.getElementById('contdown-title');
const countdownBtnEl = document.getElementById('contdown-btn');
const timeEl =document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeInfoEl =document.getElementById('comlete-info');
const comleteBtnEl = document.getElementById('complete-btn')

//ตัวแปรคุมการททำงาน

let countDownTitle= '';
let counDownDate='';

let countDownValue=Date;
let countDownActive;
let saveCountDown

//ตัวแปรแปลวหน่อยเวลา
 const second =1000
 const minute =second*60;
 const hour = minute*60;
 const day = hour*24;

 contDownForm.addEventListener('submit',updateCountDown);

 function updateCountDown(e){
    e.preventDefault();
    countDownTitle=e.srcElement[0].value
    counDownDate=e.srcElement[1].value

    if(countDownTitle === ''){
        alert("ป้อนข้อมูลไม่ครบ")
    }
    else{
        saveCountDown={title:countDownTitle,date:counDownDate};
        localStorage.setItem("countDown",JSON.stringify(saveCountDown));
        countDownValue=new Date(counDownDate).getTime();// เวลาที่ตั้งไว้
        setUpTime();
    }
 }

 function setUpTime(){
    countDownActive=setInterval(()=>{
        // ตั้งเอาไว้ - ปัจจุบัน
        const now = new Date().getTime();
        const distance = countDownValue - now;
        const days = Math.floor(distance/day);
        const hours=Math.floor((distance%day)/hour);
        const minutes=Math.floor((distance%hour)/minute);
        const seconds=Math.floor((distance%minute)/second);
        inputContainer.hidden=true;

        if (distance<0){
            //หมดเวลา
            countDownEl.hidden=true;
            completeEl.hidden=false;
            completeInfoEl.textContent=`${countDownTitle}วันที่ ${counDownDate}`;
            clearInterval(countDownActive);
        }
        else{
            //นับถอยหลัง
            countdownTitleEl.textContent =`${countDownTitle}`;
            timeEl[0].textContent=`${days}`;
            timeEl[1].textContent=`${hours}`;
            timeEl[2].textContent=`${minutes}`;
            timeEl[3].textContent=`${seconds}`;
            countDownEl.hidden=false;
            completeEl.hidden=true;
        }
    },second);
 }

 function callDatainStore(){
    if(localStorage.getItem("countDown")){
        inputContainer.hidden=true;
        saveCountDown=JSON.parse(localStorage.getItem("countDown"));
        countDownTitle=saveCountDown.title;
        counDownDate=saveCountDown.date;
        countDownValue=new Date(counDownDate).getTime();
        setUpTime();
    }
 }

 function reset(){
    localStorage.removeItem("countDown");
    countDownEl.hidden=true;
    completeEl.hidden=true;
    inputContainer.hidden=false;
    clearInterval(countDownActive);
    countDownTitle='';
    counDownDate='';
 }

 callDatainStore();

 countdownBtnEl.addEventListener('click',reset);
 comleteBtnEl.addEventListener('click',reset);

