function Show_value(x){
    document.getElementById("Value").innerHTML = x;
}
function compute()
{
    
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = document.getElementById("result");

    
    Interest = principal * years * rate / 100;

    
    if (principal < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    
    thisYear = new Date().getFullYear();
    futureYear = thisYear + Number(years);

    
    result.innerHTML = "</br>If you deposit <mark>" + principal + "</mark>,</br> at an interest rate of <mark>" + rate + "</mark> %.</br> You will receive an amount of <mark>"  + Interest + "</br></mark> in the year <mark>" + futureYear + "</mark>.";
}
function Slider() {
    
    rate = document.getElementById("rate").value;
    rateNumber = document.getElementById("Ratee");

    
    rateNumber.innerHTML = rate + " %";
}