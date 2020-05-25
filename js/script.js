// chiedo all'utente la sua email
var emailUtente = prompt('Inserisci la tua email');

// stabilisco elenco email di chi può accedere alla pagina
var emailAccesso = ["alice.spina@gmail.com","guiovanni.silo@gmail.com","erica.pilla@gmail.com","giuseppe.farina@gmail.com","marianna.celle@gmail.com"]

// stabilisco variabile emailUtenteAccesso
var emailUtenteAccesso = false;
//controllo che mail utente sia nella lista
for (var i = 0; i < emailConAccesso.lenght; i++) {
  if (emailAccesso == emailUtente) {
    emailUtenteAccesso = true;
  }
}

// messaggio da dare all'utente in base all'esito del controllo
