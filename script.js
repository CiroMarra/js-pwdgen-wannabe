// chiedi nome utente.
const userName = prompt('Ciao come ti chiami?');


// chiedi cognome utente.

const userSurname = prompt ('Il tuo cognome?');


// chiedi colore preferito dell'utente.

const userPrefColor = prompt ("Il tuo colore preferito?");


// Chiedi un numero all'utente (BONUS).
const userNumber = prompt('Inserisci un numero');
const userRealNumber = parseInt(userNumber);


// Somma del numero dell'utente più numero fisso.
const sum = userRealNumber + 23;


// generazione della password insicurissima per l'utente.
const userMessage = `la tua password è: ${userName}${userSurname}${userPrefColor}${sum}`

// messaggio per l'utente diretatamente sulla pagina.
document.getElementById('message').innerHTML = userMessage;