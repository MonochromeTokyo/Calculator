function add(number1, number2){
    return number1 + number2;

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

function operate( operator, num1, num2){
// Declare if statements, or switch statements to decide which operator to use
// Does javascript use switch statements?
//Yes it does
    switch(operator){
        case '+':
            add(num1, num2);
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
