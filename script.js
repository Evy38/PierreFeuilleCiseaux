
// 1 - Joueur entre son choix
// 2 - Ordinateur entre son choix
// 3 - On compare les choix
// 4 - On affiche le résultat
// 5 - BONUS: On affiche le score


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

const choiceArray = ["Pierre", "Feuille", "Ciseaux"];


// fonction convertir le choixPC en string
function convertComputerChoice(computerIndex) {
    return choiceArray[computerIndex];
};

//fonction convertir choixUtilisateur en index
function convertUserChoice(userString) {
   return choiceArray.indexOf(userString);
};



function generateRandomNumber() {
    return Math.floor(Math.random() * choiceArray.length);
}


function userAnswer() {
    let playerAnswerString;
    while (choiceArray.includes(playerAnswerString)) {
        playerAnswerString = String(prompt("Entrez votre action (pierre, feuille ou ciseaux"));
    }

    return ConvertUserChoice(playerAnswerString);
}


function compareChoices(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return null;
    }
    else {
        return winingCases[userChoice][computerChoice];
    }
}

const playerChoice = userAnswer();

const computerChoice = generateRandomNumber();

alert(`L'ordinateur a joué : ${convertComputerChoice(computerChoice)}`);

const gameResult = compareChoices(playerChoice, computerChoice);

let resultAlert;
switch (gameResult) {
    case null:
        resultAlert = "Egalité";
        break;
    case true:
        resultAlert = "Tu as gagné !";
        break;
    case false:
        resultAlert = "Tu as perdu !";
        break;
}

alert(resultPrompt);
