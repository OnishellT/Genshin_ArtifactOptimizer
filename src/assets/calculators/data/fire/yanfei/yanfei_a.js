import { rowsAir, tableFire } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";

let skill = charactersData["yanfei"].skill;


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
];

let rowsB = [
    {
        key: "bDmg1",
        chs: "No Seal Charge Attack Damage",
    },
    {
        key: "bDmg2",
        chs: "1 Seal Charge Attack Damage",
    },
    {
        key: "bDmg3",
        chs: "2 Seal Charge Attack Damage",
    },
    {
        key: "bDmg4",
        chs: "3 Seal Charge Attack Damage",
    },
    {
        key: "bDmg5",
        chs: "4 Seal Charge Attack Damage",
    },
];

export default function (artifacts, configObject, enemy, otherConfig) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    if (otherConfig.burn) {
        attribute.bBonus += skill.q.bBonus[c.skill3 - 1];
    }

    let a = tableFire(attribute, configObject, enemy, rowsA, "a");
    let b = tableFire(attribute, configObject, enemy, rowsB, "b");
    let air = tableFire(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air,
    }
}