import { charactersData } from "@asset/characters";


let skill = charactersData["zhongli"].skill;

function zhongliQ(config) {
    let qLevel = config.cArgs.skill3;
    let r = skill.q.dmg1[qLevel - 1];
    let hasTalent2 = config.character.hasTalent2;

    return function (attribute) {
        let atk = attribute.attack();
        let bonus = attribute.bonus + attribute.rockBonus + attribute.qBonus;
        let extraDmg = attribute.life() * 0.33;
        let baseDmg = (atk * r + (hasTalent2 ? extraDmg : 0)) * (1 + bonus);
        let crit = Math.min(1, attribute.qCritical);

        return (1 + attribute.criticalDamage * crit) * baseDmg;
    };
}

export default {
    name: "zhongliQ",
    func: zhongliQ,
    needConfig: true,
}