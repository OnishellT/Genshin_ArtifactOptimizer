import { tableWater } from "../../../utils";
import { getAttribute } from "@util/attribute";

let rowsA = [
    {
        key: "dmg1",
        chs: "1-Hit Damage",
    },
    {
        key: "dmg2",
        chs: "2-Hit Damage",
    },
    {
        key: "dmg3",
        chs: "3-Hit Damage",
    },
    {
        key: "dmg4",
        chs: "4-Hit Damage",
    },
    {
        key: "dmg5",
        chs: "5-Hit Damage",
    },
    {
        key: "dmg61",
        chs: "6-Hit Damage-1",
    },
    {
        key: "dmg62",
        chs: "6-Hit Damage-2",
    },
];

let rowsB = [
    {
        key: "bDmg11",
        chs: "Charge Attack Damage-1"
    },
    {
        key: "bDmg12",
        chs: "Charge Attack Damage-2"
    }
];

let rowsE = [
    {
        key: "eDmg1",
        chs: "Stance Change"
    },
    {
        key: "eDmg2",
        chs: "Riptide Slash Damage"
    },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = tableWater(attribute, configObject, enemy, rowsA, "e", "a");
    let b = tableWater(attribute, configObject, enemy, rowsB, "e", "b");
    let e = tableWater(attribute, configObject, enemy, rowsE, "e");

    return {
        a, b, e,
    }
}