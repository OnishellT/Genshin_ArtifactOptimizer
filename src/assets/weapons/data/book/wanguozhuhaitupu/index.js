import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "wanguozhuhaitupu",
    chs: "Mappa Mare",
    url: tn,
    star: 4,
    type: "book",
    config: () => commonConfigLevel("Mappa Mare", 2),
    effect: "Infusion Scroll： Triggering an Elemental reaction grants a 8/10/12/14/16% Elemental DMG Bonus for 10s. Max 2 stacks."
}