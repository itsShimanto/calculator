let display = document.getElementById('display');

function clicked(input) {
  if (display.value === '0') {
    display.value = input;
  } else {
    display.value += input;
  }
}

function cleared() {
  display.value = '0';
}

function calculate() {
  try {
    let expression = display.value.replace(/x/g, '*').replace(/(\d+)%/g, '($1/100)');
    display.value = eval(expression);
  } catch (e) {
    display.value = 'Error';
  }
}

function deleted() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}
