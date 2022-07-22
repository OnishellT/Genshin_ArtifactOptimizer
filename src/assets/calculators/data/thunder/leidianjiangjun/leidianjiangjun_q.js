// import { damageDelegate } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


let skill = charactersData["leidianjiangjun"].skill;

let rowsQ = [
    {
        key: "dmg1",
        chs: "Musou No Hitotachi Base Damage",
    },
];

let rowsA = [
    { key: "dmg2", chs: "1- Normal Attack Damage" },
    { key: "dmg3", chs: "2- Normal Attack Damage" },
    { key: "dmg4", chs: "3- Normal Attack Damage" },
    { key: "dmg51", chs: "4- Normal Attack Damage -1" },
    { key: "dmg52", chs: "4- Normal Attack Damage -2" },
    { key: "dmg6", chs: "5- Normal Attack Damage" },
    { key: "bDmg11", chs: "Charge Attack Damage -1" },
    { key: "bDmg12", chs: "Charge Attack Damage -2" },
    { key: "airDmg1", chs: "Plunge Damage" },
    { key: "airDmg2", chs: "Low Plunge Damage" },
    { key: "airDmg3", chs: "High Plunge Damage" },
];

function row(attribute, configObject, enemy, rowConfig, { afterE, qLevel }, isDmg1) {
    const skill2 = configObject.character.skill2;
    const skill3 = configObject.character.skill3;
    const cLevel = configObject.character.level;
    const defDown = attribute.enemyDefDown;
    const thunderDown = attribute.enemyThunderDown;

    let qBase = 0;
    let qBonus = 0;
    if (afterE) {
        qBonus += skill.e.bonus[skill2 - 1] * 90;
    }
    if (isDmg1) {
        qBase += skill.q.bonus1[skill3 - 1] * qLevel;
    } else {
        qBase += skill.q.bonus2[skill3 - 1] * qLevel;
    }

    let baseDmg = (skill.q[rowConfig.key][skill3 - 1] + qBase) * attribute.attack();
    baseDmg += attribute.lifeRatio * attribute.life();

    const dmgWithoutCrit = baseDmg * (1 + qBonus + attribute.qBonus + attribute.bonus + attribute.thunderBonus)
        * enemy.getRR("thunder", thunderDown) * enemy.getDR(cLevel, defDown)
    ;

    const dmg = {
        crit: dmgWithoutCrit * (1 + attribute.criticalDamage),
        nonCrit: dmgWithoutCrit,
        expect: dmgWithoutCrit * (1 + Math.min(1, attribute.qCritical) * attribute.criticalDamage)
    }

    return {
        thunder: dmg,
        chs: rowConfig.chs,
    }
}

export default function (artifacts, configObject, enemy, config) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    if (c.constellation >= 2) {
        // ignore 60% DEF
        // console.log("123");
        attribute.enemyDefDown += 0.6;
    }

    let rows = [];
    rows.push(row(attribute, configObject, enemy, rowsQ[0], config, true));
    for (let item of rowsA) {
        rows.push(row(attribute, configObject, enemy, item, config, false));
    }

    return {
        q: rows,
    }
}