$(function(){
  var notes = [];
  $('#envoyer').click(function(){
    notes.push($('#note').val());
    if(notes.length==5){
      $('#envoyer').prop('disabled', true); // prop permet de modifier un attribut
      $('display').html('Votre moyenne est ' + average(notes));
    }
  });
  // fonction average permet de calculer la moyenne des élements d'un tableau qu'on lui passe un parametre.
  function average(notes) {
    var somme = 0;
    for (var i = 0; i < notes.length; i++){
      somme += parseInt(notes[i]);
    }
    return somme/notes.length;
  }
});
