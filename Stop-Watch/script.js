let startBtn = document.querySelector(".timer-start");
let resetBtn = document.querySelector(".timer-reset");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let second = 00;
let minute = 00;
let hour = 00;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
let timeInterval = 0;
let timer = "stop"


function stopwatch() {
    second++
    if (second/60 === 1) {
        minute++
        second =00
    }
    if (minute/60 === 1) {
        hour++
        minute = 00
    }
    if (hour/24 === 1) {
        
        hour =00
    }



    if (second < 10) {
        leadingSeconds = "0" + second
    }
    else{
        leadingSeconds = second
    }


    if (minute < 10) {
        leadingMinutes = "0" + minute
    }
    else{
        leadingMinutes = minute
    }

    if (hour < 10) {
        leadingHours = "0" + hour
    }
    else{
        leadingHours = hour
    }

    

   
    seconds.innerHTML = leadingSeconds
    minutes.innerHTML =leadingMinutes
    hours.innerHTML = leadingHours
}







startBtn.addEventListener("click",(a)=>{
console.log("hello");
startBtn.classList.toggle("scale")

if (timer == "stop") {
    timeInterval = window.setInterval(stopwatch,1000);
    timer ="start"
    startBtn.style.backgroundColor ="orange"
    startBtn.innerHTML = "&#10074" + "&#10074"
    startBtn.style.scale ="1.2"
    
}
else{
    window.clearInterval(timeInterval)
    timer ="stop"
    startBtn.innerHTML = "&#9654"
    startBtn.style.backgroundColor ="#4a8022"
    startBtn.style.scale ="1"
   
}



})


resetBtn.addEventListener("click",(a)=>{
    window.clearInterval(timeInterval)
    second = 0
    minute = 0
    hour = 0
// resetBtn.classList.toggle("scale")
    seconds.innerHTML =  "00"
    minutes.innerHTML = "00"
    hours.innerHTML =  "00"
    startBtn.style.backgroundColor ="#4a8022"
    startBtn.innerHTML = "&#9654"
    startBtn.style.scale ="1"
    timer ="stop"
})



