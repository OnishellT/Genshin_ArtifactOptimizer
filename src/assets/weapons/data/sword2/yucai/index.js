import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "yucai",
    chs: "Rainslasher",
    url: tn,
    star: 4,
    type: "sword2",
    config: () => commonConfigRate("Rainslasher"),
    effect: "Bane of Storm and Tide：Increases DMG against enemies affected by Hydro or Electro by 20/25/30/35/40%.",
}