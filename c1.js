const display = document.querySelector(".display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = "";
}

function clearNum() {
    display.value = display.value.slice(0, -1);
}
