import tn from "./tn.png";
import { commonConfigLevel } from "../../../common/utils";

export default {
    name: "anxianglieshou",
    chs: "Alley Hunter",
    url: tn,
    star: 4,
    type: "bow",
    config: () => commonConfigLevel("Alley Hunter", 10),
    effect: "Urban Guerrilla：Every 4s a character is on the field, their ATK increases by 4/5/6/7/8% and their CRIT DMG increases by 4/5/6/7/8%. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be cleared when the character takes DMG."
}