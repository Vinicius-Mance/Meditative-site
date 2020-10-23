//pegar o input a ser pressionado
let teste = document.querySelector('*');
teste.addEventListener("keypress", stopAndLog);
teste.addEventListener("click", stopAndLog);
teste.onmousemove = function(evt){stopAndLog(evt);}
window.onload = function(){infiniteReset();}
window.onscroll = function(evt){stopAndLog(evt);}
teste.onmouseover = function(evt){stopAndLog(evt);}
teste.onmouseout = function(){clearInterval(timer);}
let timer = "";
function infiniteReset(){
  timer = setInterval(startTimer,3000);
}

function stopAndLog(evt){
  resetTimer();
  clearInterval(timer);
  infiniteReset();
  console.log(evt);
}

var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var running = 0;

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = 1;
  }
}

function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  running = 0;
  timerDisplay.innerHTML = "Don't do anything";
}
