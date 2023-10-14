


// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.




const btn = document.querySelector('button');



btn.addEventListener('click', function () {
    const beanEl = parseInt(document.getElementById('beanEl').value);
const lunaEl = parseInt(document.getElementById('lunaEl').value);
const lotto = document.getElementById('lotto');


const bean = [];
const luna = [];
    for (let i = 0; i < beanEl; i++) {
        bean.push(i);

    }
    for (let i = 0; i < lunaEl; i++) {
        luna.push(i);

    }
   


    if (beanEl === lunaEl) {
        text = 'elementi uguali';
    } else if (beanEl > lunaEl) {
        let differenza = beanEl - lunaEl;
        for (let i = 0; i < differenza; i++) {
            luna.push(bean[i]); 
            text = 'Questi sono gli elementi resi di ugual misura ' + 'luna = ' + luna + + ' bean = ' + bean;
        }
       
    } else {
        let differenza = lunaEl - beanEl;
        for (let i = 0; i < differenza; i++) {
            bean.push(luna[i]);
            text = 'Questi sono gli elementi resi di ugual misura ' + 'luna = ' + luna +  ' bean = ' + bean;
        }
    }

     lotto.innerHTML = text;
});



