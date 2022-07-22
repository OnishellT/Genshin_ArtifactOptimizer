import { tableWater } from "../../../utils";
import { getAttribute } from "@util/attribute";

let rowsQ = [
    {
        key: "dmg1",
        chs: "Skill Damage: Melee",
    },
    {
        key: "dmg2",
        chs: "Skill Damage: Range",
    },
    {
        key: "dmg3",
        chs: "Riptide Burst Damage",
    },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = tableWater(attribute, configObject, enemy, rowsQ, "q");

    return q;
}