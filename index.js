const display = document.getElementById('clock');
const audio = new Audio('http://www.birding.dk/galleri/stemmermp3/Alauda%20arvensis%201.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    const sdays = formatTime(date.getSeconds());



    display.innerText=`${hour} : ${minutes} : ${seconds}`
}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function snooze() {
    if (alMinutes != '' || alHours != ''){
        var snoozMinutes = 5;
        if  (Number(alMinutes) < 50)  {
            snoozMinutes += Number(alMinutes);
            alMinutes = String(snoozMinutes);
            alHours = alHours;

        } else if (Number(alMinutes) >= 50) {
            snoozMinutes = (Number(alMinutes)+snoozMinutes) - 60;
            if (snoozMinutes === 0 ){
                alMinutes = '00';            
            }else {
                alMinutes = '0' + String(snoozMinutes);
            }
                    
            alHours = Number(alHours) +1;
            String(alHours );
        }
    
        document.getElementById("alarm").innerHTML = 'Alarm: ' + alHours + ':' + alMinutes;

    }    
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);