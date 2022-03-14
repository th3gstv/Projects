function getDados(){
  var firstNumber = document.querySelector('.firstNumber').value;
  var secondNumber = document.querySelector('.secondNumber').value;
  var operator = document.querySelector('#operator').value;
  var results = this.receptDados(firstNumber, secondNumber, operator);
  document.querySelector('#results').innerHTML = results;
}

function receptDados(firstNumber, secondNumber, operator){
  var firstNumber = Number(firstNumber);
  var secondNumber = Number(secondNumber);

  if(operator == '+'){
    var results = firstNumber + secondNumber;
  }

  if(operator == '-'){
    var results = firstNumber - secondNumber;
  }

  if(operator == '*'){
    var results = firstNumber * secondNumber;
  }

  if(operator == '/'){
    var results = firstNumber / secondNumber;
  }
  return results;
}