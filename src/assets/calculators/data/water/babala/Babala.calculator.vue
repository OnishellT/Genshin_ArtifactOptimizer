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
            <common-table-water
                :data="babalaA.a"
                class="mb-16"
            ></common-table-water>
            <common-table-water
                :data="babalaA.b"
                class="mb-16"
            ></common-table-water>
            <common-table-water
                :data="babalaA.air"
            ></common-table-water>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-water
                :data="babalaE.e"
            ></common-table-water>
            <p class="single-item">HP Regeneration Per Hit：{{ babalaE.cure1 }}</p>
            <p class="single-item">Continous Regeneration: {{ babalaE.cure2 }}</p>
        </div>

        <div v-show="showSkill === 'q'">
            <p class="single-item">Healing：{{ babalaQ.cure }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import babalaA from "./babala_a";
import babalaE from "./babala_e";
import babalaQ from "./babala_q";

import CommonTableWater from "../../../CommonTableWater";

export default {
    name: "Babala.calculator",
    components: {
        CommonTableWater,
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
            config: {
                afterE: false,
            }
        }
    },
    computed: {
        babalaA() {
            return babalaA(this.artifacts, this.configObject, this.enemy);
        },

        babalaE() {
            return babalaE(this.artifacts, this.configObject, this.enemy);
        },

        babalaQ() {
            return babalaQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>