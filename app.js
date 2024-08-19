let contador = 0,contador2 = 0;
 let texto = "", nuevoTexto = "",aux = "",aux2 = "";

  function encriptarTexto(){
    
   let textoActual = document.getElementById('textoArea').value;
   let element = document.getElementById('area');

   element.style.visibility = 'visible';

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

       eliminarFotoYTexto();
       accionBotonCopiar();
       textoSinAcentoYMayuscula(nuevoTexto);
       aux = nuevoTexto;
       nuevoTexto = "";
}

function desencriptarTexto(){

   
  asignarTexto('area',texto);
}


function asignarTexto(etiqueta, texto){

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

function creandoBtnCopiar(){

   let nuevoElemento = document.createElement("button");
   nuevoElemento.textContent = "Copiar";

   nuevoElemento.className = 'botonCopiar';

   if(contador == 1){

      let seccion = document.querySelector('section');
      seccion.appendChild(nuevoElemento);
   } 

   return nuevoElemento;
 }

 function accionBotonCopiar(){

  let boton = creandoBtnCopiar();

  boton.addEventListener("click",function(){

       navigator.clipboard.writeText(aux); 
  });

  return boton;
}

function textoSinAcentoYMayuscula(textoDeArea){

   let acentos= "ÁÉÍÓÚÑáéíóúñABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
   let validarTexto = false;

   aux2 = textoDeArea;
   
   for(let i = 0; i < acentos.length; i++){
   
     for(let j = 0; j < aux2.length; j++){
       
       if(aux2.charAt(j) == acentos.charAt(i)){

        asignarTexto('mensaje', "ERROR!! no puede contener Mayusculas ni Acentos");
      
        contador2 = -1;
        break;
         
       }
    }
 }

      if(contador2 == -1){

        validarTexto = false;

        contador2 = 0;     
      
      } else {

        validarTexto = true;

         if(validarTexto){
 
          asignarTexto('area', textoDeArea);
      }         
   }
 
}
