// var a = 3;
// var b = 2;
// var c = a+b;
// console.log(c);

// var a = 3;
// var b = 2;

// c = a - b;
// console.log(c);         // affiche 1

// c = a / b;          
// console.log(c);         // affiche 1.5

// c = a * b;              
// console.log(c);         // affiche 3

// c = a % b;
// console.log(c);         // affiche 1 (le reste de la division a/b)

// a = 12;
// a = a + 5;
// a = a + 5;
// console.log(a);         // affiche 22 

// a++;
// console.log(a);         // affiche 23

// // --------------------------------------------------------------------------------------------------------

// var a;
// var b;

// a = 10;
// b = 25;

// var a;
// var b;

// a = parseInt(prompt("a?", "000"));
// b = parseInt(prompt("b?", "000"));

// function add() {
//     var c;
//     c="choucroute";
//     console.log(a+b);
//     console.log(c);
// };

// console.log(c);
// add();

// console.log(typeof(12));               // pour connaitre si number ou  objet ou string      

// console.log(typeof(12.5));

// console.log(typeof("12"));

// console.log(typeof(['12', '12.5']));

// console.log(typeof(true));

// var age;                                                    // variable "age" est la question qui va être posé à l'utilisateur dans le prompt(redonné en string)
// var dateDeNaissance;                                        // variable "dateDeNaissance" va afficher vous êtes né avec l'année l'année


// age = parseInt(prompt("Quel âge avez vous ?"));
// dateDeNaissance = "vous êtes né en "+ (2018 - age);

// console.log(dateDeNaissance);


// var age;
// var AnneeDeNaissance;
// var nouvelAnnee;
// var nouvelAge;



// age = parseInt(prompt("Quel âge avez vous ?"));
// nouvelAnnee = parseInt(prompt("En quelle année voulez vous être projeté ?"));
// AnneeDeNaissance = (2018 - age);
// nouvelAge = (nouvelAnnee - AnneeDeNaissance);
// console.log("Votre année de naissance est ", AnneeDeNaissance);
// console.log("En", nouvelAnnee,"vous auriez ",nouvelAge);
// if (age<18) {
//     console.log("Vous êtes mineur");
// } else if ( age>=18 & age<65) {
//     console.log("vous êtes majeur")
// } else {
//     console.log("vous êtes trop vieux");
// }



// // ********** JS OPERATORS DE COMPARAISON//


// console.log(1==1);          // true ( == identique )
// console.log(1=="1");        // true ( == identique )
// console.log(1==="1");       // false( === type identique) 

// console.log(1<=2);          // true 
// console.log(1>=2);          //false

// console.log(1<2);           //true
// console.log(1>2);           //false

// console.log(1!=2);          //true
// console.log(1!=1);          //false
// console.log(1!=="1");       //true   

// // JS OPERATORS LOGICAL//

// console.log(true && true);      // true
// console.log(1==1 && 1<2);      // true


// console.log(true && false);      // false
// console.log(1==1 && 1>2);      // false

// console.log(true || false);      // true
// console.log(1==1 || 1>2);      // true

// console.log(false || false);     // false
// console.log(1!=1 || 1>2);     // false


// // LES CONDITIONS ********** JS OPERATORS DE COMPARAISON//

// var a = 5;
// var b = 12;

// if (a==b) {
//     console.log("les chiffres sont égaux")
// }

// var a = 5;
// var b = 5;

// if (a==b) {
//     console.log("les chiffres sont égaux")
// } else {
//     console.log("les chiffres sont différent")
// }


// var a = 5;
// var b = 6;
// var c = 7;

// if (a==b) {
//     console.log("a et b sont égaux");
// } else if (a == c) {
//     console.log("a et c sont différent");
// } else if (b == c) {
//     console.log("b et c sont différent");
// } else {
//     console.log( "Tous les chiffres sont différents");
// }

// ******************************************************************************************************************************************


