//il computer genera numero random
var dadiPc = Math.floor(Math.random() * 6) ;
alert("Pc ha tirato ed il risultato è:" + dadiPc);
// l'utente genera numero random
var dadiUtente = Math.floor(Math.random() * 6) ;
alert("Utente ha tirato ed il risultato è:" + dadiUtente);

// vince chi ottiene somma maggiore
// se il pc ottiene numero maggiore di utente
if(dadiPc > dadiUtente) {
  alert('vince pc!');
}
// se pc ottiene numero minore di utente
else if (dadiPc < dadiUtente) {
  alert('vince utente!');
}
// se pc ottiene numero uguale ad utente 
else {
  alert('parità!');
}
