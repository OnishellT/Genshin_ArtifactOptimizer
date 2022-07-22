import tn from "./tn.png";
import { commonConfigLevel } from "../../../common/utils";

export default {
    name: "shizuozhanyan",
    chs: "Prototype Rancour",
    url: tn,
    star: 4,
    type: "sword",
    config: () => commonConfigLevel("Prototype Rancour", 4),
    effect: "Smashed Stone：On hit, Normal or Charged Attacks increase Base ATK and DEF by 4/4.5/5/5.5/6% for 6s. Max 4 stacks. Can only occur once every 0.3s.",
}