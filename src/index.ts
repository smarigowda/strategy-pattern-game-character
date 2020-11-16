import { inject } from "inversify";
import { Character } from "./characters/character";
import { IWeapon } from "./interfaces/weapon";

import container from "./inversify.config";
import { TYPES } from "./types";

const king = container.get<Character>(TYPES.King);
const queen = container.get<Character>(TYPES.Queen);

const knife = container.get<IWeapon>(TYPES.Knife);
const sword = container.get<IWeapon>(TYPES.Sword);
const axe = container.get<IWeapon>(TYPES.Axe);

console.log("hello...welcome to TS.");

king.setWeapon(knife);
king.fight();

// weapon can be set dynamically
// King uses an interface. Complexity of using a weapon is hidden
king.setWeapon(sword);
king.fight();

// Queen uses an interface. Complexity of using a weapon is hidden
queen.setWeapon(axe);
queen.fight();
queen.setWeapon(sword);
queen.fight();
