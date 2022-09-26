const palabrasecreta = ["puma","conejo","tortuga","pajarito","cerdo","vaca","cordero","gato","perro","gallina"];      
var palabraenjuego="";
var palabrasorteada="";

function sortearPalabra(){
	const pospalabra = Math.floor(Math.random()*palabrasecreta.length);
	return palabrasorteada = palabrasecreta[pospalabra];
}

function contarLetras(palabra){
	return numletras = palabra.length;
}

// Dibujar guiones de la palabra

var pantalla = document.querySelector("canvas");
var lapiz = pantalla.getContext("2d");


function dibujarGuion(x){
	lapiz.fillStyle = "#000";
    lapiz.beginPath();
    lapiz.moveTo(x,400);
    lapiz.lineTo(x+20,400);
    lapiz.lineWidth = 3;
    lapiz.stroke();		
}

function dibujarGuiones(nletras){
	var xini=500
	for (var i=0; i < nletras; i++){
		dibujarGuion(xini);
		xini+=30;
	}
}

// verificar que tecla apretada no sea un número

function teclaApretada(evento){
	var letra= evento.key;
	alert("se apreto una tecla");
	if(!isNaN(letra)){
		alert("Ingrese una letra");
	}
}

// chekear que la letra ingresada está en la palabra


// inicio del juego

function iniciarJuego() {
	document.getElementById("iniciar-juego").style.display = "none";
	document.getElementById("crear-palabra").style.display = "none";
	document.getElementById("horca").style.display = "block";
	sortearPalabra();
	contarLetras(palabrasorteada);
	dibujarGuiones(numletras);
	window.onkeypress= teclaApretada;
}
