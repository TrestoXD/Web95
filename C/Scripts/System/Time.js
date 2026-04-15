let date = new Date();
let hour = 0;
let min = 0;

function updateClock(){
    date = new Date();
    hour = String(date.getHours()).padStart(2, '0');
    min = String(date.getMinutes()).padStart(2, '0');
    console.log(hour, min);
    document.getElementById('widget-time').innerText = (`${hour}:${min}`);
}

updateClock();

setInterval(updateClock, 1000);