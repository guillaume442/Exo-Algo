// EXO 4
// variable *nombreBig* / variable *nombre* / variable position
// Boucle FOR i = 1 / i < 5 / i ++
//      --taper un nombre--
//      si nombre > nombreBig
//          Alors nombreBig = nombre
//          position = i
//      fin si
// Fin de For
// Affichez nombrePlusGrand
// Affiche position

// let nombrePlusGrand = 0;
// let positionPlusGrand = 0; // Nouvelle variable pour stocker la position du plus grand nombre
// let nombre = 0;

// for (let i = 1; i <= 5; i++) {
//     nombre = parseInt(prompt("Entrer un nombre"));

//     if (nombre > nombrePlusGrand) {
//         nombrePlusGrand = nombre;
//         positionPlusGrand = i; // Mise à jour de la position du plus grand nombre
//     }
// }

// console.log("Le plus grand nombre est : " + nombrePlusGrand);
// console.log("Il a été saisi à la position : " + positionPlusGrand);




// EXO 5
// nombrePlusGrand = 0
// positionPlusGrand = 0
// nombre = 1  // Initialise nombre avec une valeur différente de zéro
// position = 0

// TANT QUE nombre N'EST PAS égal à 0 FAIRE
//     LIRE nombre depuis l'utilisateur
//     SI nombre N'EST PAS égal à 0 ALORS
//         position += 1
//         SI nombre > nombrePlusGrand ALORS
//             nombrePlusGrand = nombre
//             positionPlusGrand = position
//     FIN SI
// FIN TANT QUE

// AFFICHER "Le plus grand nombre est : " + nombrePlusGrand
// AFFICHER "Il a été saisi à la position : " + positionPlusGrand


// let nombrePlusGrand = 0;
// let positionPlusGrand = 0;
// let nombre = 1; // Initialise nombre avec une valeur différente de zéro
// let position = 0;

// while (nombre !== 0) {
//     nombre = parseInt(prompt("Entrer un nombre (saisie s'arrête avec 0)"));

//     if (nombre !== 0) {
//         position++; // Incrémente la position à chaque saisie

//         if (nombre > nombrePlusGrand) {
//             nombrePlusGrand = nombre;
//             positionPlusGrand = position;
//         }
//     }
// }

// console.log("Le plus grand nombre est : " + nombrePlusGrand);
// console.log("Il a été saisi à la position : " + positionPlusGrand);






// LIRE nombreDeDepart depuis l'utilisateur

// POUR multiplicateur DE 1 À 10 FAIRE
//     resultat = nombreDeDepart * multiplicateur
//     AFFICHER nombreDeDepart + " x " + multiplicateur + " = " + resultat
// FIN POUR



// let nombreDeDepart = prompt("Entrez un nombre de départ");
// nombreDeDepart = parseInt(nombreDeDepart);

// for (let multiplicateur = 1; multiplicateur <= 10; multiplicateur++) {
//     let resultat = nombreDeDepart * multiplicateur;
//     console.log(`${nombreDeDepart} x ${multiplicateur} = ${resultat}`);
// }



// LIRE nombreDeDepart depuis l'utilisateur
// somme = 0

// POUR i DE 1 À nombreDeDepart FAIRE
//     somme = somme + i
// FIN POUR

// AFFICHER "La somme des entiers jusqu'à " + nombreDeDepart + " est : " + somme



let nombreDeDepart = prompt("Entrez un nombre de départ");
nombreDeDepart = parseInt(nombreDeDepart);
let somme = 0;

for (let i = 1; i <= nombreDeDepart; i++) {
    somme += i;
}

console.log("La somme des entiers jusqu'à " + nombreDeDepart + " est : " + somme);
