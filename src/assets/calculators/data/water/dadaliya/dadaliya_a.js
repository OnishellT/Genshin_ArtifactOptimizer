import { rowsAir, tablePhysical, tableWater } from "../../../utils";
import { getAttribute } from "@util/attribute";

let rowsA = [
    {
        key: "dmg1",
        chs: "1- Hit Nomal Attack",
    },
    {
        key: "dmg2",
        chs: "2- Hit Nomal Attack",
    },
    {
        key: "dmg3",
        chs: "3- Hit Nomal Attack",
    },
    {
        key: "dmg4",
        chs: "4- Hit Nomal Attack",
    },
    {
        key: "dmg5",
        chs: "5- Hit Nomal Attack",
    },
    {
        key: "dmg6",
        chs: "6- Hit Nomal Attack",
    },
];

let rowsB1 = [
    {
        key: "bDmg1",
        chs: "Aimshot",
    },
];

let rowsB2 = [
    {
        key: "bDmg2",
        chs: "Fully Charged Aimshot",
    }
];

let rowsDuanliu = [
    {
        key: "dmg7",
        chs: "Riptide Flash Dammage"
    },
    {
        key: "dmg8",
        chs: "Riptide Burst Damage",
    }
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = tablePhysical(attribute, configObject, enemy, rowsA, "a");
    let b1 = tablePhysical(attribute, configObject, enemy, rowsB1, "b");
    let b2 = tableWater(attribute, configObject, enemy, rowsB2, "b");
    let air = tablePhysical(attribute, configObject, enemy, rowsAir, "air");
    let duanliu = tableWater(attribute, configObject, enemy, rowsDuanliu, "a");

    return {
        a, b1, b2, air, duanliu,
    }
}