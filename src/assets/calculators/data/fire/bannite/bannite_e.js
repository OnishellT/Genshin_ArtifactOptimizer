import { tableFire } from "../../../utils";
import { getAttribute } from "@util/attribute";

let skillKeys = [
    {
        key: "dmg1",
        chs: "Tap Damage",
    },
    {
        key: "dmg21",
        chs: "Charge Level 1 Damage -1",
    },
    {
        key: "dmg22",
        chs: "Charge Level 1 Damage -2",
    },
    {
        key: "dmg31",
        chs: "Charge Level 2 Damage -1",
    },
    {
        key: "dmg32",
        chs: "Charge Level 2 Damage -2",
    },
    {
        key: "dmg4",
        chs: "Explosion Damage",
    },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    return tableFire(attribute, configObject, enemy, skillKeys, "e");
}