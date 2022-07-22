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
                :data="shenheA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="shenheA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="shenheA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-ice
                :data="shenheE.e"
            ></common-table-ice>
            <p class="single-item">Damage Bonus: {{ shenheE.bonus }}</p>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-ice
                :data="shenheQ.q"
            ></common-table-ice>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import shenheA from "./shenhe_a";
import shenheE from "./shenhe_e";
import shenheQ from "./shenhe_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableIce from "../../../CommonTableIce";

export default {
    name: "shenhe.calculator",
    components: {
        CommonTablePhysical,
        CommonTableIce
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
        shenheA() {
            return shenheA(this.artifacts, this.configObject, this.enemy);
        },

        shenheE() {
            return shenheE(this.artifacts, this.configObject, this.enemy);
        },

        shenheQ() {
            return shenheQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>