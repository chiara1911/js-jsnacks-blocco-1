// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.



// Stampiamo poi gli ultimi 5 elementi dell'Array



const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const number = parseInt(document.getElementById('number').value);
    const numeriRandom = [];

    for (let i = 0; i < number; i++) {
        numeriRandom.push(getRndInteger(1, 101));
        // console.log(numeriRandom);
    };
    console.log(numeriRandom);
    // prendo gli ultimi 5 elementi usando il lenght nell'array random
    // settare il valore del nuovo array come numero random = alla lunghezza del primo array - 5 eccetera
    // let lastNumber = [
    //     (numeriRandom[numeriRandom.length - 5]),
    //     (numeriRandom[numeriRandom.length - 4]),
    //     (numeriRandom[numeriRandom.length - 3]),
    //     (numeriRandom[numeriRandom.length - 2]),
    //     (numeriRandom[numeriRandom.length - 1])
    // ];

    for (let i = numeriRandom - 1; i > numeriRandom.length - 5; i --){
        console.log(lastNumber);
    }
    


    // Chiediamo all'utente quanti elementi dell'array dovremo stampare
    // Suggerimenti:   
// 1. chiedere quanti elementi
    let listEl = parseInt(document.getElementById('listEl').value);
    const stampEl= [];
    const lotto = document.getElementById('lotto');
//  controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array
    if (listEl > numeriRandom.length) {
     text ='inserisci un altro valore';

    } else {
        // const stampEl = [listEl];
        for (let i = 0; i < listEl; i++) {
           
            stampEl.push(numeriRandom[i]);
     
        }       
        console.log(stampEl);
        text = ' Questi sono gli elementi che volevi ' + stampEl;
    }
 
 lotto.innerHTML = text;

});



// console.log(btn);

// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
