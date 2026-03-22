let startButton = document.getElementById("startButton");
let timeLeft = document.getElementById("timeLeft");

function updateTime () {
    chrome.alarms.get("Timer",  (alarm) =>{
        if (alarm) {
            let endingTime = alarm.scheduledTime - Date.now();
            if (endingTime > 0) {
                const minutes = Math.floor(endingTime / 60000);
                const seconds = Math.floor((endingTime % 60000) / 1000);
                timeLeft.innerText = `${minutes}: ${seconds}`; 
            }
        } else {
            timeLeft.innerText = `0`;
        }
    });
}

updateTime();
setInterval(updateTime, 1000);

startButton.addEventListener("click", () => {
    chrome.alarms.create("Timer", {delayInMinutes: 0.5});
    updateTime();
});