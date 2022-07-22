<template>
    <div>
        <el-radio-group
            v-model="showSkill"
            size="large"
            style="margin: 16px 0"
        >
            <el-radio-button label="a">Normal Attack</el-radio-button>
            <el-radio-button label="e">Elemental Skill</el-radio-button>
            <el-radio-button label="q">Elemental Burst</el-radio-button>
        </el-radio-group>

        <div v-show="showSkill === 'a'">
            <common-table-physical
                :data="qinA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="qinA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="qinA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-wind
                :data="qinE"
            ></common-table-wind>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-wind
                :data="qinQ.q"
            ></common-table-wind>
            <p class="single-item">Field Activations Healing: {{ qinQ.cure1 }}</p>
            <p class="single-item">Continous Healing: {{ qinQ.cure2 }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import qinA from "./qin_a";
import qinE from "./qin_e";
import qinQ from "./qin_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableWind from "../../../CommonTableWind";

export default {
    name: "Qin.calculator",
    components: {
        CommonTablePhysical,
        CommonTableWind,
    },
    props: {
        enemy: {
            type: Object,
            default: function () {
                return new Enemy("hilichurl", 90);
            }
        },
        configObject: {
            type: Object,
        },
        artifacts: {
            type: Object,
        }
    },
    data() {
        return {
            showSkill: "a",
        }
    },
    computed: {
        qinA() {
            return qinA(this.artifacts, this.configObject, this.enemy);
        },

        qinE() {
            return qinE(this.artifacts, this.configObject, this.enemy);
        },

        qinQ() {
            return qinQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>