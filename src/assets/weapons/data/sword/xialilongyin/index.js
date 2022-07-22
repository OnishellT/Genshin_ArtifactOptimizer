import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "xialilongyin",
    chs: "Lion's Roar",
    url: tn,
    star: 4,
    type: "sword",
    config: () => commonConfigRate("Lion's Roar"),
    effect: "Bane of Fire and Thunder：Increases DMG against enemies affected by Pyro or Electro by 20/24/28/32/36%. ",
}