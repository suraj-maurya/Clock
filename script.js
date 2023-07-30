let Hour_Box=document.querySelector('#Hour');
let Minute_Box=document.querySelector('#Minute');
let Second_Box=document.querySelector('#Sec');


let Time = function(){
let Hour=new Date().getHours();
Hour_Box.textContent=Hour;
let Minute=new Date().getMinutes();
Minute_Box.textContent=Minute;
let Sec=new Date().getSeconds();
Second_Box.textContent=Sec;
console.log(Sec);
}

setInterval(Time, 1000);