import { tableFire } from "../../../utils";
import { getAttribute } from "@util/attribute";


let skillKeys = [
    { key: "dmg1", chs: "Skill Damage" },
    { key: "dmg2", chs: "Aurous Blaze Explosion Damage" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = tableFire(attribute, configObject, enemy, skillKeys, "q");

    return {
        q
    }
}