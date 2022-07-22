import { rowThunder } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


let skill = charactersData["leize"].skill;

let rowsQ = [
    {
        key: "dmg1",
        chs: "Burst Damage",
    },
];

let rowsA = [
    { key: "dmg1", chs: "1- Normal Attack Damage", },
    { key: "dmg2", chs: "2- Normal Attack Damage", },
    { key: "dmg3", chs: "3- Normal Attack Damage", },
    { key: "dmg4", chs: "4- Normal Attack Damage", },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);


    let skill3 = c.skill3;
    let tableQ = [];
    for (let config of rowsQ) {
        let ratio = skill.q[config.key][skill3 - 1];
        let base = ratio * attribute.attack();
        let row = rowThunder(attribute, configObject, enemy, config.chs, "q", base);
        tableQ.push(row);
    }

    let tableWolf = [];
    for (let config of rowsA) {
        let ratioA = skill.a[config.key][c.skill1 - 1];
        let ratioQ = skill.q.dmg2[skill3 - 1];
        let ratio = ratioA * ratioQ;
        let base = ratio * attribute.attack();
        let row = rowThunder(attribute, configObject, enemy, config.chs, "q", base);
        tableWolf.push(row);
    }

    return {
        q: tableQ, wolf: tableWolf,
    }
}