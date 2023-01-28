
function encriptar(){
    var cadena = document.getElementById("text-area").value.toLowerCase();
    // replace funcion que reemplaza tecto por otro texto
    // parámetros: i para mayusculas y/o minusculas; g para todo el renglon; m multiples renglones
    var cifrada = cadena.replace(/e/igm,"enter");
    var cifrada = cifrada.replace(/o/igm,"over")
    var cifrada = cifrada.replace(/i/igm,"imes");
    var cifrada = cifrada.replace(/a/igm,"ai");
    var cifrada = cifrada.replace(/u/igm,"ufat");

    document.getElementById("mono").style.display = "none";
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("mensaje").innerHTML = cifrada;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
}

function desencriptar(){

    var cadena = document.getElementById("text-area").value.toLowerCase();
    
    var cifrada = cadena.replace(/enter/igm,"e");
    var cifrada = cifrada.replace(/over/igm,"o")
    var cifrada = cifrada.replace(/imes/igm,"i");
    var cifrada = cifrada.replace(/ai/igm,"a");
    var cifrada = cifrada.replace(/ufat/igm,"u");

    document.getElementById("mono").style.display = "none";
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("mensaje").innerHTML = cifrada;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}
