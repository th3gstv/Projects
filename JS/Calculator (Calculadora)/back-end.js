function getDados(){
  //Getting the values 
  var firstNumber = document.querySelector('.firstNumber').value;
  var secondNumber = document.querySelector('.secondNumber').value;
  //Choosing the operation
  var operator = document.querySelector('#operator').value;
  //Sending to receptDados 
  var results = this.receptDados(firstNumber, secondNumber, operator);
  //Calculating the answer
  document.querySelector('#results').innerHTML = results;
}

function receptDados(firstNumber, secondNumber, operator){
  //String to Number
  var firstNumber = Number(firstNumber);
  var secondNumber = Number(secondNumber);

  //Making the counts
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
  //Information returns
  return results;
}