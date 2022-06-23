/*
BONUS 1:
Crea un elemento contenitore nel DOM e aggiungendo (attraverso il metodo append(), appendChild() o innerHTML) i vari elementi html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

const resultParagraph = document.getElementById('result');
let word = 'FRIZZ';
let content = '';

// Imposto il ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
     console.log(i)
     content += ` ${i}`;

    // I multipli di 3 e di 5 stampano FrizzBuzz
    if ((i % 3 == 0) && (i % 5 == 0)) {
        content += ` FrizzBuzz`;
    } else {
        // I multipli di 3 stampano FRIZZ
        if (i % 3 == 0) {
            content += ` FRIZZ`;
        }

        // I multipli di 5 stampano BUZZ
        if (i % 5 == 0) {
            content += ` BUZZ`;
        }
    }
}
 
resultParagraph.innerHTML = content;
 
 