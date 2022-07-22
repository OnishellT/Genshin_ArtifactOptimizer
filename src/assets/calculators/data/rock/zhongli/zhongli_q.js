import { getAttribute } from "@util/attribute";
import { rowRock } from "../../../utils";
import { charactersData } from "@asset/characters";

let skill = charactersData["zhongli"].skill;

let rowsQ = [
    { key: "dmg1", chs: "Skill Damage" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let hasTalent2 = (c.level == 60 && c.ascend) || c.level > 60;
    let extraDmg = 0;
    if (hasTalent2) {
        extraDmg = attribute.life() * 0.33;
    }

    let skill3 = c.skill3;

    let tableQ = [];
    for (let config of rowsQ) {
        let ratio = skill.q[config.key][skill3 - 1];
        let base = ratio * attribute.attack() + extraDmg;
        let row = rowRock(attribute, configObject, enemy, config.chs, "q", base);
        tableQ.push(row);
    }

    return {
        q: tableQ,
    };
}