import tn from "./tn.png";
import { commonConfigRate } from "../../../common/utils";

export default {
    name: "feitianyujian",
    chs: "Skyrider Sword",
    url: tn,
    star: 3,
    type: "sword",
    config: () => commonConfigRate("Skyrider Sword"),
    effect: "Determination：Using an Elemental Burst grants a 12/15/18/21/24% increase in ATK and Movement SPD for 12s.",
}