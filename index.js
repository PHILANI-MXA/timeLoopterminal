console.log("Day 2 nodejs example")

setTimeout(function() {
    console.log('3 seconds have passed');
}, 2000);

var time = 0;

var timer = setInterval(function () {
    time +=2
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

