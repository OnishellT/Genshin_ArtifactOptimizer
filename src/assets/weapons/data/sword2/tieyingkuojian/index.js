import { commonConfigPassive } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "tieyingkuojian",
    chs: "Ferrous Shadow",
    url: tn,
    star: 3,
    type: "sword2",
    config: () => commonConfigPassive("Ferrous Shadow", "Passive Active"),
    effect: "Unbending：When HP falls below 70/75/80/85/90%, increases Charged Attack DMG by 30/35/40/45/50%, and Charged Attacks become much harder to interrupt.",
}