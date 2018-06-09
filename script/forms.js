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
    }
    else if(!asunto.value)[
        alert("Escriba un asunto");
        asunto.focus();
        return false;
    ]
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
    
}