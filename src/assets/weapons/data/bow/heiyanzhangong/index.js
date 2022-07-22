import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "heiyanzhangong",
    chs: "Blackcliff Warbow",
    url: tn,
    star: 4,
    type: "bow",
    config: () => commonConfigLevel("Blackcliff Warbow", 3),
    effect: "Press the Advantage：After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others."
}