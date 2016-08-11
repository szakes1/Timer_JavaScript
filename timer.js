function countingTimer() {

var today = new Date();

//Beginning of time section
var hours = today.getHours();
if (hours<10) hours = "0"+hours;

var minutes = today.getMinutes();
if (minutes<10) minutes = "0"+minutes;

var seconds = today.getSeconds();
if (seconds<10) seconds = "0"+seconds;
//The end of time section

//Beginning of date section
var day = today.getDate();
if (day<10) day = "0"+day;

var month = today.getMonth()+1;
if (month<10) month = "0"+month;

var year = today.getFullYear();
//The end of date section



 document.getElementById("Timer").innerHTML =
  hours+":"+minutes+":"+seconds+" | "+day+"/"+month+"/"+year;

 setTimeout("countingTimer()", 1000);

}
