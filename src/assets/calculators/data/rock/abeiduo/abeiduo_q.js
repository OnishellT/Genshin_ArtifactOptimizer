import { rowRock } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


const skill = charactersData["abeiduo"].skill;

const rowsQ = [
    { key: "dmg1", chs: "Elemental Burst Damage" },
    { key: "dmg2", chs: "Fatal Blossom Damage" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = [];
    for (const row of rowsQ) {
        const atk = attribute.attack();
        const ratio = skill.q[row.key][c.skill3 - 1];
        const base = atk * ratio;
        q.push(rowRock(attribute, configObject, enemy, row.chs, "q", base));
    }

    return {
        q
    };
}