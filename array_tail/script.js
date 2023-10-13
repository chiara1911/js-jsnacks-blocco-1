// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.



// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

// 1. chiedere quanti elementi
// 2. in base a quanti sono, metterli nella lista numeri random da 1 a 100


const btn = document.querySelector('button');


btn.addEventListener('click', function () {
    const number = parseInt(document.getElementById('number').value);
    const numeriRandom = [];
    

    for (let i = 0; i < number; i++) {
        numeriRandom.push(getRndInteger(1, 101));
        // console.log(numeriRandom);
    };

    console.log(numeriRandom);

    let lastNumber = [
        (numeriRandom[numeriRandom.length - 5]),
        (numeriRandom[numeriRandom.length - 4]),
        (numeriRandom[numeriRandom.length - 3]),
        (numeriRandom[numeriRandom.length - 2]),
        (numeriRandom[numeriRandom.length - 1]),
    ];
    console.log(lastNumber);

})

// console.log(btn);

// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}