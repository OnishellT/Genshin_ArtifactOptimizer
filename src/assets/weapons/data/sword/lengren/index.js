import tn from "./tn.png";
import { commonConfigRate } from "../../../common/utils";

export default {
    name: "lengren",
    chs: "Cool Steel",
    url: tn,
    star: 3,
    type: "sword",
    config: () => commonConfigRate("Cool Steel"),
    effect: "Bane of Water and Ice：Increases DMG against enemies affected by Hydro or Cryo by 12/15/18/21/24%.",
}