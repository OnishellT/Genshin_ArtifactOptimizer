<template>
    <div>
        <el-divider>Statistics Graph</el-divider>
        <!-- <el-alert
            type="warning"
            title="此处仅根据攻击力、暴击率、暴击伤害进行计算，仅供参考"
            :closable="false"
        ></el-alert> -->
        <div style="height: 300px">
            <v-chart :option="graphOption"></v-chart>
        </div>
        <p style="text-align: center">{{ analysisText }}</p>

        <div>
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_S > 0"
            >Each ATK Entry Increases：{{ x100(howMuchBonusPerTag["bonus_S"]) }}%</p>
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_p > 0"
            >Each ATK% Entry Increases：{{ x100(howMuchBonusPerTag["bonus_p"]) }}%</p>
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_c > 0"
            >Each Crit Rate Entry Increases：{{ x100(howMuchBonusPerTag["bonus_c"]) }}%</p>
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_D > 0"
            >Each Crit Damage Entry Increases：{{ x100(howMuchBonusPerTag["bonus_D"]) }}%</p>
             <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_hpp > 0"
            >Each HP% entry Entry Increases：{{ x100(howMuchBonusPerTag["bonus_hpp"]) }}%</p>
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_hps > 0"
            >Each HP item Entry Increases：{{ x100(howMuchBonusPerTag["bonus_hps"]) }}%</p>
           
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_em > 0"
            >Each Elemental Mastery Entry Increases：{{ x100(howMuchBonusPerTag["bonus_em"]) }}%</p>
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_dfs > 0"
            >Each DEF Entry Increases：{{ x100(howMuchBonusPerTag["bonus_dfs"]) }}%</p>
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_dfp > 0"
            >Each DEF% Entry Increases：{{ x100(howMuchBonusPerTag["bonus_dfp"]) }}%</p>
            <p
                class="item"
                v-show="howMuchBonusPerTag.bonus_recharge > 0"
            >Each Energy Recharge Entry Increases：{{ x100(howMuchBonusPerTag["bonus_recharge"]) }}%</p>
        </div>
    </div>
</template>

<script>
const bonusMap = {
    "bonus_S": "ATK",
    "bonus_p": "ATK %",
    "bonus_c": "Crit Rate",
    "bonus_D": "Crit Damage",
    "bonus_hpp": "HP%",
    "bonus_hps": "HP",
    "bonus_em": "Elemental Mastery",
    "bonus_dfp": "DEF%",
    "bonus_dfs": "DEF",
    "bonus_recharge": "Energy Recharge",
}

export default {
    name: "AttributeStatistics",
    props: ["attribute", "howMuchBonusPerTag"],
    methods: {
        x100(value) {
            return (value * 100).toFixed(1);
        }
    },
    computed: {
        gradient() {
            let temp = [];
            for (const bonusName in bonusMap) {
                if (Object.prototype.hasOwnProperty.call(this.howMuchBonusPerTag, bonusName) && this.howMuchBonusPerTag[bonusName] > 0) {
                    temp.push([bonusMap[bonusName], this.howMuchBonusPerTag[bonusName]]);
                }
            }

            return temp;
        },

        analysisText() {
            if (this.gradient.length === 0) {
                return "Stat values did not change, or there is a bug";
            }

            let maxIndex = 0;
            for (let i = 1; i < this.gradient.length; i++) {
                if (this.gradient[i][1] > this.gradient[maxIndex][1]) {
                    maxIndex = i;
                }
            }

            return `Stat to priorize：${this.gradient[maxIndex][0]}`;
        },

        graphOption() {
            let data = [];
            // console.log(g);

            for (let entry of this.gradient) {
                data.push({
                    name: entry[0],
                    value: entry[1],
                })
            }

            return {
                tooltip: {
                    trigger: "item"
                },
                series: [
                    {
                        name: "Attributes Graph",
                        type: "pie",
                        // radius: ["40%", "70%"],
                        label: {
                            // show: false
                        },
                        itemStyle: {
                            borderRadius: 5,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        data,
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
.item {
    text-align: center;
    margin: 0;
}
</style>