import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "jiajibaojue",
    chs: "Twin Nephrite",
    url: tn,
    star: 3,
    type: "book",
    config: () => commonConfigRate("Twin Nephrite"),
    effect: "Raiding Tactic：Defeating an opponent increases Movement SPD and ATK by 12/14/16/18/20% for 15s.",
}