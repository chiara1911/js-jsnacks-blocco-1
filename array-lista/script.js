
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
// console.log(fruits);
const btn = document.querySelector('button');
const inputEl = document.getElementById('frutta').value;
const anguria = document.getElementById('frigo');
let flag = false;
btn.addEventListener('click', function () {
    
    for (let i = 0; i <= fruits.length; i++) {
        
        if (fruits[i] === 'cocomero') {
            flag = true;
           
        }        
        
    }

    if (flag === false){
        text = 'Oh no, devo uscire a comprare il cocomero!';
    } else {
      text = 'Trovato! Devo solo preparare il cocktail.';
    }
    
   anguria.innerHTML = text;
    console.log(text);
    

})
;














// utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}