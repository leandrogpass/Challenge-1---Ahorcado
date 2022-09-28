const palabrasecreta = ["PUMA","CONEJO","TORTUGA","PAJARITO","CERDO","vaca","CORDERO","GATO","PERRO","GALLINA"];      
var palabraenjuego="";
var palabrasorteada="";
var letra = "";
var posi = 500;
var cuerpo = 1;
var gano = true;
var contl = 0;
window.onkeypress= teclaApretada;

function sortearPalabra(){
	const pospalabra = Math.floor(Math.random()*palabrasecreta.length);
	return palabrasorteada = (palabrasecreta[pospalabra]).toUpperCase();
}

function contarLetras(palabra){
	return numletras = palabra.length;
}

// Dibujar guiones de la palabra y horca

var pantalla = document.querySelector("canvas");
var lapiz = pantalla.getContext("2d");

function dibujarHorca(){
	lapiz.fillStyle = "#7B241C";
	lapiz.fillRect(490,320,220,20);
	lapiz.fillRect(530,50,15,270);
	lapiz.fillRect(540,50,120,15);
	lapiz.fillRect(650,50,10,50);
}

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

// chekear que la letra ingresada está en la palabra y condición del juego.

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
		dibujarAhorcado(cuerpo);
		cuerpo+=1;
	}
	if(cuerpo > 7){
		gano = false;
		finalizarJuego();
	}
	if(contl == numletras){
		gano = true;
		finalizarJuego();
	}
}

// dibujar letra correcta

function dibujarLetraCorrecta(letra,x){
	console.log(letra);
	lapiz.beginPath();
	lapiz.fillStyle = "blue";
	lapiz.font = "bold 30px arial";
	lapiz.fillText(letra,x,390);
	contl+=1;
}

//dibujar letra incorrecta

function dibujarLetraIncorrecta(letra,x){
	lapiz.beginPath();
	lapiz.fillStyle = "#700";
	lapiz.font = "bold 20px arial";
	lapiz.fillText(letra,x,450);
}

//dibujar ahorcado

function dibujarAhorcado(cuerpo){
	switch(cuerpo){
		case 1: dibujarCabeza(); // cabeza
		break;
		case 2: dibujarCuerpo(655,146,655,226); //tronco
		break;
		case 3: dibujarCuerpo(655,146,710,200); // brazo izq
		break;
		case 4: dibujarCuerpo(655,146,600,200); // brazo der
		break;
		case 5: dibujarCuerpo(655,226,710,280); // pierna izq
		break;
		case 6: dibujarCuerpo(655,226,600,280); // pierna der
		break;
	}
}

function dibujarCabeza(){
	lapiz.fillStyle = "#000"; //cabeza
	lapiz.moveTo(677,122);
	lapiz.arc(655,122,24,0,Math.PI*2);
	lapiz.lineWidth = 5;
	lapiz.stroke();
}

function dibujarCuerpo(xi,yi,xf,yf){
	lapiz.beginPath(); 
	lapiz.moveTo(xi,yi);
	lapiz.lineTo(xf,yf);
	lapiz.lineWidth = 5;
	lapiz.stroke()
}
// finalizar juego

	function finalizarJuego(){
		if(gano == false){
			lapiz.beginPath();
			lapiz.fillStyle = "red";
			lapiz.font = "bold 20px arial";
			lapiz.fillText("FIN DEL JUEGO",750,140);	
		} else {
			lapiz.beginPath();
			lapiz.fillStyle = "green";
			lapiz.font = "bold 20px arial";
			lapiz.fillText("Ganaste ¡FELICIDADES!",750,140);
		}
	}
// inicio del juego

function iniciarJuego() {
	document.getElementById("iniciar-juego").style.display = "none";
	document.getElementById("crear-palabra").style.display = "none";
	document.getElementById("horca").style.display = "block";
	sortearPalabra();
	console.log(palabrasorteada);
	contarLetras(palabrasorteada);
	dibujarHorca();
	dibujarGuiones(numletras);
	
}
