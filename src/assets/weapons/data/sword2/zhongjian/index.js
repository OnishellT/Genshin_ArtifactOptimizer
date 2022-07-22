import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "zhongjian",
    chs: "The Bell",
    url: tn,
    star: 4,
    type: "sword2",
    config: () => commonConfigRate("The Bell"),
    effect: "Rebellious Guardian：Taking DMG generates a shield which absorbs DMG up to 20/23/26/29/32% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by the shield, the character gains 12/15/18/21/24% increased DMG."
}