import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "sifengyuandian",
    chs: "Lost Prayer to the Sacred Winds",
    url: tn,
    star: 5,
    type: "book",
    config: () => commonConfigLevel("Lost Prayer to the Sacred Winds", 4),
    effect: "Boundless Blessing：Increases Movement SPD by 10%. When in battle, earn a 6/8/10/12/14% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat."
}