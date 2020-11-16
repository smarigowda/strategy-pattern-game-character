import { injectable } from "inversify";
import { IWeapon } from "../interfaces/weapon";

@injectable()
export abstract class Character {
  weapon: IWeapon;
  abstract fight(): void;
  setWeapon(weapon: IWeapon) {
    this.weapon = weapon;
  }
}
