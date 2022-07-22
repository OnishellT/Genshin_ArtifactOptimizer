import { rowsAir, tablePhysical } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rowsA = [
    {
        key: "dmg1",
        chs: "1- Normal Attack Damage",
    },
    {
        key: "dmg2",
        chs: "2- Normal Attack Damage",
    },
    {
        key: "dmg3",
        chs: "3- Normal Attack Damage",
    },
    {
        key: "dmg4",
        chs: "4- Normal Attack Damage",
    },
];

let rowsB = [
    {
        key: "bDmg1",
        chs: "Charge Attack Spinning Damage",
    },
    {
        key: "bDmg2",
        chs: "Final Charge Attack Spinning Damage",
    },
];


export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = tablePhysical(attribute, configObject, enemy, rowsA, "a");
    let air = tablePhysical(attribute, configObject, enemy, rowsAir, "air");

    if (c.constellation >= 6) {
        attribute.attackStatic += 0.5 * attribute.defend();
    }

    let b = tablePhysical(attribute, configObject, enemy, rowsB, "b");

    return {
        a, b, air
    };
}