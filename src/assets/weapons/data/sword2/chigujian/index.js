import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "chigujian",
    chs: "Serpent Spine",
    url: tn,
    star: 4,
    type: "sword2",
    config: () => commonConfigLevel("Serpent Spine", 5),
    effect: "Wavesplitter：Every 4s a character is on the field, they will deal 6/7/8/9/10% more DMG and take 3/2.7/2.4/2.1/1.8% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be cleared when the character takes DMG."
}