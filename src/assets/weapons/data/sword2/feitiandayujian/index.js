import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "feitiandayujian",
    chs: "Skyrider Greatsword",
    url: tn,
    star: 3,
    type: "sword2",
    config: () => commonConfigLevel("Skyrider Greatsword", 4),
    effect: "Courage：On hit, Normal or Charged Attacks increase ATK by 6/7/8/9/10% for 6s. Max 4 stacks. Can only occur once every 0.5s.",
}