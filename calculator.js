let scrNumStr = '0';
let num1 = 0;
let opr = '';
let num2 = 0;
let result = 0;

const screen = document.querySelector('.scr-container');
const buttons = document.querySelector('.btn-container');

buttons.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const elemCl = event.target.className; // element class
    const elemVal = event.target.innerText;

    if (elemCl.includes('btn-func')) {
      solveFunc(elemVal);
    } else if (elemCl.includes('btn-opr')) {
      solveOpr(elemVal);
    } else if (elemCl.includes('btn-num')) {
      solveNum(elemVal);
    }

    rerender();
  }
});

function solveFunc(funcStr) {
  switch (funcStr) {
    case 'C':
      scrNumStr = '0';
      opr = '';
      break;
    case '←':
      if (scrNumStr.length === 1) {
        scrNumStr = '0';
      } else {
        scrNumStr = scrNumStr.substring(0, scrNumStr.length - 1);
      }
      break;
  }
}

function solveOpr(oprStr) {
  if (opr === '') {
    num1 = Number.parseInt(scrNumStr);
  }
  if (oprStr !== '=') {
    opr = oprStr;
    // initialize
    scrNumStr = '0';
  } else if (oprStr === '=') {
    solveEquals(oprStr);
  }
}

function solveEquals(equals) {
  num2 = Number.parseInt(scrNumStr);

  console.log('num1: ', num1);
  console.log('num2: ', num2);

  switch (opr) {
    case '+':
      result = num1 + num2;
      break;
    case '−':
      result = num1 - num2;
      break;
    case '×':
      result = num1 * num2;
      break;
    case '÷':
      result = num1 / num2;
      break;
    default:
      result = Number.parseInt(scrNumStr);
      break;
  }
  scrNumStr = result.toString();

  opr = equals;
}

function solveNum(numStr) {
  if (scrNumStr === '0' || opr === '=') {
    scrNumStr = numStr;
    if (opr === '=') {
      opr = '';
    }
  } else {
    scrNumStr += numStr;
  }
}

function rerender() {
  screen.innerText = scrNumStr;
}
