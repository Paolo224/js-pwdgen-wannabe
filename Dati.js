const name = prompt ('Ciao! Come ti chiami? ');
const last_name = prompt ('Ciao! Qual è il tuo Cognome? ');
const color = prompt ('Ciao! Qual è il tuo colore preferito? ');

let dati_completi = name + last_name + color;

console.log(dati_completi);

document.getElementById('dati-utente').innerHTML = dati_completi + "22"; 