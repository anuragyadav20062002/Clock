var secondHand= document.querySelector('.second-hand')


function setDate(){
var now = new Date();
var sec= now.getSeconds()
var secondsDegree= ((sec/60)*360);
secondHand.style.transform= `rotate(${secondsDegree}deg)`;
console.log(sec);
}

setInterval(setDate,1000);