chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "Timer") {
        chrome.notifications.create({
            type: "basic", 
            iconUrl: "notificationimage.jpg",
            title: "Timer!", 
            message: "Время вышло! Сделайте перерыв.", 
            priority: 2
        });
    }
});