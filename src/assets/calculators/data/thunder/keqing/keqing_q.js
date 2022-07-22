import { tableThunder } from "../../../utils";
import { getAttribute } from "@util/attribute";


let skillKeys = [
    {
        key: "dmg1",
        chs: "Skill Damage",
    },
    {
        key: "dmg2",
        chs: "Consecutive Slash Damage",
    },
    {
        key: "dmg3",
        chs: "Last Attack Damage",
    },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let hasTalent2 = (c.level === 60 && c.ascend) || c.level > 60;

    if (hasTalent2) {
        attribute.crit(0.15);
    }

    return tableThunder(attribute, configObject, enemy, skillKeys, "q");
}