import { rowsAir, tableFire } from "../../../utils";
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
];

let rowsB = [
    {
        key: "bDmg1",
        chs: "Charge Attack Damage",
    },
];

export default function (artifacts, configObject, enemy, otherConfig) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    if (otherConfig.spark) {
        attribute.bBonus += 0.5;
    }

    let a = tableFire(attribute, configObject, enemy, rowsA, "a");
    let b = tableFire(attribute, configObject, enemy, rowsB, "b");
    let air = tableFire(attribute, configObject, enemy, rowsAir, "air");
    
    return {
        a, b, air
    };
}