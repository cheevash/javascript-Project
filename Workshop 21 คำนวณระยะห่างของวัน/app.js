const button = document.querySelector('button');
const result = document.getElementById('result');

button.addEventListener('click',()=>{
    const data1 =document.getElementById('data1').value
    const data2 =document.getElementById('data2').value

    const starDate = new Date(data1)
    const endDate = new Date(data2)
    
    const times =Math.abs(endDate - starDate) 
    const days = Math.round(times/(1000*60*60*24));
    result.innerText="ห่างกัน"+days+"วัน"
    
    
})