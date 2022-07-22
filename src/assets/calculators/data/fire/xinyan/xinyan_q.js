import { tableFire, tablePhysical } from "../../../utils";
import { getAttribute } from "@util/attribute";

let skillKeys1 = [
    {
        key: "dmg2",
        chs: "Pyro Damage Over Time",
    },
];

let skillKeys2 = [
    {
        key: "dmg1",
        chs: "Skill Damage",
    },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let fire = tableFire(attribute, configObject, enemy, skillKeys1, "q");

    if (c.constellation >= 2) {
        attribute.qCritical = 1;
    }

    let physical = tablePhysical(attribute, configObject, enemy, skillKeys2, "q");

    return {
        fire,
        physical,
    };
}