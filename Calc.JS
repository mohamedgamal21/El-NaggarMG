var result = document.getElementById("result");




function clearResult() {
    result.value = "";
}

function appendNumber(input) {
    result.value += input
}

function appendOperator(input) {
    result.value += input;
}
function appendDecimalOperator(input) {
    result.value += input;
}

function showResult() {
    result.value = eval(result.value);
}