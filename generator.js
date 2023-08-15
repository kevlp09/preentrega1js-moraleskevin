function generateRandomNumber() {
  // consigna que vamos a realizar
  alert(
    "eligiremos números aleatorios entre un rango que se elija por el usuario"
  );
  // ingresar primer y segundo número
  const firstNumber = parseInt(prompt("Por favor ingresa el primer número"));
  const secondNumber = parseInt(prompt("Por favor ingresa el segundo número"));

  // Se verifica que se este ingresando números válidos y que el primero sea menor que el segundo
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Por favor ingresa valores numéricos válidos");
    return;
  } else if (secondNumber < firstNumber) {
    alert("El primer número debe ser menor que el segundo");
    return;
  }

  //número aleatorio con los números ingresados
  randomNumber = Math.floor(
    Math.random() * (secondNumber - firstNumber) + firstNumber
  );
  alert("El número generado es " + randomNumber);

  //con esto los números generados incluyen los números ingresados por el usuario
  for (let i = firstNumber; i <= secondNumber; i++) {
    console.log(i);
  }
}

generateRandomNumber();
