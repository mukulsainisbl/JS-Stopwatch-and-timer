let timerdisplay = document.querySelector(".Timerdisplay");
let stopbtn=document.getElementById("stopbtn");
let startbtn =document.getElementById("startbtn");
let resetbtn = document.getElementById("resetbtn");

let msec = 0o00;
let secs = 0o00;
let mins = 0o00;


let timerId=null;


startbtn.addEventListener('click',function(){
    if(timerId != null){
        clearInterval(timerId);
    }
    timerId =setInterval(startTimer,10)
})

stopbtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML=`00 : 00 : 00`;
    msec = secs = mins == 0o00;
})

function startTimer (){
    msec++
    if(msec == 100){
        msec = 0;
        secs++

    }
    if(secs == 60){
        secs =0
        mins++
    }
    
let msecString = msec < 10 ? `0${msec}`:msec;

let secsString= secs < 10 ? `0${secs}`: secs;

let minsStirng= mins < 10 ? `0${mins}`: mins;


timerdisplay.innerHTML = `${minsStirng} : ${secsString} : ${msecString}`
}


