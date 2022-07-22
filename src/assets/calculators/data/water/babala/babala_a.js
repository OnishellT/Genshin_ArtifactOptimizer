import { rowsAir, tableWater } from "../../../utils";
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
        chs: "Charge Attack Damage",
    },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = tableWater(attribute, configObject, enemy, rowsA, "a");
    let b = tableWater(attribute, configObject, enemy, rowsB, "b");
    let air = tableWater(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air,
    }
}