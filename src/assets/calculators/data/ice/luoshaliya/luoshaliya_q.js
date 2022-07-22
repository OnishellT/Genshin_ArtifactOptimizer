import { tableIce } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rowsQ = [
    { key: "dmg11", chs: "Skill Damage-1" },
    { key: "dmg12", chs: "Skill Damage-2" },
    { key: "dmg2", chs: "Ice Lance Damage Over Time" },
];

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = tableIce(attribute, configObject, enemy, rowsQ, "q");

    return {
        q,
    };
}