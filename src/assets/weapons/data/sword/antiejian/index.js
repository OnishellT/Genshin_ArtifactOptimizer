import tn from "./tn.png";
import { commonConfigRate } from "../../../common/utils";

export default {
    name: "antiejian",
    chs: "Dark Iron Sword",
    url: tn,
    star: 3,
    type: "sword",
    config: () => commonConfigRate("Dark Iron Sword"),
    effect: "Overloaded:Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, increases Base ATK by 20/25/30/35/40% for 12s.",
}