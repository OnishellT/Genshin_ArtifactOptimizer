import tn from "./tn.png";
import { commonConfigRate } from "../../../common/utils";

export default {
    name: "fenghuazhisong",
    chs: "Windblume Ode",
    url: tn,
    star: 4,
    type: "bow",
    config: () => commonConfigRate("Windblume Ode"),
    effect: "Windblume Wish：After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 16/20/24/28/32% for 6s."
}