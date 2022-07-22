import { rowsAir, tableRock } from "../../../utils";
import { getAttribute } from "@util/attribute";

let rowsA = [
    { key: "dmg1", chs: "1- Normal Attack Damage" },
    { key: "dmg2", chs: "2- Normal Attack Damage" },
];

let rowsB = [
    { key: "bDmg1", chs: "Charge Attack Damage -1" },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = tableRock(attribute, configObject, enemy, rowsA, "a");
    let b = tableRock(attribute, configObject, enemy, rowsB, "b");
    let air = tableRock(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air,
    }
}