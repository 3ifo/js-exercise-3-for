/* 2. Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.*/

/* let n = parseInt(prompt("Inserisci un numero"));
if (isNaN(n)) {
  alert("inserisci un numero valido");
} else {
  let arrayGenerale = [];
  for (let i = 0; i < n; i++) {
    arrayParziale = [];
  }

  for (let p = 0; p < 10; p++) {
    let numeroCasuale = Math.floor(Math.random() * 100) + 1;
    arrayParziale.push(numeroCasuale);
    console.log(numeroCasuale);
  }
} */

/* 3. In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

let arrayInvitati = [
  "Marco",
  "Filippo",
  "Jacopo",
  "Leonardo",
  "Saverio",
  "Carmine",
];

let invitati = prompt("Come ti chiami?");

if (arrayInvitati.includes(invitati)) {
  alert("Puoi accedere");
} else {
  alert("non puoi entrare mi dispiace");
}
