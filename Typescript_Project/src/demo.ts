
function myFunction() {
    // var x = document.getElementById("myText")!.value;
    
    const input1 = document.getElementById("textbox1") as HTMLInputElement
    const input2 = document.getElementById("textbox2") as HTMLInputElement
    let inputValue = (<HTMLInputElement>document.getElementById("myText")).value;
    let resultValue:any = +input1.value + +input2.value;
    (<HTMLOutputElement>document.getElementById("myText")).value = resultValue;
   document.getElementById("demo")!.innerHTML = inputValue;
  }