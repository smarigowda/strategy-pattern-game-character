import "reflect-metadata";

import { Container } from "inversify";
import { King, Knight, Queen, Troll } from "./characters/allCharacters";
import { Character } from "./characters/character";
import { IWeapon } from "./interfaces/weapon";
import { TYPES } from "./types";
import { Axe, BowAndArrow, Knife, Sword } from "./weapons/allWeapons";

const container = new Container();

container.bind<Character>(TYPES.King).to(King);
container.bind<Character>(TYPES.Queen).to(Queen);
container.bind<Character>(TYPES.Knight).to(Knight);
container.bind<Character>(TYPES.Troll).to(Troll);

container.bind<IWeapon>(TYPES.Knife).to(Knife);
container.bind<IWeapon>(TYPES.Sword).to(Sword);
container.bind<IWeapon>(TYPES.Axe).to(Axe);
container.bind<IWeapon>(TYPES.BowAndArrow).to(BowAndArrow);

export default container;
