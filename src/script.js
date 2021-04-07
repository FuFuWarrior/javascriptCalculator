// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  }else if (clickedButtonValue === '.'){
    display.value += '.';   
  }
  else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}



// const decimal = document.getElementById('decimal');
// const clear = document.getElementById('clear');
// // Selects a h1 element that holds the input and result
// const displayValElement = document.getElementById('display__numbers');
// // Selects the buttons with the 10 digits (0–9)
// const btnNumbers = document.getElementsByClassName('btn--number');
// // Selects the four operators (add/subtract/divide/multiply) and the equals operator
// const btnOperators = document.getElementsByClassName('btn--operator');


// var displayVal = '0';
// var pendingVal; 
// var evalStringArray = [];

// for (let i = 0; i < btnNumbers.length; i++) {
//   btnNumbers[i].addEventListener('click', //function ) 
// }

// for (let i = 0; i < btnOperators.length; i++) {
//   btnOperators[i].addEventListener('click', //function);
// }

// // Updating the display field
// const updateDisplayVal = (e) => {
//   var btnText = e.target.innerText;
//   if(displayVal === '0') { 
//      displayVal = ''; 
//   }// Append the content of the button we clicked to our displayVal variable and display it
//   displayVal += btnText; 
//   displayValElement.innerText = displayVal;
// };

// const performOperation = (e) => {
//   var operator = e.target.innerText;    switch (operator) {
//       case '+':
//           pendingVal = displayVal;
//           displayVal = '0';
//           displayValElement.innerText = displayVal;
//           evalStringArray.push(pendingVal);
//           evalStringArray.push('+');
//           break;
//       case '-':
//           pendingVal = displayVal;
//           displayVal = '0';
//           displayValElement.innerText = displayVal;
//           evalStringArray.push(pendingVal);
//           evalStringArray.push('-');
//           break;
//       case '×':
//           pendingVal = displayVal;
//           displayVal = '0';
//           displayValElement.innerText = displayVal;
//           evalStringArray.push(pendingVal);
//           evalStringArray.push('*');
//           break;
//       case '÷':
//           pendingVal = displayVal;
//           displayVal = '0';
//           displayValElement.innerText = displayVal;
//           evalStringArray.push(pendingVal);
//           evalStringArray.push('/');
//           break;
//       case '=':
//           evalStringArray.push(displayVal);
//           var evaluation = eval(evalStringArray.join(' '));
//           displayVal = evaluation + ''; 
//           displayValElement.innerText = displayVal;
//           evalStringArray = []; // clear the array
//           break;
//       default:
//           break;
//   }
// }

// for (let i = 0; i < btnNumbers.length; i++) {
//   btnNumbers[i].addEventListener('click', updateDisplayVal)
// }
// for (let i = 0; i < btnOperators.length; i++) {
//   btnOperators[i].addEventListener('click', performOperation);
// }

// // On clicking the clear button, all values and the display are being reset 
// clear.onclick = () => {
//   displayVal = '0';
//   pendingVal = undefined;
//   evalStringArray = [];
//   displayValElement.innerHTML = displayVal;
// }


// // Not allowing two decimal points in input
// decimal.onclick = () => { 
//   if(!displayVal.includes('.')) {
//       displayVal += '.';
//   }
//   displayValElement.innerText = displayVal;
// }