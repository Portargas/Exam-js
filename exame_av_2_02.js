//Definición do obxecto Faltas
function faltas(dni, email){
    this.dni = dni;
    this.email = email;
    this.modulo = "";
    this.falta = 0;
    
    
    //metodo get
    this.getDni = function(){
        return this.dni;
    }
        
    this.getEmail = function(){
        return this.email;
    }
        
    this.getModulo = function(){
        return this.modulo;
    }
    
    this.getFalta = function(){
        return this.falta;
    }
        
    //metodos set
        
    this.setDni = function(dni){
        this.dni = dni;
    }
        
    this.setEmail = function(email){
        this.email = email;
    }
        
    this.setModulo = function(modulo){
        this.modulo = modulo;
    }
    
    this.setFalta = function(falta){
        this.falta = falta;
    }
}
/* Fin da definición do obxecto Faltas */

function validar(){

    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var valor = document.getElementById("faltas").value;
    var seleccion = document.getElementById("modulo").value;
    
    
	//aquí validaranse os datos introducidos seguindo os seguintes patróns
	var pdni = /^\d{8}[a-zA-Z]$/;
	var pemail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
	var penteiro = /^\d*$/;   // só números enteiros

        if(!(dni.match(pdni))){
            alert("El dni es incorrecto");
            return false;
        }
                            
        //validar telefono y como utilizar un patron. En tres formatos distintos. 1º XXXXXXXXX, 2º XXX-XX-XX-XX, 3º XXX-XXXXXX
        
        if(!(valor.match(penteiro))){
            alert("O numero debe ser enteiro");
            return false;
        }
        
        if(!(email.match(pemail))){
            alert("O correo non ten o formato requerido");
            return false;
        }
    
    var falta = new faltas(dni, email);
    
    falta.setFalta(valor);
    falta.setModulo(seleccion);
    
    grabar(falta);
	//unha vez validados creamos a variábel faltas que será un obxecto de tipo Faltas
	//e asignarémoslle os valores introducidos no formulario para posteriormente insertarlos na táboa

	
	return false;		
}

function grabar(faltas){
// recibe unha variábel do tipo obxecto Faltas e inserta unha fila na táboa cos datos almaceados nesa variábel

    //creamos elementos de la tabla
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    
    // creamos los valores que hay en cada elemento
    
    var dn = faltas.getDni();
    var corr = faltas.getEmail();
    var modul = faltas.getModulo();
    var falt = faltas.getFalta();
    
    var text1 = document.createTextNode(dn);
    var text2 = document.createTextNode(corr);
    var text3 = document.createTextNode(modul);
    var text4 = document.createTextNode(falt);
    
    

    //damos un hijo al td
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    
    
    //damos un hijo al tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    
    //mostramos la tabla
    document.getElementById("datos").style.display = 'inline';
    document.getElementById("taboa").appendChild(tr).focus();
    
}
	

