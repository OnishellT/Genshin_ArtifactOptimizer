import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "amosizhigong",
    chs: "Amos' Bow",
    url: tn,
    star: 5,
    type: "bow",
    config: () => commonConfigLevel("Amos' Bow", 5),
    effect: "Strong-Willed：Increases Normal Attack and Aimed Shot DMG by 12/15/18/21/24%. Increases DMG from arrows shot by a further 8/10/12/14/16% for every 0.1s that the arrow is in flight, up to 0.5s. Stacks up to 5 times on each arrow."
}