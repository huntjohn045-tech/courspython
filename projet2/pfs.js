let victoires = 0;
let defaites = 0;
let nuls = 0;

function jouer(choixJoueur) {
    console.log("Bouton cliqué :", choixJoueur);

    const choix = ["Pierre", "Feuille", "Ciseaux"];
    const choixMachine = choix[Math.floor(Math.random() * choix.length)];

    let resultat = "";

    if (choixJoueur === choixMachine) {
        nuls++;
        resultat = "Match nul";
    } else if (
        (choixJoueur === "Pierre" && choixMachine === "Ciseaux") ||
        (choixJoueur === "Feuille" && choixMachine === "Pierre") ||
        (choixJoueur === "Ciseaux" && choixMachine === "Feuille")
    ) {
        victoires++;
        resultat = "Victoire";
    } else {
        defaites++;
        resultat = "Défaite";
    }

    document.getElementById("resultat").innerHTML =
        "Tu as choisi : " + choixJoueur + "<br>" +
        "La machine a choisi : " + choixMachine + "<br>" +
        "Résultat : " + resultat;

    document.getElementById("score").innerHTML =
        "Victoires : " + victoires +
        " | Défaites : " + defaites +
        " | Nuls : " + nuls;
}

function reinitialiser() {
    victoires = 0;
    defaites = 0;
    nuls = 0;

    document.getElementById("score").innerHTML =
        "Victoires : 0 | Défaites : 0 | Nuls : 0";

    document.getElementById("resultat").innerHTML =
        "Score réinitialisé";
}
