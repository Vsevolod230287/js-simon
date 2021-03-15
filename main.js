// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l 'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.
$(document).ready(function() {


  var btnNuovaPartita = $('#nuova_partita');

  btnNuovaPartita.click(function() {
    var innerRandom = $('.num_random');
    var btnPronto = $('#pronto');
    var innerRandom = $('.num_random');
    var innerUtente = $('.num_utente');
    var array_random = [];
    var array_utente = [];
    var indovinati = $('.indovinati');



    innerRandom.html("");
    innerUtente.html("");
    indovinati.html("");

    btnNuovaPartita.addClass('none');
    $('h1.ricorda_numeri').removeClass('none');
    btnPronto.removeClass('none');
    $('h1.tuoi_numeri').addClass('none');
    $('h1.punteggio').addClass('none');



    for (var i = 0; i < 5; i++) {
      var random = Math.floor(Math.random() * (10 - 0) + 0);
      array_random.push(random);
      innerRandom.append("<div>" + random + "</div>");
    }

    btnPronto.click(function() {
      $('h1.ricorda_numeri').addClass('none');
      btnPronto.addClass('none');
      innerRandom.children('div').addClass('none');
      $('.timer-wor').removeClass('none');

      var ir = 1;
      var myInt = setInterval(function() {

        document.querySelector('.timer-wor').innerHTML = ir;
        ir++
      }, 1000);


      setTimeout(function() {

        $('.timer-wor').addClass('none');
        clearInterval(myInt);

        var i = 0;
        while (i < 5) {
          var num_inserito = parseInt(prompt("Inserisci 5 numeri da (0 - 9)!   Inserisci il " + (i + 1) + " numero: "));
          if (0 <= num_inserito && num_inserito < 10) {
            array_utente.push(num_inserito);
            innerUtente.append("<div>" + num_inserito + "</div>");
            i++;
          } else {
            alert("!Inserisci un numero da 0 a 9");
          }

        }

        setTimeout(function() {

          $('h1.tuoi_numeri').removeClass('none');
          $('h1.punteggio').removeClass('none');
          innerUtente.removeClass('none');
          $('h1.ricorda_numeri').removeClass('none');
          innerRandom.children('div').removeClass('none');
          btnNuovaPartita.removeClass('none');




          var count = 0;
          for (var i = 0; i < array_random.length; i++) {
            if (array_random[i] == array_utente[i]) {
              var indovinato = array_random[i];
              indovinati.append("<div>" + indovinato + "</div>");
              count++;
            }
          }
          if (count == 0) {
            indovinati.append("<h2>Non ti sei ricordato nemeno un numero!</h2>");
          };

        }, 500);

      }, 11000);

    });
  });

});
