import { rowsAir, tableFire, tablePhysical } from "../../../utils";
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
];

let rowsB = [
    {
        key: "bDmg1",
        chs: "Charge Attack Spinning Damage ",
    },
    {
        key: "bDmg2",
        chs: "Final Charge Attack Spinning Damage ",
    },
];

export default function (artifacts, configObject, enemy, otherConfig) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let hasTalent2 = c.level > 60 || (c.level === 60 && c.ascend);
    if (hasTalent2) {
        attribute.fireBonus += 0.2;
    }

    let f;
    if (otherConfig.afterQ) {
        f = tableFire;
    } else {
        f = tablePhysical;
    }

    let a = f(attribute, configObject, enemy, rowsA, "a");
    let b = f(attribute, configObject, enemy, rowsB, "b");
    let air = f(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air,
    };
}