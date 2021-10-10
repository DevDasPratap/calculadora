window.onload = function(){
    var CurrentDate = new Date();
    var epm = document.getElementById("epm").innerHTML = CurrentDate.toLocaleString('default', { month: 'long' }) + " " + CurrentDate.getFullYear();
}

function calculate() {
    
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var duration = document.getElementById("duration");
    var payment = document.getElementById("mp");
    var total = document.getElementById("tip");
    var totalinterest = document.getElementById("tap");

    var durationType = document.getElementById("durationType");
    var epm = document.getElementById("epm");

    if(durationType.value == 0){
        var payments = parseFloat(duration.value);
    }else{
        var payments = parseFloat(duration.value) * 12;
    }

    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) / 100 / 12;      
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    var CurrentDate = new Date();
    CurrentDate.setMonth(CurrentDate.getMonth() + payments);
    var endDate = CurrentDate.toLocaleString('default', { month: 'long' }) + " " + CurrentDate.getFullYear();

    if (isFinite(monthly)){
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
        epm.innerHTML = endDate;
        save(amount.value, apr.value, duration.value, endDate);
    }else {
        payment.innerHTML = "";
        total.innerHTML = ""
        totalinterest.innerHTML = "";
        epm.innerHTML = "Not Found";
    }

    var balance = principal;

    var table = "<table class='table table-sm table-reponsive table-bordered'><tr>";
    table += "<th>Month/Year</th>";
    table += "<th>Balance</th>";
    table += "<th>Interest</th>";
    table += "<th>Principal</th>";
    table += "<th>Monthly Payment</th></tr>";
    for (var i = 0; i <= payments; i++) {
        interest_r = interest * balance;
        princ = monthly - interest_r;
        var date = new Date();
        date.setMonth(date.getMonth() + i);
        var endDate = date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();

        table += "<tr><td>"+endDate+"</td>";
        table += "<td>"+parseFloat(balance).toFixed(2)+"</td>";
        table += "<td>"+parseFloat(interest_r).toFixed(2)+"</td>";
        table += "<td>"+parseFloat(princ).toFixed(2)+"</td>";
        table += "<td>"+parseFloat(monthly).toFixed(2)+"</td></tr>";

        balance = balance - princ;
    }
    table += "</table>";
    $('#amm-table').html(table);

}

function save(amount, apr, duration) {
    document.getElementById("amount").value = amount;
    document.getElementById("apr").value = apr;
    document.getElementById("duration").value = duration;
}