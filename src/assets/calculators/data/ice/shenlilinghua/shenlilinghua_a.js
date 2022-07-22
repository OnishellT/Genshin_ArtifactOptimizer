import { rowsAir, tableIce, tablePhysical } from "../../../utils";
import { getAttribute } from "@util/attribute";

let rowsA = [
    { key: "dmg1", chs: "1- Normal Attack Damage" },
    { key: "dmg2", chs: "2- Normal Attack Damage" },
    { key: "dmg3", chs: "3- Normal Attack Damage" },
    { key: "dmg4", chs: "4- Normal Attack Damage" },
    { key: "dmg5", chs: "5- Normal Attack Damage" },
];

let rowsB = [
    { key: "bDmg1", chs: "Charge Attack Damage-1" },
]

export default function (artifacts, configObject, enemy, { afterDash, afterTalent1, afterTalent2 }) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    if (afterTalent1) {
        attribute.aBonus += 0.3;
        attribute.bBonus += 0.3;
    }
    if (afterTalent2) {
        attribute.iceBonus += 0.18;
    }

    let a, b, air;
    if (afterDash) {
        a = tableIce(attribute, configObject, enemy, rowsA, "a");
        b = tableIce(attribute, configObject, enemy, rowsB, "b");
        air = tableIce(attribute, configObject, enemy, rowsAir, "air");
    } else {
        a = tablePhysical(attribute, configObject, enemy, rowsA, "a");
        b = tablePhysical(attribute, configObject, enemy, rowsB, "b");
        air = tablePhysical(attribute, configObject, enemy, rowsAir, "air");
    }

    return {
        a, b, air,
    }
}