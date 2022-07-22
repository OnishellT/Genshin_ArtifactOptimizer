import { tableFire } from "../../../utils";
import { getAttribute } from "@util/attribute";

let skillKeys = [
    {
        key: "dmg1",
        chs: "Jumpy Dumpty Damage",
    },
    {
        key: "dmg2",
        chs: "Mine Damage",
    },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    return tableFire(attribute, configObject, enemy, skillKeys, "e");
}