let scrNum = '0'; // string
let preNum = 0;
let currNum = 0;
let opr = '';
let lastClicked = null;

const screen = $('.scr-container');
const buttons = $('.btn-container');
// console.log('screen: ', screen);
// console.log('buttons: ', screen);

buttons.click((event) => {
  const elem = event.target;
  if (elem.tagName === 'BUTTON') {
    const elemCl = elem.className; // element class
    const elemVal = elem.innerText; // element value

    // revert '+' '−' '×' '÷' background color
    if (lastClicked !== null && lastClicked.className.includes('btn-opr')) {
      $(lastClicked).removeClass('btn-opr-clicked');
    }

    if (elemCl.includes('btn-func')) {
      solveFunc(elemVal);
    } else if (elemCl.includes('btn-opr')) {
      // set '+' '−' '×' '÷' background color
      if (elemVal !== '=') {
        $(elem).addClass('btn-opr-clicked');
      }
      solveOpr(elemVal);
    } else if (elemCl.includes('btn-num')) {
      solveNum(elemVal);
    }

    rerender();

    // log last clicked button
    lastClicked = elem;

    // console.log('preNum: ', preNum);
    // console.log('opr: ', opr);
    // console.log('currNum: ', currNum);
    // console.log('preNum: ', preNum);
    // console.log('lastClicked: ', lastClicked);
    // console.log('--------------------------');
  }
});

function solveFunc(currFunc) {
  switch (currFunc) {
    case 'C':
      scrNum = '0';
      opr = '';
      break;
    case '←':
      if (scrNum.length === 1) {
        scrNum = '0';
      } else {
        scrNum = scrNum.substring(0, scrNum.length - 1);
      }
      break;
  }
}

<<<<<<< HEAD
function solveOpr(currOpr) {
  switch (currOpr) {
    case '+':
    case '−':
    case '×':
    case '÷':
      if (opr === '') {
        initOpr(currOpr);
      } else {
        if (!lastClicked.className.includes('btn-opr')) {
          flushOpr(currOpr);
        } else {
          opr = currOpr;
        }
      }
      break;
    case '=':
      if (opr !== '' && !lastClicked.className.includes('btn-opr')) {
        flushOpr(currOpr);
        init();
      } else {
        init();
      }
      break;
=======
function solveOpr(oprStr) {
  if (opr === '' || opr === '=') {
    num1 = Number.parseInt(scrNumStr);
  }
  if (oprStr !== '=') {
    opr = oprStr;
    // initialize
    scrNumStr = '0';
  } else if (oprStr === '=') {
    solveEquals(oprStr);
>>>>>>> dc5b939e37f5eafea364e89d3be11a263bf56c56
  }
}

function initOpr(currOpr) {
  preNum = Number.parseInt(scrNum);
  opr = currOpr;
}

<<<<<<< HEAD
function flushOpr(currOpr) {
  currNum = Number.parseInt(scrNum);

=======
>>>>>>> dc5b939e37f5eafea364e89d3be11a263bf56c56
  switch (opr) {
    case '+':
      preNum += currNum;
      break;
    case '−':
      preNum -= currNum;
      break;
    case '×':
      preNum *= currNum;
      break;
    case '÷':
      preNum /= currNum;
      break;
  }

  scrNum = preNum.toString();
  opr = currOpr;
}

function solveNum(currChar) {
  if (lastClicked !== null && lastClicked.className.includes('btn-num')) {
    scrNum += currChar;
  } else {
    scrNum = currChar;
  }
}

function rerender() {
  screen.text(scrNum); // jQuery set innerText function
}

function init() {
  preNum = 0;
  currNum = 0;
  opr = '';
}
