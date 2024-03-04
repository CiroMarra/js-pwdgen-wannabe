// nome utente.
const userName = prompt('Ciao come ti chiami?');


//cognome utente.

const userSurname = prompt ('Il tuo cognome?');


//colore preferito.

const userPrefColor = prompt ("Il tuo colore preferito?");



// generazione della password insicurissima per l'utente.
const userMessage = (userName + userSurname + userPrefColor + 23);


// messaggio per l'utente diretatamente sulla pagina.
document.getElementById('message').innerHTML = userMessage;