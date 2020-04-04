const ans = document.querySelector('#ans');

function add (value1, value2){return (value1+value2)}
function substract (value1, value2){return (value1-value2)}
function times (value1, value2){return (value1*value2)}
function between (value1, value2){return (value1/value2)}

function operate (operator, value1, value2){
    if (operator == "+") return add (parseFloat(value1), parseFloat(value2));
    if (operator == "-") return substract (parseFloat(value1), parseFloat(value2));
    if (operator == "*") return times (parseFloat(value1), parseFloat(value2));
    if (operator == "/") return between (parseFloat(value1), parseFloat(value2));
}

//display.innerHTML = operate("+",100,100);
display.innerHTML = "";
let calcNumber = [];
let calcOperator = []; 
let n = 0;

document.querySelectorAll(".calcBtn").forEach(function(button) {
    button.addEventListener("click", function(e){
        var dot = display.innerHTML.includes(".");
        if(dot == false || this.innerHTML != ".") display.innerHTML += this.innerHTML;
        //display.innerHTML = calcNumber[n];
    });
      });

    plus = document.querySelector ("#plusBtn");
    plus.addEventListener("click", function(e){
        calcNumber.push(display.innerHTML);
        display.innerHTML = "";
        calcOperator.push("+");
        n++;
    })

    minus = document.querySelector ("#minusBtn");
    minus.addEventListener("click", function(e){
        //var num1 = parseInt(calcNumber[0]);
        calcNumber.push(display.innerHTML);
        display.innerHTML = "";
        calcOperator.push("-");
        n++;
    })

    multiply = document.querySelector ("#multiplyBtn");
    multiply.addEventListener("click", function(e){
        calcNumber.push(display.innerHTML);
        display.innerHTML = "";
        calcOperator.push("*");
        n++;
    })

    divide = document.querySelector ("#divideBtn");
    divide.addEventListener("click", function(e){
        console.log (operate("+",1,0.5));
        calcNumber.push(display.innerHTML);
        display.innerHTML = "";
        calcOperator.push("/");
        n++;
    })

    equal = document.querySelector ("#equalBtn");
    equal.addEventListener("click", function(e){
        calcNumber.push(display.innerHTML);
        display.innerHTML = "";     
        console.log(calcNumber);
        console.log(calcOperator);
        for (i = 0;i < calcOperator.length; i++){
            while (calcOperator[i] == "*" || calcOperator[i] == "/"){
                var result = operate(calcOperator[i],calcNumber[i],calcNumber[i+1]);
                calcNumber.splice(i,2,result.toString());
                calcOperator.splice(i,1);
                
            }
        }
        console.log(calcNumber);
        console.log(calcOperator);
        for (i = 0;i < calcOperator.length; i++){
            while (calcOperator[i] == "+" || calcOperator[i] == "-"){
                var result = operate(calcOperator[i],calcNumber[i],calcNumber[i+1]);
                calcNumber.splice(i,2,result.toString());
                calcOperator.splice(i,1);
            }
        }
        display.innerHTML = calcNumber[0];
        console.log(calcNumber);
        console.log(calcOperator);
    })



/*const one = document.querySelector('#oneBtn').innerHTML;
const two = document.querySelector('#twoBtn').innerHTML;
alert (one+two);*/