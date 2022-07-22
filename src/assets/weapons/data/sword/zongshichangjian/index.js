import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "zongshichangjian",
    chs: "Royal Longsword",
    url: tn,
    star: 4,
    type: "sword",
    config: () => commonConfigLevel("Royal Longsword", 5),
    effect: "Focus：Upon damaging an enemy, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks.",
}