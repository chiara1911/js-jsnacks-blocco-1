
// Descrizione:
// > Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
//  
//  - 2. aggiungere la pesca all'array della frutta
//  - 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"

// - 1. creare l'array con la frutta del frigorifero
const fruits = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
];

fruits.push('pesca');
console.log(fruits);
const btn = document.querySelector('button');
const inputEl = document.getElementById('frutta');
const macedonia = document.getElementById('frigo');
let flag = '';
btn.addEventListener('click', function () {
    for (let i = 0; i <= fruits.length; i++) {
        
        if (fruits['cocomero'] === true) {
            flag = true;
        } else {
            flag = false;
        }
    }

    macedonia.innerHTML = flag;
    console.log(flag);

})















// utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}