/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1= 4;
const num2=7;
console.log (num1>num2)
console.log (num2>num1)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num12 = 12;

if (num12 !== 5) {
    console.log("not equal");
} else {
    console.log("Il numero è uguale a 5");
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito 
  è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num10 = 10;

if (num10 %5 ===0) {
    console.log("divisibile per 5"); }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8
   oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numint1= 12
let numint2= 4
if (numint1===8||numint2===8||numint1+numint2===8||numint1-numint2===8){console.log('Ok')}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce.
   Stai salvando il saldo totale del carrello dell'utente 
   in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, 
  l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale
   che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 20; 

const costoSpedizione = (totalShoppingCart > 50) ? 0 : 10;
const Totale = totalShoppingCart + costoSpedizione;

console.log("Totale:",Totale);



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. 
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo,
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const totalShoppingCartp = 20; 
const sottrazione = totalShoppingCartp * 0.2; 
const Promobf= totalShoppingCartp - sottrazione;


const costoSpedizionep = (Promobf > 50) ? 0 : 10;
const Totalep = costoSpedizionep + Promobf;

console.log("Totale:",Totalep);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, 
  crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let first = 10;
let second = 4;
let third = 14;


if (first >= second && first>= third) {
    if (second >= third) {
        console.log(first, second, third);
    } else {
        console.log(first, second, third);
    }
} else if (second >= first && second >= third) {
    if (first >= third) {
        console.log(second, first, third);
    } else {
        console.log(second, third, first);
    }
} else {
    if (first >= second) {
        console.log(third, first, second);
    } else {
        console.log(third, second, first);
    }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito 
  sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore = '60';

if (typeof valore === 'number') {
    console.log("È un numero");
} else {
    console.log("Non è un numero");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pariodispari = 4; // Modifica questo valore per testare diversi numeri

if (pariodispari % 2 === 0) {
    console.log("Il numero è pari");
} else {
    console.log("Il numero è dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il 
  messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/


  let val = 3
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/*ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", 
  il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}
console.log (me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito,
   scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log (me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, 
  scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log ('skills', me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numda1a10 = [1,2,3,4,5,6,7,8,9,10]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array,
   ovvero il valore 10, con il valore 100.
*/
numda1a10.pop ()
console.log ('numda1a10', numda1a10)
numda1a10.push(100)
console.log (numda1a10)
