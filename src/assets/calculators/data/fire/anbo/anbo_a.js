import { rowsAir, tablePhysical, tableFire } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rows1 = [
    { key: "dmg1", chs: "1- Hit Nomal Attack" },
    { key: "dmg2", chs: "2- Hit Nomal Attack" },
    { key: "dmg3", chs: "3- Hit Nomal Attack" },
    { key: "dmg4", chs: "4- Hit Nomal Attack" },
    { key: "dmg5", chs: "5- Hit Nomal Attack" },
];

let rows2 = [
    { key: "bDmg1", chs: "Aimshot" },
];

let rows3 = [
    { key: "bDmg2", chs: "Fully Charge Aimshot" },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = tablePhysical(attribute, configObject, enemy, rows1, "a");
    let b = tablePhysical(attribute, configObject, enemy, rows2, "b");
    let b2 = tableFire(attribute, configObject, enemy, rows3, "b");
    let air = tablePhysical(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, b2, air
    };
}