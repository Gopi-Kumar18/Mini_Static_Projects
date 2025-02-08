let dateContainer = document.querySelector(".date-container");
let hrsContainer = document.querySelector(".hours");
let minsContainer = document.querySelector(".min");
let secsContainer = document.querySelector(".secs");


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

function formatTime(time){
    return time < 10 ? "0"+time : time;
}

function updateClock() {
    const today = new Date();

    let date = today.getDate();
    // console.log(date);

    let day = weekDays[today.getDay()];
    let month = monthNames[today.getMonth()];

    console.log(day,month);
    console.log(today.getDay(),today.getMonth());

    let hrs = formatTime(today.getHours());
    let mins = formatTime(today.getMinutes());
    let secs = formatTime(today.getSeconds());

    dateContainer.innerHTML = `<p>${day}</p><p><pan>${date}</span></p><p>${month}</p>`;

    hrsContainer.textContent = hrs + ":";
    minsContainer.textContent = mins + ":";
    secsContainer.textContent = secs;
}

setInterval(updateClock, 1000);
