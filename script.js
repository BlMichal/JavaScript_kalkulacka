let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector("#equals");
let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");

let resultReset = false;

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        if (resultReset) {
            display.value = "";
            resultReset = false;
        }
        let value = e.target.dataset.number;
        display.value += value;
    });
});

equal.addEventListener("click", function(e){
    if(display.value === "") {
        display.value = "Neplatná operace";
        resultReset = true;
    } else {
        let answer = eval(display.value);
        display.value = answer;
        resultReset = true;
    }
});

clear.addEventListener("click", function(e){
    display.value = "";
});

del.addEventListener("click", function(e){
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
});