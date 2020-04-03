const ans = document.querySelector('#ans');

function add (value1, value2){return (value1+value2)}
function substract (value1, value2){return (value1-value2)}
function multiply (value1, value2){return (value1*value2)}
function divide (value1, value2){return (value1/value2)}

function operate (operator, value1, value2){
    if (operator == "+") return add (value1, value2);
    if (operator == "-") return substract (value1, value2);
    if (operator == "*") return multiply (value1, value2);
    if (operator == "/") return divide (value1, value2);
}

display.innerHTML = operate("/",100,10);
let firstNumber=["","","",""];
let n = 0;

document.querySelectorAll(".calcBtn").forEach(function(button) {
    button.addEventListener("click", function(e){
        var dot = firstNumber[n].includes(".");
        if(dot == false || this.innerHTML != ".") firstNumber[n] += this.innerHTML;
        display.innerHTML = firstNumber[n];
    });
      });

    plus = document.querySelector ("#plusBtn");
    plus.addEventListener("click", function(e){
        alert(firstNumber[n]);
        n++;
    })

    minus = document.querySelector ("#minusBtn");
    minus.addEventListener("click", function(e){
        var num1 = parseInt(firstNumber[0]);
        var num2 = parseInt(firstNumber[1]);
        alert(num1+num2);
        
    })



/*const one = document.querySelector('#oneBtn').innerHTML;
const two = document.querySelector('#twoBtn').innerHTML;
alert (one+two);*/