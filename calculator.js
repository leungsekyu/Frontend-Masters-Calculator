let scrNumStr = '0';
let num1 = 0;
let opr = '';
let num2 = 0;
let result = 0;

const screen = document.querySelector('.scr-container');
const buttons = document.querySelector('.btn-container');

screen.innerText = scrNumStr;

buttons.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const elemCl = event.target.className; // elemCl: element class
    const elemVal = event.target.innerText;

    if (elemCl.includes('btn-func')) {
      solveFunc(elemVal);
    } else if (elemCl.includes('btn-opr')) {
      solveOpr(elemVal);
    } else if (elemCl.includes('btn-num')) {
      solveNum(elemVal);
    }

    console.log(scrNumStr);
  }
});

function solveFunc(funcStr) {
  switch (funcStr) {
    case 'C':
      // initialize
      scrNumStr = '0';
      screen.innerText = scrNumStr;
      opr = '';
      break;
    case '←':
      if (scrNumStr.length > 1) {
        scrNumStr = scrNumStr.substring(0, scrNumStr.length - 1);
      } else {
        scrNumStr = '0';
      }
      screen.innerText = scrNumStr;
      break;
  }
}

function solveOpr(oprStr) {
  if (oprStr !== '=') {
    num1 = Number.parseInt(scrNumStr);
    opr = oprStr;
    // initialize
    scrNumStr = '0';
    screen.innerText = scrNumStr;
  } else if (oprStr === '=') {
    solveEquals();
  }
}

function solveEquals() {
  num2 = Number.parseInt(scrNumStr);
  switch (opr) {
    case '+':
      result = num1 + num2;
      console.log(result);
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
  screen.innerText = result;
  // initialize
  scrNumStr = '0';
  opr = '';
}

function solveNum(numStr) {
  if (scrNumStr === '0') {
    scrNumStr = numStr;
  } else {
    scrNumStr += numStr;
  }
  screen.innerText = scrNumStr;
}
