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
                :data="ganyuA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="ganyuA.b1"
                class="mb-16"
            ></common-table-physical>
            <common-table-ice
                :data="ganyuA.b2"
                class="mb-16"
            ></common-table-ice>
            <common-table-physical
                :data="ganyuA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-ice
                :data="ganyuE.e"
            ></common-table-ice>
            <p class="single-item">Inherit HP: {{ ganyuE.hp }}</p>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-ice
                :data="ganyuQ.q"
            ></common-table-ice>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import ganyuA from "./ganyu_a";
import ganyuE from "./ganyu_e";
import ganyuQ from "./ganyu_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableIce from "../../../CommonTableIce";

export default {
    name: "Ganyu.calculator",
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
        ganyuA() {
            return ganyuA(this.artifacts, this.configObject, this.enemy);
        },

        ganyuE() {
            return ganyuE(this.artifacts, this.configObject, this.enemy);
        },

        ganyuQ() {
            return ganyuQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>