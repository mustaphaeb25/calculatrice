const display = document.getElementById('display');

function append(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
    const regex = /\/\s*0(\.0+)?(\D|$)/;
    if (regex.test(display.value)) {
        display.value="Error"
    } else {
        display.value = eval(display.value)
    }
  
}