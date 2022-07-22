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
            <div class="buff-config-item">
                <h3 class="buff-config-title">Ceremonial Garment Active</h3>
                <el-switch
                    active-text="Yes"
                    v-model="configA.afterQ"
                ></el-switch>
            </div>

            <common-table-water
                :data="shanhugongxinhaiA.a"
                class="mb-16"
            ></common-table-water>
            <common-table-water
                :data="shanhugongxinhaiA.b"
                class="mb-16"
            ></common-table-water>
            <common-table-water
                :data="shanhugongxinhaiA.air"
            ></common-table-water>
        </div>

        <div v-show="showSkill === 'e'">
            <div class="buff-config-item">
                <h3 class="buff-config-title">Ceremonial Garment Active</h3>
                <el-switch
                    active-text="Yes"
                    v-model="configE.afterQ"
                ></el-switch>
            </div>

            <common-table-water
                :data="shanhugongxinhaiE.e"
            ></common-table-water>
            <p class="single-item">Elemental Skill Healing: {{ shanhugongxinhaiE.heal.toFixed(2) }}</p>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-water
                :data="shanhugongxinhaiQ.q"
            ></common-table-water>
            <p class="single-item">Elemental Burst Healing: {{ shanhugongxinhaiQ.heal }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import shanhugongxinhaiA from "./shanhugongxinhai_a";
import shanhugongxinhaiE from "./shanhugongxinhai_e";
import shanhugongxinhaiQ from "./shanhugongxinhai_q";

import CommonTableWater from "../../../CommonTableWater";

export default {
    name: "Shanhugongxinhai.calculator",
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
            configA: {
                afterQ: false,
            },
            configE: {
                afterQ: false,
            }
        }
    },
    computed: {
        shanhugongxinhaiA() {
            return shanhugongxinhaiA(this.artifacts, this.configObject, this.enemy, this.configA);
        },

        shanhugongxinhaiE() {
            return shanhugongxinhaiE(this.artifacts, this.configObject, this.enemy, this.configE);
        },

        shanhugongxinhaiQ() {
            return shanhugongxinhaiQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>