//TEST
// alert('ciao');

// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
// no alla festa.

//1. creiamo un array contenente i nomi degli invitati 
const invited = ['mattia', 'giuseppe', 'edoardo', 'francesco', 'massimo', 'federico', 'sergio'];
console.log(invited);

//2. individuiamo il bottone che servirà per avviare il programma
const controll = document.getElementById('btn');

//3. chiediamo nome all'utente 
const userName = document.getElementById('name');
console.log(userName.value);
    

//4. lanciamo il programma al click sul bottone
controll.addEventListener("click", function() {
    //creiamo una variabile flag per gestire gli ingressi 
    let authorized = false;

    //5. tramite ciclo for verifichiamo che l'utente sia iscritto alla lista degli invitati 
    for (let i = 0; i < invited.length; i++) {
        if (userName.value === invited[i]) {
            authorized = true;
            break;
        }
    }
    //stampo output
    const resultElem = document.getElementById('result');
    if (authorized) {
        resultElem.innerHTML = 'Puoi Entrare';
    } else {
        resultElem.innerHTML = 'Non Puoi Entrare';
    }
});