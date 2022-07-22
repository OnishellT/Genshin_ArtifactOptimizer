import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "heiyanzhandao",
    chs: "Blackcliff Slasher",
    url: tn,
    star: 4,
    type: "sword2",
    config: () => commonConfigLevel("Blackcliff Slasher", 3),
    effect: "Press the Advantage：After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others."
}