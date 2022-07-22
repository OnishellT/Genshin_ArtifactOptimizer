import { rowsAir, tablePhysical, tableFire } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";

const skill = charactersData["hutao"].skill;

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
        key: "dmg51",
        chs: "5-Hit Damage 1",
    },
    {
        key: "dmg52",
        chs: "5-Hit Damage 2",
    },
    {
        key: "dmg6",
        chs: "6-Hit Damage",
    },
];

let rowsB = [
    {
        key: "bDmg",
        chs: "Charge Attack",
        skill: "b",
    },
];

export default function (artifacts, configObject, enemy, otherConfig) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let f = otherConfig.afterE ? tableFire : tablePhysical;
    if (otherConfig.afterE) {
        let atkBonus = Math.min(4 * attribute.attackBasic, skill.e.hp[c.skill2 - 1] * attribute.life());
        attribute.attackStatic += atkBonus;
    }

    let a = f(attribute, configObject, enemy, rowsA, "a");
    let b = f(attribute, configObject, enemy, rowsB, "b");
    let air = f(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air
    };
}