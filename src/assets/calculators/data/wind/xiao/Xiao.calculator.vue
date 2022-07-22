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
                :data="xiaoA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="xiaoA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="xiaoA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-wind
                :data="xiaoE"
            ></common-table-wind>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-wind
                :data="xiaoAAfterQ.a"
                class="mb-16"
            ></common-table-wind>
            <common-table-wind
                :data="xiaoAAfterQ.b"
                class="mb-16"
            ></common-table-wind>
            <common-table-wind
                :data="xiaoAAfterQ.air"
            ></common-table-wind>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import xiaoA from "./xiao_a";
import xiaoE from "./xiao_e";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableWind from "../../../CommonTableWind";

export default {
    name: "Xiao.calculator",
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
        xiaoA() {
            return xiaoA(this.artifacts, this.configObject, this.enemy, { afterQ: false });
        },

        xiaoAAfterQ() {
            return xiaoA(this.artifacts, this.configObject, this.enemy, { afterQ: true });
        },

        xiaoE() {
            return xiaoE(this.artifacts, this.configObject, this.enemy);
        },
    }
}
</script>