//BOUCLE BOUCLE BOUCLE BOUCLE//

// for (i=0; i<=5; i++){
//     console.log(i);
//     if (i==3) {
//         break;                  // Stop toute les boucles
//     }
// }

// var i = 0;
// while (i<=5){                    //  tant que i est inférieur ou égale à 5 la boucle continu en rajoutant 1 à i (i++ veut dire (i+1))
//     console.log(i);
//     i++
// }

// function add(x, y) {
//     console.log(x+y)
// }

// add(5,6);               // affiche addition 11 (x+y)

// var a = 6
// var b = 7 

// add(a,b);               // affiche addition 13 (a+b)

// add(5,6,7);

// add(a,b,15);            // affiche addition 13 (a+b+15)


// ******************************************************************************************************************************************


// //Déclarer une variable

// var a = 1; // "=" pour attribuer une valeur à un objet
// var b = 2; // on peut créer plusieurs objets
// var c = a + b; // on peut utiliser d'autres variables pour définir une variable.

// console.log(c); //console.log() => affiche dans la console JS du navigateur.


/*------------Opérateurs arythmétiques-------------------*/

// var a;
// var b;
// var c;
// a = 30;
// b = 4;

// c = a + b; // addition
// console.log(c); // affiche 34

// c = a - b; // différence
// console.log(c); // affiche 26

// c = a / b ; // division
// console.log(c); // affiche 7.5

// c = a * b ; // produit
// console.log(c); // affiche 120

// c = a % b ; // modulo : donne le reste d'une division (utile pour vérifier si un chiffre et le multiple d'un autre : 148 % 2 = 0 => le nombre est multiple de 2 donc pair)
// console.log(c); // affiche 2

// a = 12; 
// a = a + 5; // incrémentation -> on peut agir sur la variable elle même.
// a = a + 5;

// // a = a + 5 équivaut à a += 5 (marche avec tous les opérateurs arythmétiques)

// console.log(a); // affiche 22

// a++; // équivaut à a = a + 1
// console.log(a);

// /*-------------Fonction Simple-------------*/
// console.clear(); //vide la console JS du navigateur

// var a;
// var b

// a = parseInt(prompt("a?", "000"));
// b = parseInt(prompt("b?", "000"));

// // prompt() renvoie une chaine de caractère -> passer en numérique grace à parseInt()

// function add() {
//     var c;
//     c="choucroute";
//     console.log(a+b);
//     console.log(c);    
// };


// console.log(c); //ne marche pas
// add();

// console.log(typeof(12)); // number
// console.log(typeof(12.5)); //number
// console.log(typeof("12")); //string
// console.log(typeof(true)); //boolean

// /*
// exercice : 

// 1< demander l'age -> afficher l'année de naissance
// 2< demander une année où se projeter -> déduire l'age qu'aurrait la personne si on été cette année là.
// */

// var age;
// var anneeDeNaissance;
// var anneeFictive;
// var ageFictif;


// age = parseInt(prompt("Quel age avez vous ?","18"));
// anneeDeNaissance = 2018 - age;
// console.log("Vous ètes né en " + anneeDeNaissance);
// anneeFictive = parseInt(prompt("En quelle année voulez vous être projeté ?", "1982"));
// ageFictif = anneeFictive - anneeDeNaissance;
// console.log("En " + anneeFictive + " vous aurriez " + ageFictif + "an(s).");

// /*-----------Opérateurs de comparaison--------------*/

// /* les opérateurs de comparaisons renvoient un booléen */

// console.log(1==1); //true egalité
// console.log(1=="1"); //true 
// console.log(1==="1"); //false égalité et même type (string, number...)
// console.log(1<=2); //true
// console.log(1>=2); //false
// console.log(1<2); //true
// console.log(1>2); //false
// console.log(1!=2); //true
// console.log(1!=1); //false
// console.log(1!=="1"); //true

// //opérateurs logiques

// //ET

