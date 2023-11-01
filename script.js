const userInput = document.getElementById("userInput");
let calculation = '';

function press(num){
  // Check if the last character of the calculation is a dot
  if (num === '.' && calculation.charAt(calculation.length - 1) === '.') {
    return; // Don't add another dot consecutively
  }
  
  calculation += num;
  userInput.value = calculation;
  console.log(calculation);
}

function equal(){
  calculation = eval(calculation);
  secondInput.value = calculation
  calculation = '';
  userInput.value = calculation;
  console.log(calculation);
}

function erase(){
  calculation = calculation.slice(0, -1);
  userInput.value = calculation
  console.log(calculation)
}

function clearEquation(){
  calculation = '';
  userInput.value = calculation;
}

function  clearAll(){
  calculation = '';
  userInput.value = calculation
  secondInput.value = calculation
	console.log('cleared');
}

