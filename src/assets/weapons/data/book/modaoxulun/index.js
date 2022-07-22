import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "modaoxulun",
    chs: "Magic Guide",
    url: tn,
    star: 3,
    type: "book",
    config: () => commonConfigRate("Magic Guide"),
    effect: "Bane of Storm and Tide：Increases DMG against enemies affected by Hydro or Electro by 12/15/18/21/24%."
}