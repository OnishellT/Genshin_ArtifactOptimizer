import { damageNormal, tableIce } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


let skill = charactersData["youla"].skill;

let rowsQ = [
    { key: "dmg1", chs: "Skill Damage" },
];

export default function (artifacts, configObject, enemy, otherConfig) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = tableIce(attribute, configObject, enemy, rowsQ, "q");
    
    const idx = c.skill3 - 1;
    let ratio = skill.q.dmg2[idx] + otherConfig.count * skill.q.dmg3[idx];
    
    let sword = [];
    sword.push({
        chs: "Lightfall Sword Damage",
        normal: damageNormal(attribute, c.level, ratio, enemy, "physical", "q"),
    });

    return {
        q, sword,
    };
}