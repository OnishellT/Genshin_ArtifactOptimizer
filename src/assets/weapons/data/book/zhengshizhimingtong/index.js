import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "zhengshizhimingtong",
    chs: "Oathsworn Eye",
    url: tn,
    star: 4,
    type: "book",
    config: () => commonConfigRate("Passive Application Ratio"),
    effect: "People of the Faltering Light: Increase Energy recharge by 24/30/36/42/48% for 10s after using an Elemental Skill."
}