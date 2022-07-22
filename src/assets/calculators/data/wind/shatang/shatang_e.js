import { tableWind } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rowsE = [
    {
        key: "dmg1",
        chs: "Skill Damage",
    },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    return tableWind(attribute, configObject, enemy, rowsE, "e");
}