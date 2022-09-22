(function () {
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

      //   console.log('preNum: ', preNum);
      //   console.log('opr: ', opr);
      //   console.log('currNum: ', currNum);
      //   console.log('preNum: ', preNum);
      //   console.log('lastClicked: ', lastClicked);
      //   console.log('--------------------------');

      // log last clicked button
      lastClicked = elem;
    }
  });

  function solveFunc(currFunc) {
    switch (currFunc) {
      case 'C':
        init();
        scrNum = '0';
        break;
      case '←':
        if (scrNum.length === 1) {
          scrNum = '0';
        } else {
          scrNum = scrNum.substring(0, scrNum.length - 1);
        }
        if (lastClicked.className.includes('btn-opr')) {
          opr = '';
        }
        break;
    }
  }

  function solveOpr(currOpr) {
    switch (currOpr) {
      case '+':
      case '−':
      case '×':
      case '÷':
        if (opr === '') {
          preNum = parseInt(scrNum);
          opr = currOpr;
        } else {
          if (!lastClicked.className.includes('btn-opr')) {
            flushOpr();
            opr = currOpr;
          } else {
            opr = currOpr;
          }
        }
        break;
      case '=':
        if (opr !== '' && !lastClicked.className.includes('btn-opr')) {
          flushOpr();
          init();
        } else {
          init();
        }
        break;
    }
  }

  function flushOpr() {
    currNum = parseInt(scrNum);

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
  }

  function solveNum(currChar) {
    if (scrNum === '0') {
      scrNum = currChar;
    } else if (lastClicked.className.includes('btn-num')) {
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
})();
