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
                :data="xiaogongA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="xiaogongA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-fire
                :data="xiaogongA.b2"
                class="mb-16"
            ></common-table-fire>
            <common-table-physical
                :data="xiaogongA.air"
            ></common-table-physical>
        </div>

        <common-table-fire
            v-show="showSkill === 'e'"
            :data="xiaogongE.e"
        ></common-table-fire>

        <common-table-fire
            v-show="showSkill === 'q'"
            :data="xiaogongQ.q"
        ></common-table-fire>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import xiaogongA from "./xiaogong_a";
import xiaogongE from "./xiaogong_e";
import xiaogongQ from "./xiaogong_q";

import CommonTableFire from "../../../CommonTableFire";
import CommonTablePhysical from "../../../CommonTablePhysical";

export default {
    name: "Xiaogong.calculator",
    components: {
        CommonTableFire,
        CommonTablePhysical,
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
        xiaogongA() {
            return xiaogongA(this.artifacts, this.configObject, this.enemy);
        },

        xiaogongE() {
            return xiaogongE(this.artifacts, this.configObject, this.enemy);
        },

        xiaogongQ() {
            return xiaogongQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>