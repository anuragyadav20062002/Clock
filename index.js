var secondHand= document.querySelector('.second-hand')
var minuteHand= document.querySelector('.min-hand')
var hourHand= document.querySelector('.hour-hand');


function setDate(){
var now = new Date();
var sec= now.getSeconds()
var secondsDegree= ((sec/60)*360)+90;
secondHand.style.transform= `rotate(${secondsDegree}deg)`;

var min= now.getMinutes();
var minuteDegree= ((min/60)*360)+90;
minuteHand.style.transform=`rotate(${minuteDegree}deg)`;

var hour= now.getHours();
var hourDegree= ((hour/12)*360)+90;
minuteHand.style.transform=`rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000);