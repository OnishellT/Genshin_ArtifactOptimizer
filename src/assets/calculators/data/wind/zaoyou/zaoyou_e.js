import { tableFire, tableIce, tableThunder, tableWater, tableWind } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rowsE = [
    { key: "dmg1", chs: "Fuufuu Whindwheel Damage" },
    { key: "dmg2", chs: "Press Fuufuu Whindwheel Damage" },
    { key: "dmg3", chs: "Kick Hold Fuufuu Whindwheel Damage" },
];

let rowsEle = [
    { key: "dmg4", chs: "Fuufuu Whindwheel Elemental Damage" },
    { key: "dmg4", chs: "Fuufuu Whindwheel Kick Elemental Damage" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let e = tableWind(attribute, configObject, enemy, rowsE, "e");
    
    let water = tableWater(attribute, configObject, enemy, rowsEle, "e");
    let fire = tableFire(attribute, configObject, enemy, rowsEle, "e");
    let ice = tableIce(attribute, configObject, enemy, rowsEle, "e");
    let thunder = tableThunder(attribute, configObject, enemy, rowsEle, "e");

    return {
        e, water, fire, ice, thunder
    };
}