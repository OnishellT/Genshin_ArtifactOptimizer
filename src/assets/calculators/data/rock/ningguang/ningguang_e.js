import { tableRock } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


let skill = charactersData["ningguang"].skill;

let rowsE = [
    { key: "dmg1", chs: "Skill Damage" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let e = tableRock(attribute, configObject, enemy, rowsE, "e");
    let hp = skill.e.hp[c.skill2 - 1] * attribute.life();

    return {
        e, hp,
    }
}