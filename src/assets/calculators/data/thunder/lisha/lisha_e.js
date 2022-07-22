import { tableThunder } from "../../../utils";
import { getAttribute } from "@util/attribute";

let rowsE = [
    {
        key: "dmg1",
        chs: "Tap Damage",
    },
    {
        key: "dmg2",
        chs: "Non-Conductive Hold Damage",
    },
    {
        key: "dmg3",
        chs: "Stack 1 Conductive Hold Damage",
    },
    {
        key: "dmg4",
        chs: "Stack 2 Conductive Hold Damage",
    },
    {
        key: "dmg5",
        chs: "Stack 3 Conductive Hold Damage",
    },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    return tableThunder(attribute, configObject, enemy, rowsE, "e");
}