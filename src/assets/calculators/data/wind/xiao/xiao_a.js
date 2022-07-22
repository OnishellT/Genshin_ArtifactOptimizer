import { rowsAir, tablePhysical, tableWind } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


let skill = charactersData["xiao"].skill;

let rowsA = [
    { key: "dmg11", chs: "1- Hit Nomal Attack-1" },
    { key: "dmg12", chs: "1- Hit Nomal Attack-2" },
    { key: "dmg2", chs: "2- Hit Nomal Attack" },
    { key: "dmg3", chs: "3- Hit Nomal Attack" },
    { key: "dmg41", chs: "4- Hit Nomal Attack-1" },
    { key: "dmg42", chs: "4- Hit Nomal Attack-2" },
    { key: "dmg5", chs: "5- Hit Nomal Attack" },
    { key: "dmg6", chs: "6- Hit Nomal Attack" },
];

let rowsB = [
    { key: "bDmg1", chs: "Charge Attack Damage" },
]

export default function (artifacts, configObject, enemy, otherConfig) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let f;
    if (otherConfig.afterQ) {
        let bonus = skill.q.bonus[c.skill3 - 1];
        attribute.aBonus += bonus;
        attribute.bBonus += bonus;
        attribute.airBonus += bonus;
        f = tableWind;
    } else {
        f = tablePhysical;
    }

    let a = f(attribute, configObject, enemy, rowsA, "a");
    let b = f(attribute, configObject, enemy, rowsB, "b");
    let air = f(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air,
    }
}