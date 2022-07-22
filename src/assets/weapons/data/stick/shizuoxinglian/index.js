import tn from "./tn.png";
import { commonConfigLevel } from "../../../common/utils";

export default {
    name: "shizuoxinglian",
    chs: "Prototype Starglitter",
    url: tn,
    star: 4,
    type: "stick",
    config: () => commonConfigLevel("Prototype Starglitter", 2),
    effect: "Magic Eater：After using an Elemental Skill, increases Normal and Charged Attack DMG by 8/10/12/14/16% for 12s. Max 2 stacks."
}