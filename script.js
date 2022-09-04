function openCountDown(){
    const openDate = new Date("January 14,2023 10:00");
    

    const now = new Date();
   
    const diff = openDate-now;
   
    
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor (diff/msInDay);
   

    document.querySelector(".days").textContent = displayDay; 
   

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    
    document.querySelector(".min").textContent = displayMinute;

    const displaySec = Math.floor ((diff%msInMinute)/msInSecond);
    
    document.querySelector(".sec").textContent = displaySec;

    if (diff<=0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".min").textContent = 0;
        document.querySelector(".sec").textContent = 0;
        clearInterval(timer); 
        
        
        openDay(); 
    }
}

let timer = setInterval(openCountDown,1000); 

function openDay(){
    const heading = document.querySelector("h1");
    heading.textContent = "Welcome to BRIEF Dental & cosmetology clinic, we are finally open!";
    heading.classList.add("event");
}



