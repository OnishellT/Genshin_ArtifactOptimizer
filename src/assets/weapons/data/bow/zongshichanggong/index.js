import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "zongshichanggong",
    chs: "Royal Bow",
    url: tn,
    star: 4,
    type: "bow",
    config: () => commonConfigLevel("Royal Bow", 5),
    effect: "Focus：Upon damaging an enemy, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks."
}