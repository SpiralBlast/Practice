"use strict";

let startCountButton = document.getElementById("start"),
    rightSide = document.querySelector(".result-table").querySelectorAll('[class$="-value"]'),
    expensesInput = document.querySelectorAll(".expenses-item"),
    buttons = document.getElementsByTagName("button"),
    butt1 = buttons[0], butt2 = buttons[1], butt3 = buttons[2],
    optExpenses = document.querySelectorAll(".optionalexpenses-item"),
    maybeIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    percent = document.querySelector("#percent"),
    yearVal = document.querySelector(".year-value"),
    monthVal = document.querySelector(".month-value"),
    dayVal = document.querySelector(".day-value");

let money, time, startIsPressed = false, nesesarySum = 0; 

startCountButton.addEventListener("click", function(){
    startIsPressed = true;
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = prompt ("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    rightSide[0].textContent = money.toFixed();
    yearVal.value = new Date(Date.parse(time)).getFullYear();
    monthVal.value = new Date(Date.parse(time)).getMonth() + 1;
    dayVal.value = new Date(Date.parse(time)).getDate();
});

butt1.addEventListener("click", function(){
    if(startIsPressed == true){
        let sum = 0;

        for(let i = 0; i < expensesInput.length; i++){
            let question = expensesInput[i].value,
                question1 = expensesInput[++i].value;
            
            if((typeof(question)) === 'string' && (typeof(question)) != null && (typeof(question1)) != null 
            && (typeof(question)) != '' && (typeof(question1)) != '') {
                appData.expenses[question] = question1;
                sum += +question1;
            } else {
                i = i--;
            }
    }

    rightSide[3].textContent = sum;
    nesesarySum = sum;
    }
});

butt2.addEventListener("click", function(){
    if(startIsPressed == true){
        for(let i = 0 ; i < optExpenses.length; i++){
            appData.optionalExpenses[i] = optExpenses[i].value;
            rightSide[4].textContent += appData.optionalExpenses[i] + " ";
        }
    }
});

butt3.addEventListener("click", function(){
    if(startIsPressed == true){
        if(appData.budget != undefined){
            appData.perDay = ((appData.budget - nesesarySum)/30).toFixed(1);
            rightSide[1].textContent = appData.perDay;
            if(appData.budget < 30){
                rightSide[2].textContent = "Маленький доход";
            } else if(30 < appData.budget < 100) {
                rightSide[2].textContent ="Средний доход" ;
            } else if(appData.budget > 100){
                rightSide[2].textContent ="Высокий доход";
            } else{
                rightSide[2].textContent = "Poshol nahuj"; 
            }
        } else{
            rightSide[1].textContent = rightSide[2].textContent = "Произошла ошибка";
        }
    }
});

maybeIncome.addEventListener("input", function(){
    if(startIsPressed == true){
        let items = maybeIncome.value;
        appData.income = items.split(", ");
        rightSide[5].textContent = appData.income;
    } 
});

savings.addEventListener("click", function(){
    if(startIsPressed == true){
        if(appData.saving == true){
            appData.saving = false;
        } else {
            appData.saving = true;
        }
    } 
});

chooseSum.addEventListener("input", function(){
    if(startIsPressed == true){
        if(appData.saving == true){
            let sum = +chooseSum.value,
                perc = +percent.value;
            
            appData.monthIncome = sum/100/12*perc;
            appData.yearIncome = sum/100*perc;
    
            rightSide[6].textContent = appData.monthIncome.toFixed(1);
            rightSide[7].textContent = appData.yearIncome.toFixed(1);
        }
    }
});

percent.addEventListener("input", function(){
    if(startIsPressed == true){
        if(appData.saving == true){
            let sum = +chooseSum.value,
                perc = +percent.value;
            
            appData.monthIncome = sum/100/12*perc;
            appData.yearIncome = sum/100*perc;
    
            rightSide[6].textContent = appData.monthIncome.toFixed(1);
            rightSide[7].textContent = appData.yearIncome.toFixed(1); 
        }
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

function printInfo(obj){
    let info = "";
    for(let variable in obj) {
        info+= variable;
        info+= ", ";
    }
    alert("Наша программа включает в себя данные: " + info);
}

