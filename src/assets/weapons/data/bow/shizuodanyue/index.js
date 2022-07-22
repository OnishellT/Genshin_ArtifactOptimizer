import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "shizuodanyue",
    chs: "Prototype Crescent",
    url: tn,
    star: 4,
    type: "bow",
    config: () => commonConfigRate("Prototype Crescent"),
    effect: "Unreturning：Aimed Shot hits on weak points increase Movement SPD by 10% and ATK by 36/45/54/63/72% for 10s."
}