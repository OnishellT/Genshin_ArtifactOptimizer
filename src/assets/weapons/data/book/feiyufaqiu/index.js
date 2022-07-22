import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "feiyufaqiu",
    chs: "Emerald Orb",
    url: tn,
    star: 3,
    type: "book",
    config: () => commonConfigRate("Emerald Orb"),
    effect: "Rapids：Upon causing a Vaporize, Electro-Charged, Frozen, or a Hydro-infused Swirl reaction, increases ATK by 20/25/30/35/40% for 12 s."
}