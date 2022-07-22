import badge from "@asset/badges/cryo.png";

export default {
    name: "ice2",
    chs: "Cryo Elemental Resonance - Shattering Ice",
    badge,
    genre: "resonance",
    getStandardConfig() {
        return {
            type: "critical",
            value: 0.15,
        }
    },
}