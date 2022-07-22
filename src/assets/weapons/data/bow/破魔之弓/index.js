import tn from "./tn.png";
import { commonConfigRate } from "../../../common/utils";

export default {
    name: "pomozhigong",
    chs: "Hamayumi",
    url: tn,
    star: 4,
    type: "bow",
    config: () => commonConfigRate("Hamayumi"),
    effect: "Full Draw: Increases Normal Attack DMG by 16/20/24/28/32% and Charged ATK DMG by 12/15/18/21/24%. When the equipping character’s Energy reaches 100%, this effect is increased by 100%."
}