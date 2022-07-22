import { rowsAir, tablePhysical } from "../../../utils";
import { getAttribute } from "@util/attribute";


const rowsA = [
    { key: "dmg1", chs: "1- Hit Nomal Attack" },
    { key: "dmg2", chs: "2- Hit Nomal Attack" },
    { key: "dmg3", chs: "3- Hit Nomal Attack/2" },
    { key: "dmg4", chs: "4- Hit Nomal Attack" },
];

const rowsB = [
    { key: "bDmg1", chs: "Charge Attack Damage" },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = tablePhysical(attribute, configObject, enemy, rowsA, "a");
    let b = tablePhysical(attribute, configObject, enemy, rowsB, "b");
    let air = tablePhysical(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air
    }
}