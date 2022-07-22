import { tableFire } from "../../../utils";
// import mergeArray from "@util/mergeArray";
import { getAttribute } from "@util/attribute";

let skillKeys = [
    {
        key: "dmg1",
        chs: "Fiery Rain Damage Per Wave",
        skill: "q",
        element: "fire",
    },
    {
        key: "dmg2",
        chs: "Total Fiery Rain Damage",
        skill: "q",
        element: "fire",
    },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    return tableFire(attribute, configObject, enemy, skillKeys, "q");
}