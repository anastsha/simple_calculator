function Result() 
{
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let calc_type = document.getElementById("calc").value;
    let result = 0;
    switch (calc_type) {
        case "+":
            result = number1+number2;
            break;
        case "-":
            result = number1-number2;
            break;
        case "/":
            result = number1/number2;
            break;
        case "*":
            result = number1*number2;
            break;
    }
    document.getElementById("result").value = result;
}

function Reset()
{
    document.getElementById("result").value = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}