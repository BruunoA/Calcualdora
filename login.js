function redirogirPagina(){
    var usuario = document.getElementById("usuario").value;
    var opcionselec = document.getElementById("opcion").value;
    var mensajeError = document.getElementById("mensajeError").value;


    mensajeError.style.display = 'none';
    mensajeError.textConten = '';


    if(!usuario){
        mensajeError.textConten = 'Por favor ingrese su nombre de usuario';
        mensajeError.style.display = 'block';
        return;
    }
    
    if(!opcionselec) {
        mensajeError.textConten = 'Por favor seleccione una opcion';
        mensajeError.style.display = 'block';
        return;
    }

    window.location.href = opcionselec;
}