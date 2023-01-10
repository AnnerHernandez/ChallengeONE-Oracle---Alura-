//e -- enter
//o -- ober
//i -- ines
//a -- ai
//u -- ufat



function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i afecta tanto mayusculas como a minusculas 
    //g para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var textoEncriptado = texto.replace(/e/igm,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"ines");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

    document.getElementById("imagender").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i afecta tanto mayusculas como a minusculas 
    //g para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var textoEncriptado = texto.replace(/enter/igm,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/ines/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");

    document.getElementById("imagender").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio");
}
    