<template>
    <div>
        <div class="buff-config-item">
            <h3 class="buff-config-title">Elemental Skill Level</h3>
            <el-input-number
                :min="1"
                :max="13"
                size="small"
                v-model="skill2Level"
            ></el-input-number>
        </div>
        <div class="buff-config-item">
            <h3 class="buff-config-title">Maximum Energy Recharge BUFF</h3>
            <el-input-number
                :min="40"
                :max="90"
                size="small"
                v-model="energy"
            ></el-input-number>
        </div>
    </div>
</template>

<script>
import { charactersData } from "@asset/characters";

let skill = charactersData["leidianjiangjun"].skill;

export default {
    name: "leidianjiangjun.buffcfg",
    components: {
    },
    data: function () {
        return {
            skill2Level: 6,
            energy: 80,
        }
    },
    methods: {
        getStandardConfig() {
            let bonusPer = skill.e.bonus[this.skill2Level - 1];
            let bonus = bonusPer * this.energy;
            return {
                type: "qBonus",
                value: bonus,
            }
        },

        getBuff() {
            return {
                name: "leidianjiangjun",
                args: {
                    skill2Level: this.skill2Level,
                    energy: this.energy,
                }
            }
        },

        setBuff(buff) {
            this.skill2Level = buff.skill2Level ?? 6;
            this.energy = buff.energy ?? 80;
        }
    }
}
</script>