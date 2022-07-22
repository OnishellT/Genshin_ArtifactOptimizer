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
                :data="kaiyaA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="kaiyaA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="kaiyaA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-ice
                :data="kaiyaE.e"
            ></common-table-ice>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-ice
                :data="kaiyaQ.q"
            ></common-table-ice>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import kaiyaA from "./kaiya_a";
import kaiyaE from "./kaiya_e";
import kaiyaQ from "./kaiya_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableIce from "../../../CommonTableIce";

export default {
    name: "Kaiya.calculator",
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
        kaiyaA() {
            return kaiyaA(this.artifacts, this.configObject, this.enemy);
        },

        kaiyaE() {
            return kaiyaE(this.artifacts, this.configObject, this.enemy);
        },

        kaiyaQ() {
            return kaiyaQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>