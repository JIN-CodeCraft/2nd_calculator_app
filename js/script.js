let display = document.getElementById("display")

function appendToDisplay(value) {
    if (value === "%") {
        return;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function toggleSign() {
    if (display.value) {
        display.value = String(-eval(display.value));
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "エラー";
    }
}