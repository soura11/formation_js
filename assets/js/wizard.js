export class Wizzard {

    name;
    attack;
    defense;
    health;
    mana;

    constructor(name, attack, defense, health, mana) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.mana = mana;
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

    heal() {
        if (this.mana > 10) {
            console.log(this.name + " try to heal himself ");
            this.health += 10;
            this.mana -= 10;
            console.log(this.name + " has now " + this.health);
          }
          else {
            console.log("Not enough mana");
          }
    }

}
                                                              
                  