import { tableWind } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";

let skill = charactersData["zaoyou"].skill;

let rowsQ = [
    { key: "dmg1", chs: "Skill Activation Damage" },
    { key: "dmg2", chs: "Muji-Muji Daruma Damage" }
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = tableWind(attribute, configObject, enemy, rowsQ, "q");
    
    let idx = c.skill3 - 1;
    let heal1 = skill.q.heal1[idx] * attribute.attack() + skill.q.heal1Static[idx];
    let heal2 = skill.q.heal2[idx] * attribute.attack() + skill.q.heal2Static[idx];

    return {
        q, heal1, heal2,
    };
}