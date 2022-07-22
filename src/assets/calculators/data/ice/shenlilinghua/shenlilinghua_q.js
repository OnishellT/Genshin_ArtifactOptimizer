import { tableIce } from "../../../utils";
import { getAttribute } from "@util/attribute";


let rowsQ = [
    { key: "dmg1", chs: "Cutting Damage" },
    { key: "dmg2", chs: "Bloom Damage" },
];

export default function (artifacts, configObject, enemy, { afterTalent2 }) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    if (afterTalent2) {
        attribute.iceBonus += 0.18;
    }

    let q = tableIce(attribute, configObject, enemy, rowsQ, "q");

    return {
        q,
    };
}