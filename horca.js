const palabrasecreta = ["PUMA","CONEJO","TORTUGA","PAJARITO","CERDO","VACA","CORDERO","GATO","PERRO","GALLINA"];      
var palabraenjuego="";
var palabrasorteada="";
var letra = "";
var posi = 500;
window.onkeypress= teclaApretada;

function sortearPalabra(){
	const pospalabra = Math.floor(Math.random()*palabrasecreta.length);
	return palabrasorteada = (palabrasecreta[pospalabra]);
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
	letra = (evento.key).toUpperCase();  
	console.log(isNaN(letra));
	if(!isNaN(letra)){
		alert("Ingrese una letra");
	letra = "";
	return;
	}
	chequearLetra(letra,palabrasorteada);
} 

// chekear que la letra ingresada está en la palabra

function chequearLetra(letra,palabra){
	var posc=500;
	letracorrecta=false;
	for(var i=0; i < palabra.length; i++){
		if(letra == palabra.charAt(i)){
			dibujarLetraCorrecta(letra,posc);
			letracorrecta=true;
		} 
	posc+=30;        
	}
	if(letracorrecta == false){
		dibujarLetraIncorrecta(letra,posi);
			posi+=20;
	}
}

// dibujar letra correcta

function dibujarLetraCorrecta(letra,x){
	console.log(letra);
	lapiz.beginPath();
	lapiz.fillStyle = "blue";
	lapiz.font = "bold 30px arial";
	lapiz.fillText(letra,x,390);
}

//dibujar letra incorrecta

function dibujarLetraIncorrecta(letra,x){
	lapiz.beginPath();
	lapiz.fillStyle = "red";
	lapiz.font = "bold 20px arial";
	lapiz.fillText(letra,x,450);
}

// inicio del juego

function iniciarJuego() {
	document.getElementById("iniciar-juego").style.display = "none";
	document.getElementById("crear-palabra").style.display = "none";
	document.getElementById("horca").style.display = "block";
	sortearPalabra();
	contarLetras(palabrasorteada);
	dibujarGuiones(numletras);
	
}
