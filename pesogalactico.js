function Calcular () {
	//declarar el peso de una persona en otro planeta
	var P,G,Calcular;
	//Recuperar los valores de cada caja de texto y asignarlos a loas variantes
	P=parseInt(document.getElementByInt("P").value);
	G=parseInt(document.getElementByInt("G").value);
	//Calcular el peso de la persona entre la gravedad del planeta
	Calcular=P/G;
	//Mostrar el resultado en la caja de texto
	document.getElementById("Calcular").value="";

}
function Borrar(){
	document.getElementById("P").value="";
	document.getElementById("G").value="";
	document.getElementById("Calcular").value="";
}