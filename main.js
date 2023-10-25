/* 2. Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.*/

let n = parseInt(prompt("Inserisci un numero"));
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
}
