import { Character } from "./character";

export class King extends Character {
    setWeapon(w: IWeapon) {
        this.weapon = w;
    }
    fight() {
        // King does not know which weapon he is using
        // he just uses it by calling useWeapon(), loose coupling !
        this.weapon.useWeapon(); 
    }
}

export class Queen extends Character {
    setWeapon(w: IWeapon) {
        this.weapon = w;
    }
    fight() {
        // Queen does not know which weapon he is using
        // she just uses it by calling useWeapon(), loose coupling !
        this.weapon.useWeapon(); 
    }
}

export class Knight extends Character {
    setWeapon(w: IWeapon) {
        this.weapon = w;
    }
    fight() {
        // Kinght does not know which weapon he is using
        // he just uses it by calling useWeapon(), loose coupling !
        this.weapon.useWeapon(); 
    }
}

export class Troll extends Character {
    setWeapon(w: IWeapon) {
        this.weapon = w;
    }
    fight() {
        // Troll does not know which weapon he is using
        // he just uses it by calling useWeapon(), loose coupling !
        this.weapon.useWeapon(); 
    }
}