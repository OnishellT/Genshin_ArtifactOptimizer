import { rowRock } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


const skill = charactersData["yunjin"].skill;

const rowsE = [
    { key: "dmg1", chs: "Tap damage" },
    { key: "dmg2", chs: "Charge Level 1 Damage" },
    { key: "dmg3", chs: "Charge Level 2 Damage" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let e = [];
    for (let { key, chs } of rowsE) {
        const def = attribute.defend();
        const base = def * skill.e[key][c.skill2 - 1];
        e.push(rowRock(attribute, configObject, enemy, chs, "e", base));
    }

    const hp = attribute.life();
    const shield = hp * skill.e.shield1[c.skill2 - 1] + skill.e.shield1Fixed[c.skill2 - 1];

    return {
        e, shield,
    }
}