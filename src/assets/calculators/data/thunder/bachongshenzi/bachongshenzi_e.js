import {rowThunder} from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


let skill = charactersData["bachongshenzi"].skill;

let rowsE = [
    { key: "dmg1", chs: "Sesshou Sakura DMG: Level 1" },
    { key: "dmg2", chs: "Sesshou Sakura DMG: Level 2" },
    { key: "dmg3", chs: "Sesshou Sakura DMG: Level 3" },
    { key: "dmg4", chs: "Sesshou Sakura DMG: Level 4" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    const hasTalent2 = c.level > 60 || (c.level === 60 && c.ascend)

    if (hasTalent2) {
        let em = attribute.elementalMastery
        attribute.eBonus += em * 0.0015
    }

    let e = [];
    for (let row of rowsE) {
        const atk = attribute.attack();
        const base = atk * skill.e[row.key][c.skill2 - 1];
        e.push(rowThunder(attribute, configObject, enemy, row.chs, "e", base));
    }

    return {
        e
    }
}