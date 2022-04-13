/*Conteúdo da Aula*/

	var nome = "Ana Sampaio";

	var primeiroBimestre = 7;
	var segundoBimestre = 2;
	var terceiroBimestre = 10;
	var quartoBimestre = 5;

	var notaAnual = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre)/4;
	var notaFixada = notaAnual.toFixed(1);

	console.log(nome + ", sua nota anual foi "+ notaAnual + ". A média mínima para aprovação é 6.");
	
/*DESAFIOS 1 e 3*/

function calcular(){

	var nota1 = parseFloat(document.getElementById("first").value);
	var nota2 = parseFloat(document.getElementById("second").value);
	var nota3 = parseFloat(document.getElementById("third").value);
	var nota4 = parseFloat(document.getElementById("forth").value);

	var media = (nota1 + nota2 + nota3 + nota4)/4;

	var elementoResultado = document.getElementById("resultado");
	var resultado = "Sua média final foi " + media + ".";
	elementoResultado.innerHTML = resultado;

	if(media >= 6){
		elementoResultado.innerHTML = resultado + " Parabéns, você já pode ir curtir as suas férias!!!"
	} else {
		elementoResultado.innerHTML = resultado + " Que pena, nos vemos na recuperação..."
	}

}

/*DESAFIO 2 - Ver arquivo aula_1.css*/

/*DESAFIO 4*/

var final = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre)/4 .toFixed(1);
console.log(final);