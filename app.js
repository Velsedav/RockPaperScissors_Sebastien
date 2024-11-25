//Rôle : 
//Arguments : dont on a besoin en tant que développeur
//Retour : 

//Rôle : Permet au joueur son choix et le choix est stocké dans une variable
//Arguments : Rien
//Retour : Le choix du joueur

// ChoixDuJoueur() dans la console pour l'afficher
function ChoixDuJoueur() {
    return prompt("Ecrire Papier Caillou ou Ciseaux")
}

//Rôle : L'ordinateur fait son choix aléatoirement
//Arguments :  Rien
//Retour : Le "choix de l'ordinateur"
function ValeurOrdinateur() {
    return Math.ceil(Math.random()*3)
}

//Rôle : 
//Arguments : dont on a besoin en tant que développeur
//Retour : 
function ChoixOrdinateur(a) {
    if (a===1) {alert("🤖Papier")
    }else if (a===2) {alert("🤖Caillou")
    }else if (a===3) {alert("🤖Ciseaux")        
    }
}

//Rôle : 
//Arguments : 
//Retour : 

// if (ChoixDuJoueur === ChoixOrdinateur) {
//     prompt("Égalité !")
// }