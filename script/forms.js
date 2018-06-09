
function validaContacto(){
    var regexFecha = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    
    var regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    var nom = document.getElementById('nombre');
    var ape = document.getElementById('apellido');
    var correo = document.getElementById('correo');
    var asunto = document.getElementById('asunto');
    var msg = document.getElementById('msg');
    
    
    if(!nom.value){
        alert("Debe ingresar el nombre");
        nom.focus();
        return false;
    }
    else if(!ape.value){
        alert("Debe ingresar el apellido");
        nom.focus();
        return false;
    }
    else if(!regexCorreo.test(correo.value)){
        alert("Debe ingresar un correo válido");
        correo.focus();
        return false;
    }
    else if(!asunto.value){
        alert("Escriba un asunto");
        asunto.focus();
        return false;
    }    
    else if(!msg.value){
        alert("Debe escribir un mensaje");
        msg.focus();
        return false
    }else{
        alert("Su consulta ha sido enviada exitosamente");
        return true;
    }
}
function validaEncuesta(){
    var nombre = document.getElementsByName('nombre');
    var apellido = document.getElementsByName('apellido');
    var email = document.getElementsByName('email');
    var genero = document.getElementsByName('genero');
    var forma = document.getElementsByName('forma');
    var descripcion = document.getElementsByName('descripcion');
    var regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!nombre[0].value){
        alert("Debe ingresar el nombre");
        nombre[0].focus();
        return false;
    }
    else if(!apellido[0].value){
        alert("Debe ingresar su apellido");
        apellido[0].focus();
        return false;
    }
    else if(!regexCorreo.test(email[0].value)){
        alert("Debe ingresar un correo válido");
        email[0].focus();
        return false;
    }
    else if(genero[0].selectedIndex == -1){
        alert("Debe seleccionar el género");
        genero[0].focus;
        return false;
    }
    else if(forma[0].selectedIndex == -1){
        alert("Debe seleccionar una forma de práctica");
        forma[0].focus();
        return false;
    }
    else if(!descripcion[0].value){
        alert("Debe describir sus gustos y objetivos brevemente");
        descripcion[0].focus();
        return false;
    }
    else{
        alert("Muchas gracias por su colaboración.\nLa encuesta fue enviada correctamente");
        return true;
    }
}