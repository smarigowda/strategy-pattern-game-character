import { injectable } from 'inversify';
import { IWeapon } from '../interfaces/weapon';

@injectable()
export class Knife implements IWeapon {
     useWeapon() {
        console.log('Using Knife to fight...');
    }
}

@injectable()
export class Sword implements IWeapon {
    useWeapon() {
        console.log('Using  Sword to fight...');
    }
}

@injectable()
export class BowAndArrow implements IWeapon {
    useWeapon() {
        console.log('Using Bow and Arrow to fight...');
    }
}

@injectable()
export class Axe implements IWeapon {
    useWeapon() {
        console.log('Using Axe to figth...')
    }
}
