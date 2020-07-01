function getNumber(num) {
    console.log(num)
    var varResult = document.getElementById("result")

    varResult.value += num;
}

function clearResult(){
    var varResult = document.getElementById("result");
    result.value = "";
} 

function getResult(){
    var varResult = document.getElementById("result");
    console.log(varResult.value)

    varResult.value = eval(varResult.value)
}