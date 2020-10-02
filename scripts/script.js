function Calcular() {
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;
	var somar;
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);

	somar = valor1 + valor2;

	document.getElementById('resultado').setAttribute("value", somar);
}
function Media() {
	var nota1 = document.getElementById('nota1').value;
	var nota2 = document.getElementById('nota2').value;
	var nota3 = document.getElementById('nota3').value;
	var mediar;

	nota1 = parseInt(nota1);
	nota2 = parseInt(nota2);
	nota3 = parseInt(nota3);

	mediar = (nota1 + nota2 + nota3) / 3;

	document.getElementById('resultado').setAttribute("value", mediar);
}
function Desconto() {
	var valor1 = document.getElementById('valor1').value;
	var descontar;
	var desconto;

	valor1 = parseInt(valor1);

	descontar = (valor1 * 10) / 100;
	desconto = valor1 - descontar;

	document.getElementById('resultado').setAttribute("value", desconto);
}
function escolherDesconto() {
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;
	var descontar;
	var desconto;

	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);

	descontar = (valor1 * valor2) / 100;
	desconto = valor1 - descontar;

	document.getElementById('resultado').setAttribute("value", desconto);
}
function inverterValor() {
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;
	var val1;
	var val2;

	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);

	val1 = valor1;
	val2 = valor2;	

	valor1 = valor2;
	valor2 = val1;

	alert('Valor 1: ' + valor1 + ' Valor 2: ' + valor2);
}
function mostrarSaldo() {
	var totalParcelas = document.getElementById('totalParcelas').value;
	var parcelasPagas = document.getElementById('parcelasPagas').value;
	var valorParcelas = document.getElementById('valorParcelas').value;
	var saldoDevedor;
	var parcelasRestantes;

	totalParcelas = parseInt(totalParcelas);
	parcelasPagas = parseInt(parcelasPagas);
	valorParcelas = parseInt(valorParcelas);

	parcelasRestantes = totalParcelas - parcelasPagas;
	saldoDevedor = valorParcelas * parcelasRestantes;

	document.getElementById('saldoDevedor').setAttribute("value", saldoDevedor);
	document.getElementById('parcelasRestantes').setAttribute("value", parcelasRestantes);	
}
function calculaTotal() {
	var valorFruta = document.getElementById('valorFruta').value;
	var valorCremoso = document.getElementById('valorCremoso').value;
	var valorRecheado = document.getElementById('valorRecheado').value;
	var quantidadeFruta = document.getElementById('quantidadeFruta').value;
	var quantidadeCremoso = document.getElementById('quantidadeCremoso').value;
	var quantidadeRecheado = document.getElementById('quantidadeRecheado').value;

	var totalFrutas;
	var totalCremoso;
	var totalRecheado;
	var totalVendas;

	valorFruta = parseFloat(valorFruta);
	valorCremoso = parseFloat(valorCremoso);
	valorRecheado = parseFloat(valorRecheado);
	quantidadeFruta = parseInt(quantidadeFruta);
	quantidadeCremoso = parseInt(quantidadeCremoso);
	quantidadeRecheado = parseInt(quantidadeRecheado);

	totalFrutas = valorFruta * quantidadeFruta;
	totalCremoso = valorCremoso * quantidadeCremoso;
	totalRecheado = valorRecheado * quantidadeRecheado;
	totalVendas = totalFrutas + totalCremoso + totalRecheado;

	document.getElementById('totalFruta').setAttribute("value", totalFrutas.toLocaleString('pt-br', {minimumFractionDigits: 2}));
	document.getElementById('totalCremoso').setAttribute("value", totalCremoso.toLocaleString('pt-br', {minimumFractionDigits: 2}));
	document.getElementById('totalRecheado').setAttribute("value", totalRecheado.toLocaleString('pt-br', {minimumFractionDigits: 2}));
	document.getElementById('totalVendas').setAttribute("value", totalVendas.toLocaleString('pt-br', {minimumFractionDigits: 2}));
}	