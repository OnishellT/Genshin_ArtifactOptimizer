import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "langdemolu",
    chs: "Wolf's Gravestone",
    url: tn,
    star: 5,
    type: "sword2",
    config: () => commonConfigRate("Wolf's Gravestone"),
    effect: "Wolfish Tracker：Increases ATK by 20/25/30/35/40%. On hit, attacks against enemies with less than 30% HP increase all party members' Base ATK by 40/50/60/70/80% for 12s. Can only occur once every 30s."
}