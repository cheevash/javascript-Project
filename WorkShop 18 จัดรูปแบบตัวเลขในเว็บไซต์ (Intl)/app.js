const amontEl =document.getElementById('amount');
const outputEl= document.getElementById('output');

amontEl.addEventListener("input",(e)=>{
    const number = e.target.value;
    const result = Intl.NumberFormat("en",{notation:"compact"}).format(number);
    outputEl.innerText= result;
});