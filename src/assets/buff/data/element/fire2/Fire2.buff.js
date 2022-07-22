import badge from "@asset/badges/pyro.png";

export default {
    name: "fire2",
    chs: "Pyro Elemental Resonance - Fervent Flames",
    badge,
    genre: "resonance",
    getStandardConfig() {
        return {
            type: "atk-percentage",
            value: 0.25,
        }
    }
}