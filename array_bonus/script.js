


// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const bean = [];

const luna = [];


const beanEl = parseInt(document.getElementById('beanEl').value);
const lunaEl = parseInt(document.getElementById('lunaEl').value);
const btn = document.querySelector('button');

btn.addEventListener('click', function (){

     let delta = bean.length - luna.length;
    for (let i = 0 ; i < delta ; i++){

        luna.push(bean[i]);
      
    }
    console.log(luna);
});


// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
