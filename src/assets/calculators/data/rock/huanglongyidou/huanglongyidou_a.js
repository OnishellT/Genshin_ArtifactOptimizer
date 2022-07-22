import { rowPhysical, rowRock, rowsAir } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


const skill = charactersData["huanglongyidou"].skill;

const rowsA = [
    { key: "dmg1", chs: "1- Normal Attack Damage" },
    { key: "dmg2", chs: "2- Normal Attack Damage" },
    { key: "dmg3", chs: "3- Normal Attack Damage" },
    { key: "dmg4", chs: "4- Normal Attack Damage" },
];

const rowsB1 = [
    { key: "bDmg1", chs: "Arataki Kesagiri Combo Slash DMG" },
    { key: "bDmg2", chs: "Arataki Kesagiri Final Slash DMG" },
]

const rowsB2 = [
    { key: "bDmg3", chs: "Saichimonji Slash DMG" },
]

export default function (artifacts, configObject, enemy, { afterQ }) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    const hasTalent2 = c.level > 60 || (c.level === 60 && c.ascend);

    let f = rowPhysical;
    if (afterQ) {
        attribute.attackPercentage += attribute.defend() * skill.q.atkBonus[c.skill3 - 1];
        f = rowRock;
    }

    let a = [];
    for (let row of rowsA) {
        const atk = attribute.attack();
        const base = atk * skill.a[row.key][c.skill1 - 1];
        a.push(f(attribute, configObject, enemy, row.chs, "a", base));
    }

    let b = [];
    const gesaBonus = hasTalent2 ? 0.35 : 0;

    attribute.bDefRatio += gesaBonus;
    for (let row of rowsB1) {
        const atk = attribute.attack();
        const base = atk * skill.a[row.key][c.skill1 - 1];
        b.push(f(attribute, configObject, enemy, row.chs, "b", base));
    }
    attribute.bDefRatio -= gesaBonus;

    for (let row of rowsB2) {
        const atk = attribute.attack();
        const base = atk * skill.a[row.key][c.skill1 - 1];
        b.push(f(attribute, configObject, enemy, row.chs, "b", base));
    }

    let air = [];
    for (let row of rowsAir) {
        const atk = attribute.attack();
        const base = atk * skill.a[row.key][c.skill1 - 1];
        air.push(f(attribute, configObject, enemy, row.chs, "air", base));
    }

    return {
        a, b, air,
    }
}