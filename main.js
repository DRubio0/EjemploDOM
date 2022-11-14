//Uso del metodo addEventListener 
/* indicar al agente de usuario que permanezca atento a la interacción de un usuario sobre un elemento en concreto,*/

//variables
//las variables const no pueden ser modificadas
//las variables let pueden ser modificadas

const btnAumentar = document.querySelector('.btn-info');
const btnDisminuir = document.querySelector('.btn-danger');
const span = document.getElementById('span');
let contador = 0;

//boton azul

btnAumentar.addEventListener('click',()=>{
    contador ++;
    span.textContent = contador;
   //console.log(contador);
});

//boton rojo

btnDisminuir.addEventListener('click',()=>{
    contador --;
    span.textContent = contador;
   //console.log(contador);
});
