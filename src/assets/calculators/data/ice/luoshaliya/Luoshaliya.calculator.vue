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
                :data="luoshaliyaA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="luoshaliyaA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="luoshaliyaA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-ice
                :data="luoshaliyaE.e"
            ></common-table-ice>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-ice
                :data="luoshaliyaQ.q"
            ></common-table-ice>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import luoshaliyaA from "./luoshaliya_a";
import luoshaliyaE from "./luoshaliya_e";
import luoshaliyaQ from "./luoshaliya_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableIce from "../../../CommonTableIce";

export default {
    name: "Luoshaliya.calculator",
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
        luoshaliyaA() {
            return luoshaliyaA(this.artifacts, this.configObject, this.enemy);
        },

        luoshaliyaE() {
            return luoshaliyaE(this.artifacts, this.configObject, this.enemy);
        },

        luoshaliyaQ() {
            return luoshaliyaQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>