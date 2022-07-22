import tn from "./tn.png";
import { commonConfigLevel } from "../../../common/utils";

export default {
    name: "heiyanchangjian",
    chs: "Blackcliff Longsword",
    url: tn,
    star: 4,
    type: "sword",
    config: () => commonConfigLevel("Blackcliff Longsword", 3),
    effect: "Press the Advantage：After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
}