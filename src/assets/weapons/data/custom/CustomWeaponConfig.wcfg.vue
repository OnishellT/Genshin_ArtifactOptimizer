<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Base ATK</h3>
            <el-input
                size="small"
                v-model="baseAtk"
            ></el-input>
        </div>
        <div class="config-item">
            <h3 class="config-title">Secondary Attributes</h3>
            <div class="buff-config-item">
                <h3 class="buff-config-title">ATK%</h3>
                <input-with-append
                    v-model="attackPencentage"
                ></input-with-append>
            </div>
            <div class="buff-config-item">
                <h3 class="buff-config-title">HP%</h3>
                <input-with-append
                    v-model="lifePercentage"
                ></input-with-append>
            </div>
            <div class="buff-config-item">
                <h3 class="buff-config-title">DEF%</h3>
                <input-with-append
                    v-model="defendPercentage"
                ></input-with-append>
            </div>
            <div class="buff-config-item">
                <h3 class="buff-config-title">Crit Rate</h3>
                <input-with-append
                    v-model="critical"
                ></input-with-append>
            </div>
            <div class="buff-config-item">
                <h3 class="buff-config-title">Crit Damage</h3>
                <input-with-append
                    v-model="criticalDamage"
                ></input-with-append>
            </div>
            <div class="buff-config-item">
                <h3 class="buff-config-title">Elemental Mastery</h3>
                <el-input
                    size="small"
                    v-model="elementalMastery"
                ></el-input>
            </div>
            <div class="buff-config-item">
                <h3 class="buff-config-title">Physical Damage Bonus</h3>
                <input-with-append
                    v-model="physicalBonus"
                ></input-with-append>
            </div>
        </div>
    </div>
</template>

<script>
import InputWithAppend from "@c/InputWithAppend";

export default {
    name: "CustomWeapon.wcfg",
    components: {
        InputWithAppend,
    },
    data() {
        return {
            baseAtk: "600",

            attackPencentage: "0",
            lifePercentage: "0",
            defendPercentage: "0",
            critical: "0",
            criticalDamage: "0",
            elementalMastery: "0",
            physicalBonus: "0",
        }
    },
    methods: {
        setData(d) {
            this.baseAtk = (d.baseAtk ?? 600).toString();

            for (let item of (d.secondary ?? [])) {
                if (Object.prototype.hasOwnProperty.call(this.$data, item.name)) {
                    let value = item.value;
                    if (item.name !== "elementalMastery") {
                        value *= 100;
                    }
                    this.$data[item.name] = value.toString();
                }
            }
        },

        compact() {
            let temp = [];

            let attackPencentage = (parseFloat(this.attackPencentage) ?? 0) / 100;
            let lifePercentage = (parseFloat(this.lifePercentage) ?? 0) / 100;
            let defendPercentage = (parseFloat(this.defendPercentage) ?? 0) / 100;
            let critical = (parseFloat(this.critical) ?? 0) / 100;
            let criticalDamage = (parseFloat(this.criticalDamage) ?? 0) / 100;
            let elementalMastery = parseFloat(this.elementalMastery) ?? 0;
            let physicalBonus = (parseFloat(this.physicalBonus) ?? 0) / 100;

            if (attackPencentage > 0) {
                temp.push({
                    name: "attackPercentage",
                    value: attackPencentage,
                });
            }
            if (lifePercentage > 0) {
                temp.push({
                    name: "lifePercentage",
                    value: lifePercentage,
                });
            }
            if (defendPercentage > 0) {
                temp.push({
                    name: "defendPercentage",
                    value: defendPercentage,
                })
            }
            if (critical > 0) {
                temp.push({
                    name: "critical",
                    value: critical,
                });
            }
            if (criticalDamage > 0) {
                temp.push({
                    name: "criticalDamage",
                    value: criticalDamage,
                });
            }
            if (elementalMastery > 0) {
                temp.push({
                    name: "elementalMastery",
                    value: elementalMastery,
                });
            }
            if (physicalBonus > 0) {
                temp.push({
                    name: "physicalBonus",
                    value: physicalBonus,
                });
            }

            return {
                baseAtk: parseFloat(this.baseAtk) ?? 600,
                secondary: temp,
            }
        }
    }
}
</script>