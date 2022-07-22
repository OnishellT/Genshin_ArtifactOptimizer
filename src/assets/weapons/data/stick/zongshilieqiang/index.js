import tn from "./tn.png";
import { commonConfigLevel } from "../../../common/utils";

export default {
    name: "zongshilieqiang",
    chs: "Royal Spear",
    url: tn,
    star: 4,
    type: "stick",
    config: () => commonConfigLevel("Royal Spear", 5),
    effect: "Focus：Upon damaging an opponent, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks."
}