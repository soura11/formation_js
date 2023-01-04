let a = 4;
let b = 5;


console.log(a);
let sum = a + b;
console.log(sum);

if (sum > 0) {
    console.log("positif");
}

let msg;
function test(){
    msg = "hi"
}
test();
console.log(msg);

// EcmaScript5
function mul(a, b){
    return a * b;
}
console.log(mul(5, 5));

// EcmaScript6
const mul2 = (a, b) => a * b;
console.log(mul2(5, 5));

 // avec plusieurs instructions
const mul3 = (a, b) =>{
    let r = a * b;
    return r;
}

// Raccourcir console.log
console.log(mul3(a,b));

let cl = console.log;

function test2 (){
    age = a;
}
test2;
cl(a);

// const calcAge= (age) => age * 365;

var num = '5';
console.log('number : ' + typeof(num));

// ici, on a convertit num de string en number
var num = parseInt(num);
cl('number : ' + typeof(num));

var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

for(var element of daylist){
    console.log(element);
}

daylist.forEach(element => console.log(element + '\n'));

daylist.push('Nouveau jour');

daylist.forEach(element => console.log(element));

// La on declare un objet et on l'initialise

var person = new Object();
person.name = "Musk";
person.age = 60;

var person ={
    name : 'Julien',
    age : 23
}

console.log(person.name);
console.log(person['age']);

class Person {

    nom;
    age;

    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    getNom() {
        return this.nom;
    }

    setNom(nom) {
        this.nom = nom;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    displayPerson(){
        return this.nom + " " + this.age;
    }
}

// Ecrire un script composé des fonctions suivante :

// let tab = [];
let tab = new Array();

// Une fonction qui remplit un tableau par des noms
// saisis par l'utilisateur via une boite de
// dialogue, cette fonction sera appelée au clic sur
// un bouton nommé "ajout"
function ajoutNom() {
    var nom = prompt("Saisir un nom");
    tab.push(nom);
    // Ici, on utilise le DOM (Document Object model)
    // pour inserer des nouveaux elements ds le ul caracteries par id = persons
    document.getElementById('persons').innerHTML += '<option>' + nom + '</option>';
}
    

// Une fonction qui renvoie au hasard le nom gagnant
// qui sera lancée lorsque l'utilisateur
// clique sur le bouton "tirage" .
function tirage() {
    if (tab.length > 0) {
        /*Math.random() * tab.length renvoie un nombre réel entre 0 et la taille du tableau
        tab.length et on arrondit à l'entier inférieur par la fonction Math.floor()*/
        var rand = Math.floor(Math.random() * tab.length);
        alert("Le nom gagnant est : " + tab[rand]);
    }
    else alert("Veillez ajouter des noms");
}

function doc(){
    for (var i=1 ; i<=100 ; i=i+1) {
        document.write(i);
        document.writeln('<br>')
    }
}

function algo(){
    for (var i=1 ; i <=100 ; i=i+1) {
        if ((i % 5 == 0)&&(i  % 3 == 0)){
            document.write(i + "FizzBuzz"  );
            document.writeln('<br>');
        }
        else if (i % 5 == 0){
            document.write(i + "Buzz"  );
            document.writeln('<br>');
        }
        else if (i % 3 == 0) {
            document.write(i+ "Fizz" );
            document.writeln('<br>');
        }
        else {
            document.writeln(i + '<br>');
        }
}
}

class Guerrier {

    nom;
    attaque;
    defense;
    santé

    constructor(nom, attaque, defense, santé ) {
        this.nom = nom;
        this.attaque = attaque;
        this.defense = defense;
        this.santé = santé;

    }

    getNom() {
        return this.nom;
    }

    setNom(nom) {
        this.nom = nom;
    }

    getAttaque() {
        return this.attaque;
    }

    setAttaque(attaque) {
        this.attaque = attaque;
    }

    getDefense() {
        return this.defense;
    }

    setDefense(defense) {
        this.attaque = defense;
    }
    getSanté() {
        return this.santé;
    }

    setSanté(santé) {
        this.santé = santé;
    }

    attack (guerrier2){
        // guerrier2.santé;
        // this.attaque;
        if(this.attaque <= guerrier2.santé) {
            guerrier2.santé -= this.attaque;
            return console.log("Guerrier 2 sa santé est de " + guerrier2.santé);
        } else {
        }
         return console.log("Guerrier 2 mort!");
    } 
       
    displayGuerrier(){
        return this.nom + " " + this.attaque + " " + this.defense + " " + this.santé;
    }
}
    

var guerrier1 = new Guerrier('Sou', 30, 100, 80);
var guerrier2 = new Guerrier('Ray', 55, 30, 80);

console.log(guerrier1);
console.log(guerrier2);

guerrier1.attack(guerrier2);
console.log(guerrier2);

