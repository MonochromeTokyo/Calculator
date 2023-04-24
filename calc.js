const screen = document.querySelector("#screen");
let currentNumber1 = "";
let currentNumber2= "";
let currentOperator = '';
let resetScreen = false;

console.log(screen.value)
//let statusMode = normal;

// Button for number 9
const btn9 = document.querySelector ('#btn9');
btn9.addEventListener('click', appendDigit);

// Button for number 8
const btn8 = document.querySelector ('#btn8');
btn8.addEventListener('click', appendDigit);

// Button for number 7
const btn7 = document.querySelector ('#btn7');
btn7.addEventListener('click', appendDigit);

// Button for number 6
const btn6 = document.querySelector ('#btn6');
btn6.addEventListener('click', appendDigit);

// Button for number 5
const btn5 = document.querySelector ('#btn5');
btn5.addEventListener('click', appendDigit);

// Button for number 4
const btn4 = document.querySelector ('#btn4');
btn4.addEventListener('click', appendDigit);

// Button for number 3
const btn3 = document.querySelector ('#btn3');
btn3.addEventListener('click', appendDigit);

// Button for number 2
const btn2 = document.querySelector ('#btn2');
btn2.addEventListener('click', appendDigit);

// Button for number 1
const btn1 = document.querySelector ('#btn1');
btn1.addEventListener('click', appendDigit);

// Button for number 0
const btn0 = document.querySelector ('#btn0');
btn0.addEventListener('click', appendDigit);




// Button for C(Clear)
const btnClear = document.querySelector ('#btnClear');
btnClear.addEventListener('click', clearNum);


// Button for  Del(Delete/Backspace)
const btnDel = document.querySelector ('#btnDel');
btnDel.addEventListener('click', backspace);


// Button for Equals
const eqlBtn= document.querySelector ('#eqlBtn');
eqlBtn.addEventListener('click', operate);

// Button for addition
const addBtn = document.querySelector ('#addBtn');
addBtn.addEventListener('click', add);

// Button for subtraction
const subBtn = document.querySelector ('#subBtn');
subBtn.addEventListener('click', sub);

// Button for Division
const divBtn = document.querySelector ('#divBtn');
divBtn.addEventListener('click', div);

// Button for multiplication
const multiBtn = document.querySelector ('#multiBtn');
multiBtn.addEventListener('click', multi);



//Append the digits for each button pressed before and after an operator is used
function appendDigit(){
    if (resetScreen == true){
        screen.value = "";
        resetScreen = false;
    }
    screen.value += this.value;
}

//Clear Button
function clearNum(){
    screen.value = "";
    currentNumber1="";
    currentOperator="";
}

function backspace (){
    screen.value= screen.value.slice(0,-1);
}


// All functions for operations. All functions will assign an operator for equals button and store a value

function add(){
    // If there is an operation in place, evaluate before doing more operations
    if (currentOperator != "")
    {
        operate();
    }
    // activate 'reset screen value' for when the next number is pressed. Will clear the screen but leave the recently inputted number on the screen
    resetScreen = true;
    currentNumber1=screen.value;
    currentOperator= '+';    
}

function sub(){
    if (currentOperator != "")
    {
        operate();
    }
    resetScreen = true;
    currentNumber1=screen.value;
    currentOperator= '-';
}

function div(){
    if (currentOperator != "")
    {
        operate();
    }
    resetScreen = true;
    currentNumber1=screen.value;
    currentOperator= '/';
}

function multi(){
     if (currentOperator != "")
     {
         operate();
     }
     resetScreen = true;   
    currentNumber1=screen.value;
    currentOperator= '*';
}


//The equals button. Also where all operations are completed.
function operate(){
// Declare if statements, or switch statements to decide which operator to use
// Does javascript use switch statements?
//Yes it does
    switch(currentOperator){
        case '+':
            //Addition operation
            screen.value = Number(currentNumber1) + Number (screen.value);
            currentOperator="";
            break;
        case '-':
            //Subtraction operation
            screen.value = Number(currentNumber1) - Number (screen.value);
            currentOperator="";
            break;
        case '/':
            //Division operation
            screen.value = (Number(currentNumber1))/(Number (screen.value));
            currentOperator="";
            break;
        case '*':
            //Multiplication operation
            screen.value = (Number(currentNumber1))*(Number (screen.value));
            currentOperator="";
            break;
    }


}
