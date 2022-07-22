import badge from "@asset/badges/fire_slime.png";
import config from "./Max.tcfg";

export default {
    name: "max",
    chs: "Maximum Damage",
    description: [
        "Make the highest damage cap of a certain type"
    ],
    //formula: "ATK * (1 + damage bonus + elemental/physical damage bonus + flat ATK/charge attck/elemental skill/elemental burst damage bonus) * (1 + crit damage)",
    tags: [
        "Upper limit",
    ],
    "for": "common",
    config,
    badge,
}