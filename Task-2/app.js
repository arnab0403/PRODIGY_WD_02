let [mil,sec,min,hr]=[0,0,0,0];
let timer = null;
let start = document.querySelector(".start");
let time = document.querySelector(".time");
let stop = document.querySelector(".stop");
let reset =document.querySelector(".reset");
let lap=document.querySelector(".lap");

function stopwatch(){
    mil++;
    if(mil==100){
    mil=0;
    sec++;
    if(sec==60)
    {
        sec=0;
        min++;
        if(min==60)
        {   
            min=0;
            hr++;
        }
    }
}
    a= hr<10 ? "0"+hr :hr;
    b= min<10 ? "0"+min :min;
    c= sec<10 ? "0"+sec :sec;
    d= mil<10 ? "0"+mil:mil;
    time.innerText=a+":" + b+":" + c+":"+d;
    console.log(a,b,c,d);
    
}
function stopwatchn()
{
    clearInterval(timer);
}

function watchstar(){
    timer=setInterval(stopwatch,10);
}

reset.addEventListener("click",()=>{
    time.innerText="00:00:00:00";
    clearInterval(timer);
    sec=0;
    hr=0;
    min=0;
    start.disabled=false;
    let laptext=document.querySelector(".lap_text");
    laptext.innerText="Press Lap to Record";
})

stop.addEventListener("click",()=>{
    stopwatchn();
    start.disabled=false;
})


start.addEventListener("click",()=>{
watchstar();
console.log("click");
start.disabled=true;
})


lap.addEventListener("click",()=>{
    let laptext=document.querySelector(".lap_text");
    laptext.innerText="Lap "+a+":" + b+":" + c +":"+d;
    console.log("click");
})