function Entrar() {
	// declarar las variables
	var U,C
	//recuperar los datos
	U=document.getElementById("Usu").value;
	C=document.getElementById("Con").value;
	//validar los datos 
	if(U=="MARIA ITZEL"&&C=="1234"){
		alert("Usuario y contraseña correctos");
		window.open("Peso galactico")
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
    else{
    	 alert("Usuario y contraseña incorrectos");
    	 document.getElementById("Usu").value="";
    	 document.getElementById("Con").value="";
    }

}