let ResultatValeurOrdinateur
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
     ResultatValeurOrdinateur = Math.ceil(Math.random()*3)
    return ResultatValeurOrdinateur
}

//Rôle : 
//Arguments : dont on a besoin en tant que développeur
//Retour : 
function ChoixOrdinateur() {
    if (ResultatValeurOrdinateur===1) {alert("🤖Papier")
    }else if (ResultatValeurOrdinateur===2) {alert("🤖Caillou")
    }else if (ResultatValeurOrdinateur===3) {alert("🤖Ciseaux")        
    }
}

console.log( ResultatValeurOrdinateur)

//Rôle : 
//Arguments : 
//Retour : 

// if (ChoixDuJoueur === ChoixOrdinateur) {
//     prompt("Égalité !")
// }