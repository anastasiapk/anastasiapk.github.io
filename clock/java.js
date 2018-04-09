//var current_date = new Date();
//var hour - current_date.getHours();
//var greeting = '';
//
//if(hour >= 0 && hour <= 11) {
//    greeting = 'Good Morning!';
//} else if(hour >= 12 && hour < 18) {
//    greeting = 'good Afternoon!'
//} else if(hour >= 18) {
//    Greeting = 'Good evening!';
//}
//
//document.getElementById("greeting").innerHTML = greeting;
//


function addZero(number) {
    if(number <10) {
        number = "0" + number;
    }
    
    return number;
}


    
    function printTime() {
    var current_date = new Date();
    var hour = (current_date.getHours());
    var minutes = (current_date.getMinutes());
    var seconds = (current_date.getSeconds());

    
    document.getElementById("hours").innerHTML = addZero(hour);
    document.getElementById("minutes").innerHTML = addZero(minutes);
    document.getElementById("seconds").innerHTML = addZero(seconds);
    
}

    setInterval(printTime, 1000);


