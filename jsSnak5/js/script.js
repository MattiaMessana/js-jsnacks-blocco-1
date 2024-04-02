//TEST
// alert('ciao');

// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

//1. creiamo un array vuoto
const number = [];
console.log(number);

//2. chiediamo 6 volte all'utente di inserire un numero tramite ciclo for 
for (let i = 0; i < 6; i++) {
    // Chiediamo all'utente di inserire un numero
    const numUser = parseInt(prompt("Inserisci un numero:"));
    console.log(numUser);


//3. verifichiamo se il numero è dispari 
if (numUser % 2 !== 0) {
    // Se è dispari, lo inseriamo nell'array
    number.push(numUser);
}
};

//4. stampiamo arrey dei numeri dispari 
console.log(number);
