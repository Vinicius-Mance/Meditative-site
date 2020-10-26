//pegar o input a ser pressionado
window.onload = function(){initiateTimer();}

window.onkeydown = function(evt){reset(evt);}

window.onmousemove = function(evt){reset(evt);}

window.onmousedown = function(evt){reset(evt);}

window.onscroll = function(evt){reset(evt);}

window.onmouseover = function(evt){
    mouseOnScreen = true;
    reset(evt);
}

window.onmouseout = function(evt){
    mouseOnScreen = false;
    reset(evt);
}

function initiateTimer(){
  timer = setInterval(startTimer, waiting);
  musicTimer = setInterval(playMusic, waiting);
}

function reset(evt){
  evt.preventDefault();
  resetMusic();
    if (mouseOnScreen === true) {
      initiateTimer();
    }
    if (evt.button == 2) {
      resetMusic();
    }
}

 function playMusic() {
    music.play();
 }

 function resetMusic(){
   resetTimer();
   music.pause();
   music.currentTime = 0;
   clearInterval(musicTimer);
   clearInterval(timer);
 }

let timer;
let musicTimer;
let waiting = 3000;
let music = document.getElementById('music');
let mouseOnScreen;
let timerDisplay = document.querySelector('.timer');
let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime;
let running = 0;

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
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % (1000 * 60)) / 100);
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
