import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "ganglungong",
    chs: "Compound Bow",
    url: tn,
    star: 4,
    type: "bow",
    config: () => commonConfigLevel("Compound Bow", 4),
    effect: "Infusion Arrow：Normal Attack and Aimed Shot hits increase ATK by 4/5/6/7/8% and Normal Attack SPD by 1.2/1.5/1.8/2.1/2.4% for 6s. Max 4 stacks. Can only occur once every 0.3s."
}