var listaPalabras = ["HTML", "CSS","PYTHON","JAVA","PERRO","GATO","REACT","ANGULAR"];
var listaLetras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var incremental = 0;
var contadorEventos= 0;
var contador = 0;
let contenedorPrincipal = document.getElementById("contenedor-principal")
let btn1 = document.getElementById("botonUno");
let btn2 = document.getElementById("botonDos");
let btn3 = document.getElementById("botonTres");
let btn4 = document.getElementById("botonCuatro");
let btn5 = document.getElementById("cancelar");
let btn6 = document.getElementById("agregar");
var d = document;
var  palabraJuego = null

let palabraNueva = document.getElementById("palabra");
let ahorcado = document.getElementById("ahorcado");


const parte0 = () =>{
    pincel.lineWidth=4;
    pincel.strokeStyle = '#0A3871';
    pincel.beginPath();
    pincel.moveTo(0,400);
    pincel.lineTo(400,400);
    pincel.stroke();
    pincel.closePath();
}
   
const parte1 = () =>{
 
    pincel.beginPath();
    pincel.moveTo(50,50);
    pincel.lineTo(50,400);
    pincel.stroke();
    pincel.closePath();

}
const parte2 = () =>{
    pincel.beginPath();
    pincel.moveTo(50,50);
    pincel.lineTo(250,50);
    pincel.stroke();
    pincel.closePath();
    
}
const parte3 = () =>{
    pincel.beginPath();
    pincel.moveTo(250,50);
    pincel.lineTo(250,100);
    pincel.stroke();
    pincel.closePath();

}

const parte4 = ()=>{
    pincel.beginPath();
    pincel.arc(250,133,35,0,2*3.14);
    pincel.stroke();
    pincel.closePath();
    
}
const parte5 = () =>{
    
    pincel.beginPath();
    pincel.moveTo(250,168);
    pincel.lineTo(250,300);
    pincel.stroke();
    pincel.closePath();
}

const parte6 = () =>{
    pincel.beginPath();
    pincel.moveTo(250,200);
    pincel.lineTo(300,250);
    pincel.stroke();
    pincel.closePath();
    
}
const parte7 = () =>{
    
    pincel.beginPath();
    pincel.moveTo(250,200);
    pincel.lineTo(200,250);
    pincel.stroke();
    pincel.closePath();
    
}
const parte8 = () =>{
      
    pincel.beginPath();
    pincel.moveTo(250,300);
    pincel.lineTo(200,350);
    pincel.stroke();
    pincel.closePath();
}
const parte9 = () =>{
    
    pincel.beginPath();
    pincel.moveTo(250,300);
    pincel.lineTo(300,350);
    pincel.stroke();
    pincel.closePath();
}

var dibujo = [parte1,parte2,parte3,parte4,parte5,parte6,parte7,parte8,parte9];

//dibujo
let canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");

parte0();

    const imprimir = (e) =>{
             
        var letra = e.key;
        //for validador de letras
        for(let i = 0; i< listaLetras.length; i++){
            if(letra.toUpperCase() == listaLetras[i]){
                
        listaLetras.splice(i,1);
        var letraMala;
        var letraBuena;


        for(let i = 0; i<palabraJuego.length; i++){
       
            if(palabraJuego[i] == letra.toUpperCase()){
                let muestra = document.querySelectorAll(".muestraPalabra")[i];
                muestra.style.visibility = "visible"
                letraBuena = letra.toUpperCase();
                contador++;
               if(contador == palabraJuego.length){
                ahorcado.classList.add("acomodar");
                d.removeEventListener('keydown', imprimir);
                let ganar =  document.getElementById("ganado");
                ganar.classList.remove("quitar")
               }
             }else{
                letraMala = letra.toUpperCase();
                
             }
        }
       
       if(letraMala !== undefined && letraBuena != letraMala){
        
        let letraAbajo = document.getElementById("palabra-abajo");
        let p = document.createElement("p");
        p.classList.add("margen");
        p.textContent = letraMala;
        letraAbajo.appendChild(p);
        if(incremental<9){
        dibujo[incremental]();
        incremental++;
     
        }else{
           
            ahorcado.classList.add("acomodar");
            d.removeEventListener('keydown', imprimir);
            let perder =  document.getElementById("perdido");
            perder.classList.remove("quitar")
        }
       }
    
       
    } 
    
}
    } 




const jugarGame = (listaPalabras) =>{
   
    var randomNumber = Math.floor(Math.random() * listaPalabras.length); 
     palabraJuego = listaPalabras[randomNumber];
   
   
    // for que crea los divs
    for(let i = 0; i<palabraJuego.length; i++){
        let divPalabra = document.getElementById("palabra-juego");
        let div = document.createElement("div");
        div.classList.add("seleccioname");
        divPalabra.appendChild(div);
    }

        
    // for que crea la palabra y las lineas
    for(let i = 0; i<palabraJuego.length; i++){
        let divPalabra = document.querySelectorAll(".seleccioname")[i];
        let p = document.createElement("p");
        p.classList.add("muestraPalabra");
        p.textContent = palabraJuego[i];
        let div = document.createElement("div");
        div.classList.add("muestraLinea");
        divPalabra.appendChild(p);
        divPalabra.appendChild(div);
    }

    
    
    
}

   
  
    //desistir funcionalidad
