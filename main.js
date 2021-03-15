// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l 'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.
$(document).ready(function() {
  var innerRandom = $('.num_random');
  var innerUtente = $('.num_utente');


  generatore_random();



  setTimeout(inserimento_Utente, 30000);



});

// functions
function generatore_random(){
  // 5 numeri generati casualmente appesi al nostro div.num_random
  var array_numbers = [];
  var innerRandom = $('.num_random');
  
  for (var i = 0; i < 5; i++) {
    var random = Math.floor(Math.random() * (10 - 0) + 0);
    array_numbers.push(random);
    innerRandom.append("<div>" + random + "</div>");
  }

}

function inserimento_Utente() {
  var array_utente = [];
  for (var i = 0; i < 5; i++) {
    var num_inserito = prompt("Inserisci il " + (i + 1) + " numero: ");
    array_utente.push(num_inserito);
    innerUtente.append("<div>" + num_inserito + "</div>");
  }

}
