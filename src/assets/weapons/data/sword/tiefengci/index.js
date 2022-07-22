import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "tiefengci",
    chs: "Iron Sting",
    url: tn,
    star: 4,
    type: "sword",
    config: () => commonConfigLevel("Iron Sting", 2),
    effect: "Infusion Stinger：Dealing Elemental DMG increases all DMG by 6/7.5/9/10.5/12% for 6s. Max 2 stacks. Can only occur once every 1s.",
}