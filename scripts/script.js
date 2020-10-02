function Calcular() {
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;
	var soma;
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);

	soma = valor1 + valor2;

	document.getElementById('resultado').setAttribute("value", soma);