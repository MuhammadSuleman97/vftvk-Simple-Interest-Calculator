var principal = 0;
var rate = 0;
var years = 0;
var YEARR = 0;
var Result = 0;
function compute()
{
    var principal=document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var YEARR = 2020 + years;
    var Interest = principal * years * rate / 100;
    var Result = principal + Interest;
    document.getElementsById("result").innerHTML = 
    "If you deposit" + principal +
    ",\n at an interest rate of " + rate + 
    " %. \nYou will receive an amount of " 
    + Result + ", \nin the year " + YEARR;       
    
}
function Show_value(x){
    document.getElementById("Value").innerHTML = x;
}






