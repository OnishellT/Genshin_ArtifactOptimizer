import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "baiyingjian",
    chs: "Whiteblind",
    url: tn,
    star: 4,
    type: "sword2",
    config: () => commonConfigLevel("Whiteblind", 4),
    effect: "Infusion Blade：On hit, Normal or Charged Attacks increase Base ATK and DEF by 6/7.5/9/10.5/12% for 6s. Max 4 stacks. Can only occur once every 0.5s.",
}