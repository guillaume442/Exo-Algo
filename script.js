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



// let nombreDeDepart = prompt("Entrez un nombre de départ");
// nombreDeDepart = parseInt(nombreDeDepart);
// let somme = 0;

// for (let i = 1; i <= nombreDeDepart; i++) {
//     somme += i;
// }

// console.log("La somme des entiers jusqu'à " + nombreDeDepart + " est : " + somme);


// -----------------JS exo 1 --------------------------------------------------

// let nom = "cabaret"
// let prenom = prompt("Entrez un nom");
// let age = 31+2
// let taille = "1m77"

// console.log(nom, prenom, age, taille)

// let all = nom+prenom+age+taille
//ou
//let all = "je m'appelle $(prenom) $(nom), j'ai $(age) et je mesure $(taille)"

// console.log(all)


// ----------------------exo 4-------------------



// let age = prompt("Entrez un age");

// age = parseInt(age);

// if (age >= 18) {
//     console.log("Je suis majeur");
// } else {
//     console.log("Je ne suis pas majeur");
// }


// ---------------exo5-----------------


// Notes des personnes
// let noteMatheo = 15.4;
// let noteNathan = 9.2;
// let noteLeo = 16.1;
// let noteMaxime = 12.6;

// // Calcul de la moyenne
// let moyenne = (noteMatheo + noteNathan + noteLeo + noteMaxime) / 4;

// // Affichage de la moyenne
// console.log("La moyenne des notes est : " + moyenne);


// -----------------------exo6----------------------


// Générer un nombre aléatoire entre 1 et 100
// let nombreAleatoire = Math.floor(Math.random() * 100) + 1;

// Afficher le nombre aléatoire dans la console
// console.log("Nombre aléatoire entre 1 et 100 : " + nombreAleatoire);



// --------------------------------exo7----------------------------------------



// let h1 = document.createElement("h1");
// h1.textContent = "Hello World";
// h1.classList.add("monH1");


// let paragraphe = document.createElement("p");
// paragraphe.textContent = "Guillaume Cabaret, 31 ans, né a Roubaix, vis a Croix.";
// paragraphe.id = "presentation";


// document.body.appendChild(paragraphe);
// document.body.appendChild(h1);




//----------------------------exo8-----------------------------------------



// // Demande à l'utilisateur d'entrer un nombre
// let nombre = prompt("Entrez un nombre");

// // Convertit l'entrée en nombre
// nombre = parseFloat(nombre);

// // Vérifie si le nombre est positif
// if (nombre > 0) {
//     // Génère une valeur aléatoire entre 1 et le nombre
//     let valeurAleatoire = Math.floor(Math.random() * nombre) + 1;

//     // Affiche la valeur aléatoire dans la console
//     console.log("Valeur aléatoire entre 1 et " + nombre + " : " + valeurAleatoire);
// } else {
//     console.log("Le nombre n'est pas positif.");
// }


// --------------------exo tableau------------------



// let championOverwatch = ['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree',
//  'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo',
//   'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

// // Afficher dans la console Tracer
// console.log(championOverwatch[2]);

// // Afficher dans la console Mei
// console.log(championOverwatch[15]);

// // Changer le nom McCree en "Cole Cassidy"
// championOverwatch[5] = "Cole Cassidy";

// // Afficher le tableau mis à jour dans la console
// console.log(championOverwatch);

// championOverwatch.push("Ramattra");

// // Afficher le tableau mis à jour dans la console
// console.log(championOverwatch);

// championOverwatch.push("nop");

// // Afficher le tableau mis à jour dans la console
// console.log(championOverwatch);

// let indiceNop = championOverwatch.indexOf("nop");

// // Si "nop" est trouvé, le supprimer
// if (indiceNop !== -1) {
//     championOverwatch.splice(indiceNop, 1);
// }

// // Afficher le tableau mis à jour dans la console
// console.log(championOverwatch);

// let championOverwatch = ['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree', 'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo', 'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

// // Convertir le tableau en chaîne de caractères
// let chaineDeCaracteres = championOverwatch.join(", ");

// // Afficher la chaîne de caractères dans la console
// console.log(chaineDeCaracteres);

// let copieGenjiAHanzo = championOverwatch.slice(7, 13);

// // Afficher la copie du tableau dans la console
// console.log(copieGenjiAHanzo);

// let championOverwatch = ['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree', 'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo', 'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

// // Ajouter "champion : 0" au début du tableau
// championOverwatch.unshift("champion : 0");

// // Afficher le tableau mis à jour dans la console
// console.log(championOverwatch);

// let indiceBastion = championOverwatch.indexOf("Bastion");

// // Si "Bastion" est trouvé, mettre tout en majuscules
// if (indiceBastion !== -1) {
//     championOverwatch[indiceBastion] = championOverwatch[indiceBastion].toUpperCase();
// }

// // Afficher le tableau mis à jour dans la console
// console.log(championOverwatch);

// let championOverwatch = ['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree', 'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo', 'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

// // Obtenir le nombre de personnages dans le tableau
// let nombreDePersonnages = championOverwatch.length;

// // Afficher le nombre de personnages dans la console
// console.log("Nombre de personnages : " + nombreDePersonnages);

let championOverwatch = ['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree', 'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo', 'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

// Variable pour stocker la concaténation des héros
let listeHeros = "Les héros d'Overwatch sont : ";

// Utiliser forEach pour parcourir le tableau et concaténer les héros
championOverwatch.forEach(function(heros, index) {
    listeHeros += heros;

    // Ajouter une virgule si ce n'est pas le dernier héros
    if (index < championOverwatch.length - 1) {
        listeHeros += ', ';
    }
});

// Afficher la liste des héros dans la console
console.log(listeHeros);
