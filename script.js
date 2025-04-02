// 1 - Joueur entre son choix
// 2 - Ordinateur entre son choix
// 3 - On compare les choix
// 4 - On affiche le résultat
// 5 - BONUS: On affiche le score


const choiceArray = ["Pierre", "Feuille", "Ciseaux"];
let computerChoice = Math.floor(Math.random() * choiceArray.length);



// fonction convertir le choixPC en string
function convertComputerChoice(computerIndex) {
    return choiceArray[computerIndex];
};

//fonction convertir choixUtilisateur en index
function convertUserChoice(userString) {
   return choiceArray.indexOf(userString);
};

