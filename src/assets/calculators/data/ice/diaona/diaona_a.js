import { rowsAir, tableIce, tablePhysical } from "../../../utils";
import { getAttribute } from "@util/attribute";

let rowsA = [
    { key: "dmg1", chs: "1- Normal Attack Damage" },
    { key: "dmg2", chs: "2- Normal Attack Damage" },
    { key: "dmg3", chs: "3- Normal Attack Damage" },
    { key: "dmg4", chs: "4- Normal Attack Damage" },
    { key: "dmg5", chs: "5- Normal Attack Damage" },
];

let rowsB1 = [
    { key: "bDmg1", chs: "Aimshot" },
];

let rowsB2 = [
    { key: "bDmg2", chs: "Fully Charge Aimshot" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = tablePhysical(attribute, configObject, enemy, rowsA, "a");
    let b1 = tablePhysical(attribute, configObject, enemy, rowsB1, "b");
    let b2 = tableIce(attribute, configObject, enemy, rowsB2, "b");
    let air = tablePhysical(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b1, b2, air,
    }
}