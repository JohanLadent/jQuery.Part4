$(function() {
  var games = ["pierre", "feuille", "ciseaux"]; // On declare le tableau game avec pierre, feuille et ciseaux
  var win = 0, lost = 0, nbGame = 0; // On déclare la fonction win ou on leur attribut la valeur 0
  $('#shifumi').click(function(){
    nbGame++; // augmente le nombre de partie a chaque click
    var computerGame = Math.floor(Math.random()*3+1); // math.random genere un num entre 0 et 1 et math.floor arrondi l'entier
    var player = $("#player").val();
    compare(computerGame, player); // on compare ce que l'ordinateur a choisi et le joueur
    var message = "Le pourcentage de victoire contre l'ordinateur est : " + ()(win/nbGame)*100).toFixed(2) + " %";
    $("#result").html(message); // html sert a renvoyer et modifier l'element selectionné
    $(".left").html(win);
    $(".right").html(lost);
  });
  function compare(g1, g2){

    if (g1 == g2){
      alert("Match nul");
    }
    else if ((g1==1 && g2 ==3) || (g1==2 && g2==1) || (g1==3 && g2==1)){
      alert("Félicitations, vous avez gagné, l'ordinateur a joué" + games[g2-1]);
      win++; // nb de partie gagné
    }
    else {
      alert("Dommage, vous avez perdu");
      lost++; // nb de partie perdu
    }
  }
});
