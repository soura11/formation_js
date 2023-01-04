export class Warrior {

    name;
    attack;
    defense;
    health;

    constructor(name, attack, defense, health) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
    }

    fight(warrior) {
        if(warrior.health <= 0){
            console.log(warrior.name + " is dead ");
        } else if (warrior.health >= 0 && warrior.health <= 45) {
            console.log(this.name + " finish " + warrior.name);
            warrior.health = 0;
            console.log(warrior.name + " is dead ");
        } else {
            console.log(this.name + " attacks " + warrior.name);
            warrior.health = warrior.health - this.attack;
            console.log(warrior.name + " has " + warrior.health + " life left");
        }
    }

    specialFight(warrior) {
        if(warrior.health <= 0){
            console.log(this.name + " can not attack " + warrior.name + " is dead ");
        } else if (warrior.health >= 0 && warrior.health <= 45) {
            console.log(this.name + " finish " + warrior.name);
            warrior.health = 0;
            console.log(warrior.name + " is dead ");
        } else {
            console.log(this.name + " special attacks " + warrior.name);
            console.log("Defense");
            warrior.defense = 0;
            warrior.health = warrior.health - (this.attack * 2);
            console.log(warrior.name + " has " + warrior.health + " life left and " + warrior.defense + " defense left");
        }
    }
}