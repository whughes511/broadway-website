// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// Accordion Function
function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-flat-pomegranate";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-flat-pomegranate", "");
    }
}

function myAccFuncMobile(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-flat-pomegranate";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-flat-pomegranate", "");
    }
}

// Live Stream Countdown Timer
var curday;
var secTime;
var ticker;
 
function getSeconds() {
 var nowDate = new Date();
 var dy = 0 ; // Sunday
 var countertime = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),10,15,0); // 10:15am
 
 var curtime = nowDate.getTime(); //current time
 var atime = countertime.getTime(); //countdown time
 var diff = parseInt((atime - curtime)/1000);
 if (diff > 0) { curday = dy - nowDate.getDay() }
 else { curday = dy - nowDate.getDay() -1 } //after countdown time
 if (curday < 0) { curday += 7; } //already after countdown time, switch to next week
 if (diff <= 0) { diff += (86400 * 7) }
 startTimer (diff);
}
 
function startTimer(secs) {
 secTime = parseInt(secs);
 ticker = setInterval("tick()",1000);
 tick(); //initial count display
}
 
function tick() {
 var secs = secTime;
 if (secs>0) {
  secTime--;
 }
 else {
  clearInterval(ticker);
  getSeconds(); //start over
 }
 
 var days = Math.floor(secs/86400);
 secs %= 86400;
 var hours= Math.floor(secs/3600);
 secs %= 3600;
 var mins = Math.floor(secs/60);
 secs %= 60;
 
 //update the time display
 document.getElementById("days").innerHTML = curday;
 document.getElementById("hours").innerHTML = ((hours < 10 ) ? "0" : "" ) + hours;
 document.getElementById("minutes").innerHTML = ( (mins < 10) ? "0" : "" ) + mins;
 document.getElementById("seconds").innerHTML = ( (secs < 10) ? "0" : "" ) + secs;
}

//Kids Info Tab
function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-border-pomegranate", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-pomegranate";
  }
