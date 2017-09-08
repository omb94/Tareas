//calculadora
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');


btn_sumar.addEventListener('click', function sumar(){	
	var n1 = parseInt(num1.value);
	var n2 = parseInt(num2.value);
	var resultado;

	resultado = n1 + n2;

	document.getElementById('resultado').value=resultado;
})

btn_restar.addEventListener('click', function restar(){	
	var n1 = parseInt(num1.value);
	var n2 = parseInt(num2.value);
	var resultado;

	resultado = n1 - n2;

	document.getElementById('resultado').value=resultado;
})

btn_multiplicar.addEventListener('click', function multiplicar(){	
	var n1 = parseInt(num1.value);
	var n2 = parseInt(num2.value);
	var resultado;

	resultado = n1 * n2;

	document.getElementById('resultado').value=resultado;
})

btn_dividir.addEventListener('click', function dividir(){	
	var n1 = parseInt(num1.value);
	var n2 = parseInt(num2.value);
	var resultado;

	resultado = n1 / n2;

	document.getElementById('resultado').value=resultado;
})


