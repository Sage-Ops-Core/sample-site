
let path = document.querySelector("path");
let pathLength = path.getTotalLength();

//Make dash based on the height

path.style.strokeDasharray = pathLength + ' ' + pathLength;

//Hide it before you scroll and reveal as you scroll
path.style.strokeDashoffset = pathLength;


//add eventlistener

window.addEventListener('scroll', () => {

    //what percentage to scroll down
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    //length to offset the dashes
    var drawLength = pathLength * scrollPercentage;

    //draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
})



const countDown = () => {
    //set the date we are counting down to
    const countDownDate = new Date("Nov 30, 2022 00:00:00").getTime();

    //Get today's date and time
    const nowDate = new Date().getTime();

    //find the distance between now and the count down date
    let distance = countDownDate - nowDate;

    //How does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Time calculations for days, hours, minutes and seconds
    const textDay = Math.floor(distance / day);
    const textHour = Math.floor((distance % day) / hour);
    const textMinute = Math.floor((distance % hour) / minute);
    const textSecond = Math.floor((distance % minute) / second);

    //Display the result
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;


    if (distance < 0) {
        clearInterval(countDown);
        document.getElementById("countdown").style.display="none";
    }
   

};

setInterval(countDown,1000);






