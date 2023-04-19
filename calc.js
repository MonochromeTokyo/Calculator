const screen = document.querySelector("#screen");
screen.value=Number;
let currentNumber1 = 0;
let currentNumber2 = 0;
let currentOperator = '';

// Button for number 7
const btn7 = document.querySelector ('#btn7');
btn7.addEventListener('click', appendDigit);

// Button for number 8
const btn8 = document.querySelector ('#btn8');
btn8.addEventListener('click', appendDigit);




// Button for Equals
const eqlBtn= document.querySelector ('#eqlBtn');
eqlBtn.addEventListener('click', operate);

// Button for addition
const addBtn = document.querySelector ('#addBtn');
addBtn.addEventListener('click', add);


function appendDigit(){
    screen.value += this.value;
}

//Addition button
//Store value
// Assign operator for equals button
function add(){
    currentNumber1=screen.value;
    currentOperator= '+';
    //Clean slate?
    screen.value = Number;
}

function subtract(number1, number2){
    return number1 - number2;

}

function multiply(number1, number2){
    return number1 * number2;

}

function divide (number1, number2){
    return (number1)/number2;
}

function operate(){
// Declare if statements, or switch statements to decide which operator to use
// Does javascript use switch statements?
//Yes it does
    switch(currentOperator){

        //Return addition
        case '+':
            screen.value = Number(currentNumber1) + Number (screen.value);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '/':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
    }


}
