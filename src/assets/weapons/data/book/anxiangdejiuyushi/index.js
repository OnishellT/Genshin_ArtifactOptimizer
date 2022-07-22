import tn from "./tn.png";
import { commonConfigRate } from "../../../common/utils";

export default {
    name: "anxiangdejiuyushi",
    chs: "Wine and Song",
    url: tn,
    star: 4,
    type: "book",
    config: () => commonConfigRate("Wine and Song"),
    effect: "Ever-Changing：Hitting and opponent with a Normal Attack decreases stamina consumption of Sprint or Alternate Sprint by 14/16/18/20/22% for 5s. Additionally, using a Spring or Alternate Sprint ability increases ATK by 20/25/30/35/40% for 5s."
}