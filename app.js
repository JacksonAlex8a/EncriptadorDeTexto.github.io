let contador = 0,contador2 = 0;
let texto = "";

  function encriptarTexto(){ // Encriptando texto
    let nuevoTexto = "";

    let textoActual = document.getElementById('textoArea').value;

    texto = textoActual;

    for(let i = 0; i < texto.length; i++){

      switch(texto.charAt(i)){
  
        case "a": 
                 nuevoTexto += "ai";
            break;
        
        case "e":
                 nuevoTexto += "enter";
            break;     
          
        case "i":
                 nuevoTexto += "imes";
             break;    
                 
        case "o": 
                 nuevoTexto += "ober";
             break;
  
        case "u": 
                 nuevoTexto += "ufat";         
             break;   
        default:
               nuevoTexto += texto.charAt(i);
            break;
      }
    }

       visibilidadDeElementos('area');
       visibilidadDeElementos('boton3');
       eliminarFotoYTexto();
       accionBotonCopiar();
       textoSinAcentoYMayuscula(nuevoTexto);
       nuevoTexto = "";
       
}

function desencriptarTexto(){ // funcion q desencripta el texto encriptado

  let nuevoTexto = "",aux = "";

  let textoActual = document.getElementById('textoArea').value;

  aux = textoActual;
   
  console.log(nuevoTexto);
  nuevoTexto = aux.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").
                replaceAll("ober","o").replaceAll("ufat","u");

  visibilidadDeElementos('area');
  visibilidadDeElementos('boton3');
  eliminarFotoYTexto();
  accionBotonCopiar();
  textoSinAcentoYMayuscula(nuevoTexto);
 }


function visibilidadDeElementos(elemento){ // Esta funcion le quita invisibilidad a mis elementos

    let element = document.getElementById(elemento);

    element.style.visibility = 'visible';
}

function asignarTexto(etiqueta, texto){ // Esta funcion permite darle texto a mi area

  let dato = document.getElementById(etiqueta);

  dato.innerHTML= texto;

}

function eliminarFotoYTexto(){

  contador++;

  let foto = document.getElementById('muñeco');
  let mensaje = document.getElementById('losMensajes');

  if(contador == 1){
     foto.remove();
      mensaje.remove();
  }
  return;
}

 function accionBotonCopiar(){ // Metodo q me permite dar accion al boton de copiar

  let boton = document.getElementById('boton3');

  boton.addEventListener("click",function(){

      var texto1 = document.getElementById('area');

      texto1.select();
      texto1.setSelectionRange(0,99999);

      document.execCommand("copy");

      document.getElementById('area').extContent = "texto copiado";
  });
  
  return boton;
}

function textoSinAcentoYMayuscula(textoDeArea){ //Me permite detectar si hay mayusculas o acentos

   let acentos= "ÁÉÍÓÚÑáéíóúñABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
   let aux2 = "", aux3 = "",x = 0;

   aux2 = textoDeArea;
   
   for(let i = 0; i < acentos.length; i++){
   
     for(let j = 0; j < aux2.length; j++){
       
       if(aux2.charAt(j) == acentos.charAt(i)){
        aux3 += aux2.charAt(j);
        x = -1;
        break;
         
       }
    }
 }
 
   validacionTexto(textoDeArea,x,aux3);
}

function validacionTexto(mensajeArea,x,y){

    if(x == -1){

   alert("ERROR!! no se puede implementar  caracteres con acentos ni mayusculas");

    if(y.length == 1){

    alert("Eliminar el carácter mayúscula: " + aux3);

   } else {

      alert("Elimina los caracteres mayúsculas: " + aux3);
   }
        contador2 = 0;     
      
      } else {
 
       asignarTexto('area', mensajeArea);          
   }   
}

