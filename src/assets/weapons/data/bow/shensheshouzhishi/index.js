import { commonConfigPassive } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "shensheshouzhishi",
    chs: "Sharpshooter's Oath",
    url: tn,
    star: 3,
    type: "bow",
    config: () => commonConfigPassive("Sharpshooter's Oath", "Weak Spots", "critical"),
    effect: "Precise：Increases DMG against weak spots by 24/30/36/42/48%.",
}