const winingCases = {
    0: {
        1: false,
        2: true
    },
    1: {
        0: true,
        2: false
    },
    2: {
        0: false,
        1: true
    }
}

const choiceArray = ["pierre", "feuille", "ciseaux"];


// fonction convertir le choixPC en string
function convertComputerChoice(computerIndex) {
    return choiceArray[computerIndex];
}

//fonction convertir choixUtilisateur en index
function convertUserChoice(userString) {
    return choiceArray.indexOf(userString);
}

//génère un nombre aléatoire entre 0 et 2 inclus
function generateRandomNumber() {
    return Math.floor(Math.random() * choiceArray.length);
}

//Récupère la réponse de l'utilisateur
function userAnswer() {
    let playerAnswerString;
    while (!choiceArray.includes(playerAnswerString)) {
        playerAnswerString = String(prompt("Entrez votre action (pierre, feuille ou ciseaux) : ")).toLowerCase();
    }

    return convertUserChoice(playerAnswerString);
}

//Proposition de re-jeu
function replayGame() {
    const replayAnswer = String(prompt("Voulez-vous rejouer ?")).toLowerCase();

    if (replayAnswer === "oui") {
        return true;
    }
    return false;
}

//Compare les deux actions pour savoir qui gagne, perd ou si égalité
function compareChoices(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return null;
    }
    else {
        return winingCases[userChoice][computerChoice];
    }
}


//---------------------------------------------
//Début du jeu


let play = true;
let score = {
    user: 0,
    computer: 0
}
let nbrPartie = 0;


while (play) {
    const playerChoice = userAnswer();

    const computerChoice = generateRandomNumber();

    alert(`L'ordinateur a joué : ${convertComputerChoice(computerChoice)}`);

    const gameResult = compareChoices(playerChoice, computerChoice);

    let resultAlert;
    //Renvoie une réponse en fonction du résultat
    switch (gameResult) {
        case null:
            resultAlert = "Egalité";
            break;
        case true:
            resultAlert = "Tu as gagné !";
            score.user++;
            break;
        case false:
            resultAlert = "Tu as perdu !";
            score.computer++;
            break;
    }

    alert(resultAlert);

    play = replayGame();
    nbrPartie++;
}

alert(`Vous avez gagné ${score.user} manches sur ${nbrPartie}`)