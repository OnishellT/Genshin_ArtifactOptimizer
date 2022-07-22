import { tableThunder } from "../../../utils";
import { getAttribute } from "@util/attribute";

let skillKeys = [
    {
        key: "dmg1",
        chs: "Lightning Stiletto Damage",
    },
    {
        key: "dmg2",
        chs: "Slashing Damage",
    }
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    return tableThunder(attribute, configObject, enemy, skillKeys, "e");
}