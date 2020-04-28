"use strict";
function myFunction() {
    // var x = document.getElementById("myText")!.value;
    var input1 = document.getElementById("textbox1");
    var input2 = document.getElementById("textbox2");
    var inputValue = document.getElementById("myText").value;
    var resultValue = +input1.value + +input2.value;
    document.getElementById("myText").value = resultValue;
    document.getElementById("demo").innerHTML = inputValue;
}
