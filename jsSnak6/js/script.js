//TEST
// alert('ciao');

// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.

//1. chiediamo tramite prompt un numero all'utente 
const userNum = Number(prompt('Scrivi un numero'));
console.log(userNum);

//2. stampiamo il cubo del numero idicato dall'utente
const cubic = Math.pow(userNum, 3);
console.log(cubic);