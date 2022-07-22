import { rowsAir, tablePhysical, tableThunder } from "../../../utils";
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
        key: "dmg41",
        chs: "4- Normal Attack Damage-1",
    },
    {
        key: "dmg42",
        chs: "4- Normal Attack Damage-2",
    },
    {
        key: "dmg5",
        chs: "5- Normal Attack Damage",
    },
];

let rowsB = [
    {
        key: "bDmg1",
        chs: "Charge Attack Damage-1",
    },
    {
        key: "bDmg2",
        chs: "Charge Attack Damage-2",
    },
]

export default function (artifacts, configObject, enemy, otherConfig) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);
    
    let f = otherConfig.afterE ? tableThunder : tablePhysical;

    let a = f(attribute, configObject, enemy, rowsA, "a");
    let b = f(attribute, configObject, enemy, rowsB, "b");
    let air = f(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air,
    }
}