const desistirGame = () =>{
    let div = document.getElementById("palabra-juego");
    let div2 = document.getElementById("palabra-abajo");
    let perdido = document.getElementById("perdido");
    let ganado = document.getElementById("ganado");
    let canvas = document.querySelector("canvas");


    perdido.classList.add("quitar");
    ganado.classList.add("quitar");
    while (div.firstChild){
        div.removeChild(div.firstChild);
        
      };
      
      while (div2.firstChild){
        div2.removeChild(div2.firstChild);
        
      };
      
      //pincel.clearRect(0,0,600,400);
      canvas.width = canvas.width;
      parte0();
      incremental = 0;
      contador = 0;
      listaLetras =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   
     
}


btn1.addEventListener('click', (e)=>{
    e.preventDefault()
    contenedorPrincipal.classList.add('quitar')
    btn1.classList.add('quitar');
    btn2.classList.add('quitar');
    btn3.classList.remove('quitar');
    btn4.classList.remove('quitar');
    ahorcado.classList.remove('quitar')
    ahorcado.classList.add('opacar');
    palabraJuego = null;
    d.addEventListener('keydown', imprimir);
    jugarGame(listaPalabras)
});

btn2.addEventListener('click', e => {
    e.preventDefault();
    palabraNueva.classList.remove('quitar');
    btn1.classList.add('quitar');
    btn2.classList.add('quitar');
    contenedorPrincipal.classList.add('quitar')
 
    
})

btn3.addEventListener('click', e => {
    e.preventDefault();
    btn1.classList.add('quitar');
    btn2.classList.add('quitar');
    incremental= 0;
    desistirGame();
    d.addEventListener('keydown',imprimir);
    palabraJuego = null;
    jugarGame(listaPalabras);
})


btn4.addEventListener('click', (e)=>{

    e.preventDefault();
    contenedorPrincipal.classList.remove('quitar')
    btn3.classList.add('quitar');
    btn4.classList.add('quitar');
    btn1.classList.remove('quitar');
    btn2.classList.remove('quitar');
    ahorcado.classList.add('quitar');
    d.removeEventListener('keydown', imprimir)
    desistirGame()
})

btn5.addEventListener('click', e =>{
    e.preventDefault();
    btn1.classList.remove('quitar');
    btn2.classList.remove('quitar');
    palabraNueva.classList.add('quitar');
    contenedorPrincipal.classList.remove('quitar');
})




btn6.addEventListener('click', e=>{
    e.preventDefault()
    let input = document.querySelector("textarea").value;
   
    let incorrecto = document.createElement("h2");
     let  palabraFinal = input.toUpperCase();
     let palabraAgregar;
    let palabraRepetida;
    
  
    for(let i = 0; i< listaPalabras.length ; i++){
        if( listaPalabras.includes(palabraFinal,i)){
            
            palabraRepetida = true;
      
        }else {
            palabraAgregar = true;
        }
    };
        
        if(palabraAgregar && !palabraRepetida && palabraFinal!=='' && (palabraFinal.length<=8 && palabraFinal.length>=3)){
            
         listaPalabras.push(palabraFinal);
         btn3.classList.remove('quitar');
         btn4.classList.remove('quitar');
         palabraNueva.classList.add('quitar');
         ahorcado.classList.remove('quitar')
         ahorcado.classList.add('opacar');
         palabraJuego = null;
         d.addEventListener('keydown', imprimir)
         jugarGame(listaPalabras);  
        }else if(palabraFinal===''){
            let div3 = document.getElementById("incorrecto");
            incorrecto.textContent = `TIENES QUE ESCRIBIR UNA PALABRA `;
            div3.appendChild(incorrecto);

            setTimeout(() => {
                incorrecto.remove()
            }, 3000);
        }else if(palabraFinal.length>8 || palabraFinal.length<3){
            let div3 = document.getElementById("incorrecto");
            incorrecto.textContent = `LA PALABRA TIENE QUE SER MENOR A 8 CARACTERES Y MAYOR A 3 CARACTERES`;
            div3.appendChild(incorrecto);

            setTimeout(() => {
                incorrecto.remove()
            }, 3000);
        } else{
            let div3 = document.getElementById("incorrecto");
            incorrecto.textContent = `LA PALABRA ${palabraFinal} YA EXISTE `;
            div3.appendChild(incorrecto);

            setTimeout(() => {
                incorrecto.remove()
            }, 3000);
        }

       
        
})


