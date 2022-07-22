import { rowsAir, damageCustom, damageReactionCustom } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


let skill = charactersData["ailuoyi"].skill;

let rowsA = [
    { key: "dmg11", chs: "1- Normal Attack Damage-1" },
    { key: "dmg12", chs: "1- Normal Attack Damage-2" },
    { key: "dmg2", chs: "2- Normal Attack Damage" },
    { key: "dmg3", chs: "3- Normal Attack Damage" },
    { key: "dmg4", chs: "4- Normal Attack Damage" },
];

let rowsB1 = [
    { key: "bDmg1", chs: "Aimshot" },
]

let rowsB2 = [
    { key: "bDmg2", chs: "Fully Charge Aimshot" },
];

let rowsB = [
    { key: "bDmg1", chs: "Aimshot" },
    { key: "bDmg2", chs: "Fully Charge Aimshot" },
]

function rowIce(attribute, configObject, enemy, rowConfig, skillName, { coilCount, iceRush }) {
    let skill1 = configObject.character.skill1;
    let skill2 = configObject.character.skill2;
    let cLevel = configObject.character.level;

    let bonus = 0;
    if (iceRush) {
        bonus = skill.e.atkBonus4[skill2 - 1];
    } else if (coilCount > 0) {
        bonus = skill.e["atkBonus" + coilCount][skill2 - 1];
    }

    let base = skill.a[rowConfig.key][skill1 - 1] * attribute.attack();

    let normal = damageCustom(attribute, cLevel, enemy, "ice", skillName, base, [bonus]);
    let melt = damageReactionCustom("melt", attribute, cLevel, enemy, "ice", skillName, base, [bonus]);

    return {
        ice: normal,
        iceMelt: melt,
        chs: rowConfig.chs,
    }
}

// ice rush = false
function row(attribute, configObject, enemy, rowConfig, skillName, { coilCount }) {
    let skill1 = configObject.character.skill1;
    let skill2 = configObject.character.skill2;
    let cLevel = configObject.character.level;

    let bonus = 0;
    if (coilCount > 0) {
        bonus = skill.e["atkBonus" + coilCount][skill2 - 1];
    }

    let base = skill.a[rowConfig.key][skill1 - 1] * attribute.attack();

    let normal = damageCustom(attribute, cLevel, enemy, "ice", skillName, base, [bonus]);
    
    return {
        normal,
        chs: rowConfig.chs,
    }
}

function table(attribute, configObject, enemy, rows, skillName, config) {
    return rows.map(item => row(attribute, configObject, enemy, item, skillName, config));
}

function tableIce(attribute, configObject, enemy, rows, skillName, config) {
    return rows.map(item => rowIce(attribute, configObject, enemy, item, skillName, config));
}

export default function (artifacts, configObject, enemy, config) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    if (!config.iceRush) {
        let a = table(attribute, configObject, enemy, rowsA, "a", config);
        let b1 = table(attribute, configObject, enemy, rowsB1, "b", config);
        let b2 = tableIce(attribute, configObject, enemy, rowsB2, "b", config);
        let air = table(attribute, configObject, enemy, rowsAir, "air", config);

        return {
            a, b1, b2, air,
        }
    } else {
        let a = tableIce(attribute, configObject, enemy, rowsA, "a", config);
        let b = tableIce(attribute, configObject, enemy, rowsB, "b", config);
        let air = tableIce(attribute, configObject, enemy, rowsAir, "air", config);

        return { a, b, air };
    }
    
}