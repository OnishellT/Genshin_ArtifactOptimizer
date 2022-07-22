import { tableWind } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rowsE = [
    { key: "dmg1", chs: "Initial Cutting Damage" },
    { key: "dmg2", chs: "Max Cutting Damage" },
    { key: "dmg3", chs: "Initital Storm Damage" },
    { key: "dmg4", chs: "Max Storm Damage" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let e = tableWind(attribute, configObject, enemy, rowsE, "e");

    return e;
}