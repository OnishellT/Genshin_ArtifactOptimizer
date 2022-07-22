import { tableWind, tableWater, tableFire, tableIce, tableThunder } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rowsQ = [
    { key: "dmg1", chs: "Damage Over Time" },
];

let rowsEle = [{ key: "dmg2", chs: "Additional Elemental Damage" }];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = tableWind(attribute, configObject, enemy, rowsQ, "q");

    let water = tableWater(attribute, configObject, enemy, rowsEle, "q");
    let fire = tableFire(attribute, configObject, enemy, rowsEle, "q");
    let ice = tableIce(attribute, configObject, enemy, rowsEle, "q");
    let thunder = tableThunder(attribute, configObject, enemy, rowsEle, "q");

    return {
        q, water, fire, ice, thunder
    };
}