import { damageNormal } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";

let skill = charactersData["beidou"].skill;

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let shield = skill.e.shield1[c.skill2 - 1] * attribute.life() + skill.e.shield1Static[c.skill2 - 1];

    let r = [skill.e.dmg1[c.skill2 - 1]];
    r.push(r[0] + skill.e.dmgLift[c.skill2 - 1]);
    r.push(r[1] + skill.e.dmgLift[c.skill2 - 1]);
    let chs = ["Base Damage", "Level 1 Damage", "Level 2 Damage"]

    let damage = r.map((rate, index) => {
        return {
            chs: chs[index],
            thunder: damageNormal(attribute, c.level, rate, enemy, "thunder", "e"),
        }
    });

    return {
        shield, e: damage,
    }
}