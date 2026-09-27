let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operatorValue = "";


function number(value) {

    if (operatorValue == "") {

        firstNumber = firstNumber + value;
        display.value = firstNumber;

    } else {

        secondNumber = secondNumber + value;
        display.value = secondNumber;

    }

}


function operator(operator) {

    operatorValue = operator;

}


function calculate() {

    let answer;

    if (operatorValue == "+") {

        answer = Number(firstNumber) + Number(secondNumber);

    } else if (operatorValue == "-") {

        answer = Number(firstNumber) - Number(secondNumber);

    } else if (operatorValue == "*") {

        answer = Number(firstNumber) * Number(secondNumber);

    } else if (operatorValue == "/") {

        answer = Number(firstNumber) / Number(secondNumber);

    }

    display.value = answer;

    

}


function clearDisplay() {

    display.value = "";

    firstNumber = "";
    secondNumber = "";
    operatorValue = "";

}