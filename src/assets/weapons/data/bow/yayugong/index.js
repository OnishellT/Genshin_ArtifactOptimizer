import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "yayugong",
    chs: "Raven Bow",
    url: tn,
    star: 3,
    type: "bow",
    config: () => commonConfigRate("Raven Bow"),
    effect: "Bane of Flame and Water：Increases DMG against opponents affected by Hydro or Pyro by 12/15/18/21/24%. "
}