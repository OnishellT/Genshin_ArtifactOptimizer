import badge from "@asset/badges/geo.png";

export default {
    name: "rock2",
    chs: "Geo Elemental Resonance - Enduring Rock (Resistance Shred and Shield Strength Not Taken into Account)",
    badge,
    genre: "resonance",
    getStandardConfig() {
        return {
            type: "bonus",
            value: 0.15,
        }
    }
}