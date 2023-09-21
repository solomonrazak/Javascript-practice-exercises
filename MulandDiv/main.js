let num1 = document.getElementById("first").value;
let num2 = document.getElementById("second").value;

const mul = document.querySelector(".mul");
const divide = document.querySelector(".divide");

mul.addEventListener("click", multiply)

function multiply(num1, num2){
    document.getElementById("result").innerHTML = num1 * num2;
    // console.log("answer is: " +num1 * num2)
}

divide.addEventListener("click", division)

function division(num1, num2){
   document.getElementById("result").innerHTML = num1 / num2;
}


