import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "heiyanfeiyu",
    chs: "Blackcliff Agate",
    url: tn,
    star: 4,
    type: "book",
    config: () => commonConfigLevel("Blackcliff Agate", 3),
    effect: "Press The Advantage：After defeating an opponent, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others."
}