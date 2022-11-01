const daysEL = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


let newDays = "10 Nov 2022"

function countdown(){
    const newDayDate = new Date(newDays)
    const currentDate = new Date()

    const totalSeconds = (newDayDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000)