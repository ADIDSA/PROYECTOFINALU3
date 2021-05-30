function Limpiar(){
	document.getElementById("miForm").reset();
}

var CalcularAltura=function(g,t){
	var g=parseFloat(document.getElementById("g").value);
	var t=parseFloat(document.getElementById("t").value);
	var resultado= g*t*t/2
	return resultado ;
}

var CalcularVelocidad=function(g,t){
    var g=parseFloat(document.getElementById("g").value);
	var t=parseFloat(document.getElementById("t").value);
	var resultado= (g*t);
	return resultado ;}


function Limpiar2(){
	document.getElementById("miForm").reset();
}
var Calcularft=function(t){
	var t=parseFloat(document.getElementById("t").value);
	var resultado= (18*t-4.9*t*t);
	return resultado;
}
