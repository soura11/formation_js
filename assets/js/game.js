// // Exercice :

// Partie 1

// Créez un constructeur qui permet de créer un guerrier. Ce constructeur initialisera un objet
// avec les caractéristiques suivantes :
// - Un nom (string)
// - Une valeur d'attaque (number)
// - Une valeur de défense (number)
// - Une valeur de santé (number)

// Une méthode combat qui permet de réduire la vie de la cible selon la valeur de l'attaque du
// combattant.
// Par exemple si guerrier1 a 10 d'attaque et guerrier 30 de santé, quand guerrier1 attaque
// guerrier2 sa santé passe à 20. En termes de code vous devriez avoir quelque chose comme :

// ///////////////////////////////////////

// guerrier1.attack(guerrier2);

// Partie 2

// Créer un autre type de personnage : le magicien.

// Vous allez donc créer un constructeur pour notre magicien qui contiendra les mêmes
// proriétés et méthodes que notre guerrier. Le magicien disposera en plus :
// D'une propriété mana (number)

// D'une méthode de soin qui consomme 10 de mana mais rajoute 10 de vie au magicien
// (attention si le mana est inférieur à 10, elle ne doit pas pouvoir être lancée)

// Améliorez également un peu vos méthodes de soin et de combat:
// Faites en sorte que la méthode de combat, quand elle est lancée, affiche le nom du
// personnage qui attaque et de celui qui est attaqué, puis à la fin affiche la vie restante du
// personnage qui a été attaqué
// La méthode de soin, si le personnage a assez de mana doit afficher que le personnage essaie
// de se soigner, puis afficher son nouveau niveau de vie. Si le personnage n'a pas assez de
// mana, elle affiche simplement un message d'erreur.
// Pour tester ce nouveau script, créez un magicien, dites à vos deux guerriers de l'attaquer
// chacun leur tour. Dites ensuite au magicien de se soigner, puis d'attaquer un des deux
// guerrier.
                                                              
////////////////////////////////////////


import { Warrior } from "./warrior.js";
import { Wizzard } from "./wizard.js";

var thor = new Warrior("Thor", 40, 50, 200);
var zeus = new Warrior("Zeus", 60, 30, 200);

thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);

thor.specialFight(zeus);
zeus.fight(thor);

var Gandalf = new Wizzard("Gandalf", 30, 40, 250, 40);

thor.fight(Gandalf);
zeus.fight(Gandalf);
Gandalf.heal();
Gandalf.fight(thor);
                  

          