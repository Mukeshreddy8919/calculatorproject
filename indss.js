let display = document.getElementById('display');

function appendValue(value) {
  display.innerText += value;
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = 'Error';
  }
}

function clearDisplay() {
  display.innerText = '';
}
