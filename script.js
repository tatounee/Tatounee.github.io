const resultatHTML = document.getElementById("resultat");
const calculs = document.getElementById("calculs")
let resultat = 0;
let texte = "";

function addCalule(nbr) {
  if (calculs.innerHTML.length < 20) {
    texte += nbr;
    calculs.innerHTML = texte;
  }
}

function subCalule() {
  texte = texte.substring(0, texte.length-1);
  calculs.innerHTML = texte;
}

function centrifuge() {
  resultat = eval(texte);
  if (resultat === Infinity || isNaN(resultat)) {
    resultat = "Error : (";
  }
  console.log(resultat);
  texte = "";
  calculs.innerHTML = texte;
  resultatHTML.innerHTML = resultat;
}
