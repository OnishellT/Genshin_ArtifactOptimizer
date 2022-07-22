import badge from "@asset/badges/fire_slime.png";
import config from "./Expect.tcfg";

export default {
    name: "expect",
    chs: "Average Damage - Recomended",
    recommend: true,
    description: [
        "Makes the highest expected damage of a certain type"
    ],
    //formula: "ATK * (1 + damage bonus + element / physical damage bonus + Ping A / heavy hit / element combat skill / element explosion damage bonus) * (1 + critical hit rate of corresponding skill * critical hit damage)",
    tags: [
        "Average",
    ],
    "for": "common",
    config,
    badge,
}