// console.log(true && true); //true
// console.log(1==1 && 1<2); //true

// console.log(true && false); //false 
// console.log(1==1 && 1>2); //false

// //OU

// console.log(true || false); //true
// console.log(1==1 || 1>2); //true

// console.log(false || false); //false
// console.log(1!=1 || 1>2); //false

// //Conditions

// if(condition){
//     ;
// }

// var a = 5;
// var b = 12;

// if (a==b) {
//     console.log("les chiffres sont égaux")
// }

// // rien ne se passe

// var a = 5;
// var b = 5;

// if (a==b) {
//     console.log("les chiffres sont égaux")
// }

// // "les chiffres sont égaux"

// if (a!=b) {
//     console.log("les chiffres sont différents")
// }

// // ELSE

// var a = 5;
// var b = 5;

// if (a==b) {
//     console.log("les chiffres sont égaux")
// } else {
//     console.log("les chiffres sont différents")
// }

// //"les chiffres sont égaux"

// var a = 5;
// var b = 6;

// if (a==b) {
//     console.log("les chiffres sont égaux")
// } else {
//     console.log("les chiffres sont différents")
// }

// //"les chiffres sont différents"

// var a = 5;
// var b = 6;
// var c = 7;

// if ( a == b ) {
//     console.log("a et b sont égaux");
// } else if (a == c) {
//     console.log("a et c sont égaux");
// } else if (b == c) {
//     console.log("b et c sont égaux");
// } else {
//     console.log("tous les chiffres sont différents");
// }

// for (i=0; i<=5; i=i+1) {
//     console.log(i);
//     if (i==3) {
//         break;        
//     }
// }

// var i = 0;

// while (i<=5) {
//     console.log(i);
//     i++;
// }

// function add(x, y, z) {
//     console.log(x+y+z);
// }

// add(5,6,7); //18

// var a = 6;
// var b = 7;

// add(a,b, 15); //28


// ****************************Exercice********************************//

// le logiciel choisit un chiffre entre 1 et 100 
// 
// Demander un chiffre 
// Comparer chiffre tirer et choisi
//
// si le chiffre est égal au chiffre choisi par le logiciel afficher "Bravo" break
// si le chiffre est trop grand afficher "trop grand" et Demander un chiffre 
// si le chiffre est trop petit afficher "trop petit" et Demander un chiffre 
//
// nb de tentative et l'affuicher après le Bravo !!!
// utilisateur peut choisir le chiffre max
// 
// faire un commentaire en fonction du nb de tentative 
//          ex 1 tentative : "Like a boss !!!"
//             5 tentative : "Trop fort !" 
//             10 tentative : "Pas mal !"
//             15 tentative : "bof !"
// 

var chiffreAtrouver;
var chiffreProposer;
var victoire = false; // boucle = tant que le joueur n'a pas trouver le chiffre
var nbDetentative = 1;
var chiffreMax;
var ComNbDetentative;

chiffreMax = parseInt(prompt("Définissez le chiffre max de la fourchette, entre 1 et ... ?"));

function tirerUnchiffre() {
    chiffreAtrouver = Math.floor(Math.random() * chiffreMax) + 1;
}
tirerUnchiffre();

while ( victoire == false) {
    chiffreProposer = parseInt(prompt("Tente de trouver le chiffre que j'ai choisi entre 1 et " + chiffreMax + "?"));
    if ( chiffreAtrouver == chiffreProposer) {
        console.log("Bravo !!! Vous avez trouvé en ", nbDetentative,"tentative(s)");
        break;
    } else if (chiffreAtrouver < chiffreProposer) {
        console.log(chiffreProposer + " est trop grand, choisi un nouveau chiffre entre 1 et " + chiffreMax + "?");
    } else {
        console.log(chiffreProposer + " est trop petit, choisi un nouveau chiffre entre 1 et " + chiffreMax +"?");
    }
    nbDetentative++ ; 
} 