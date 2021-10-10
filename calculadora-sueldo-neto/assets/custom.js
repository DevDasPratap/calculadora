var hourly, daily, weekly, biweekly, semimonthly, monthly, quarterly, annualy = 0;

function calculate() {
    var salaryAmount = document.getElementById("salaryAmount").value;
    var salaryType = document.getElementById("salaryType").value;
    var hpw = document.getElementById("hpw").value;
    var dpw = document.getElementById("dpw").value;

    if(salaryType == 0){
        hourly = parseInt(salaryAmount);
        daily = parseInt(hpw) / parseInt(dpw) * parseInt(hourly);
        weekly = parseInt(dpw) * parseInt(daily);
        biweekly = parseInt(weekly) * 2;
        semimonthly = parseInt(biweekly) + parseInt(daily);
        monthly = parseInt(semimonthly) * 2;
        quarterly = parseInt(monthly) * 3;
        annualy = parseInt(monthly) * 12;
    }

    if(salaryType == 1){
        daily = parseInt(salaryAmount);
        hourly = parseInt(daily) / (parseInt(hpw) / parseInt(dpw));
        weekly = parseInt(dpw) * parseInt(daily);
        biweekly = parseInt(weekly) * 2;
        semimonthly = parseInt(biweekly) + parseInt(daily);
        monthly = parseInt(semimonthly) * 2;
        quarterly = parseInt(monthly) * 3;
        annualy = parseInt(monthly) * 12;
    }

    if(salaryType == 2){
        weekly = parseInt(salaryAmount);
        hourly = parseInt(weekly) / parseInt(dpw) / (parseInt(hpw) / parseInt(dpw));
        daily = parseInt(weekly) / parseInt(dpw);
        biweekly = parseInt(weekly) * 2;
        semimonthly = parseInt(biweekly) + parseInt(daily);
        monthly = parseInt(semimonthly) * 2;
        quarterly = parseInt(monthly) * 3;
        annualy = parseInt(monthly) * 12;
    }

    if(salaryType == 3){
        biweekly = parseInt(salaryAmount);
        weekly = parseInt(biweekly) / 2;
        daily = parseInt(weekly) / parseInt(dpw);
        hourly = parseInt(weekly) / parseInt(dpw) / (parseInt(hpw) / parseInt(dpw));
        semimonthly = parseInt(biweekly) + parseInt(daily);
        monthly = parseInt(semimonthly) * 2;
        quarterly = parseInt(monthly) * 3;
        annualy = parseInt(monthly) * 12;
    }

    if(salaryType == 4){
        semimonthly = parseInt(salaryAmount);
        weekly = (parseInt(semimonthly) / 2);
        daily = parseInt(weekly) / parseInt(dpw);
        biweekly = parseInt(weekly) * 2;
        hourly = parseInt(weekly) / parseInt(dpw) / (parseInt(hpw) / parseInt(dpw));
        monthly = parseInt(semimonthly) * 2;
        quarterly = parseInt(monthly) * 3;
        annualy = parseInt(monthly) * 12;
    }

    if(salaryType == 5){
        monthly = parseInt(salaryAmount);
        semimonthly = parseInt(monthly) / 2;
        weekly = (parseInt(semimonthly) / 2);
        daily = parseInt(weekly) / parseInt(dpw);
        biweekly = parseInt(weekly) * 2;
        hourly = parseInt(weekly) / parseInt(dpw) / (parseInt(hpw) / parseInt(dpw));
        quarterly = parseInt(monthly) * 3;
        annualy = parseInt(monthly) * 12;
    }

    if(salaryType == 6){
        quarterly = parseInt(salaryAmount);
        monthly = parseInt(quarterly) / 3;
        semimonthly = parseInt(monthly) / 2;
        weekly = (parseInt(semimonthly) / 2);
        daily = parseInt(weekly) / parseInt(dpw);
        biweekly = parseInt(weekly) * 2;
        hourly = parseInt(weekly) / parseInt(dpw) / (parseInt(hpw) / parseInt(dpw));
        annualy = parseInt(monthly) * 12;
    }

    if(salaryType == 7){
        annualy = parseInt(salaryAmount);
        quarterly = parseInt(annualy) / 4;
        monthly = parseInt(quarterly) / 3;
        semimonthly = parseInt(monthly) / 2;
        weekly = (parseInt(semimonthly) / 2);
        daily = parseInt(weekly) / parseInt(dpw);
        biweekly = parseInt(weekly) * 2;
        hourly = parseInt(weekly) / parseInt(dpw) / (parseInt(hpw) / parseInt(dpw));
    }

    update(hourly, daily, weekly, biweekly, semimonthly, monthly, quarterly, annualy);

};

function update(hourly, daily, weekly, biweekly, semimonthly, monthly, quarterly, annualy) {
    document.getElementById("hourlySalary").innerHTML = hourly.toFixed(2);
    document.getElementById("dailySalary").innerHTML = daily.toFixed(2);
    document.getElementById("weeklySalary").innerHTML = weekly;
    document.getElementById("biweeklySalary").innerHTML = biweekly;
    document.getElementById("monthlySalary").innerHTML = monthly;
    document.getElementById("semimonthlySalary").innerHTML = semimonthly;
    document.getElementById("quarterlySalary").innerHTML = quarterly;
    document.getElementById("annualySalary").innerHTML = annualy;
}