import { tableThunder } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rowsQ = [
    { key: "dmg1", chs: "Skill Damage" },
    { key: "dmg2", chs: "Falling Thunder Damage" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = tableThunder(attribute, configObject, enemy, rowsQ, "q");

    return {
        q
    };
}