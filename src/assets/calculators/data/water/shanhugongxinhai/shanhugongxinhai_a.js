import { rowsAir, rowWater } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";

let skill = charactersData["shanhugongxinhai"].skill;


let rowsA = [
    { key: "dmg1", chs: "1- Hit Nomal Attack", },
    { key: "dmg2", chs: "2- Hit Nomal Attack", },
    { key: "dmg3", chs: "3- Hit Nomal Attack", },
];

let rowsB = [
    { key: "bDmg1", chs: "Charge Attack Damage", },
]

export default function (artifacts, configObject, enemy, { afterQ }) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let skill1 = c.skill1;
    let skill3 = c.skill3;
    let hasTalent2 = c.level > 60 || (c.level === 60 && c.ascend);

    let bonusA = 0;
    let bonusB = 0;
    if (afterQ) {
        bonusA = skill.q.aBonus[skill3 - 1] * attribute.life();
        bonusB = skill.q.bBonus[skill3 - 1] * attribute.life();

        if (hasTalent2) {
            bonusA += attribute.cureEffect * 0.15 * attribute.life();
            bonusB += attribute.cureEffect * 0.15 * attribute.life();
        }
    }

    let tableA = [];
    for (let config of rowsA) {
        let ratio = skill.a[config.key][skill1 - 1];
        let base = ratio * attribute.attack() + bonusA;
        // console.log(base);
        let row = rowWater(attribute, configObject, enemy, config.chs, "a", base);
        row.tag = "expectOnly";
        tableA.push(row);
    }

    let tableB = [];
    for (let config of rowsB) {
        let ratio = skill.a[config.key][skill1 - 1];
        let base = ratio * attribute.attack() + bonusB;
        let row = rowWater(attribute, configObject, enemy, config.chs, "b", base);
        row.tag = "expectOnly";
        tableB.push(row);
    }

    let tableAir = [];
    for (let config of rowsAir) {
        let ratio = skill.a[config.key][skill1 - 1];
        let base = ratio * attribute.attack();
        let row = rowWater(attribute, configObject, enemy, config.chs, "air", base);
        row.tag = "expectOnly";
        tableAir.push(row);
    }

    return {
        a: tableA, b: tableB, air: tableAir,
    }
}