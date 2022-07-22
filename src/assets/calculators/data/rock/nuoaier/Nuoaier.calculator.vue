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
            <el-switch
                v-model="config.afterQ"
                active-text="After Using Elemental Burst"
                style="margin-bottom: 16px"
            ></el-switch>
            <div v-if="config.afterQ">
                <common-table-rock
                    :data="nuoaierA.a"
                    class="mb-16"
                ></common-table-rock>
                <common-table-rock
                    :data="nuoaierA.b"
                    class="mb-16"
                ></common-table-rock>
                <common-table-rock
                    :data="nuoaierA.air"
                ></common-table-rock>
            </div>
            <div v-else>
                <common-table-physical
                    :data="nuoaierA.a"
                    class="mb-16"
                ></common-table-physical>
                <common-table-physical
                    :data="nuoaierA.b"
                    class="mb-16"
                ></common-table-physical>
                <common-table-physical
                    :data="nuoaierA.air"
                ></common-table-physical>
            </div>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-rock
                :data="nuoaierE.e"
            ></common-table-rock>
            <p class="single-item">Shield Damage Absortion：{{ nuoaierE.shield }}</p>
            <p class="single-item">Healing Value：{{ nuoaierE.cure }}</p>
            <p class="single-item">Healing Trigger Chance：{{ nuoaierE.prob * 100 }}%</p>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-rock
                :data="nuoaierQ.q"
            ></common-table-rock>
            <p class="single-item">Increased ATK：{{ nuoaierQ.atkLift }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import nuoaierA from "./nuoaier_a";
import nuoaierE from "./nuoaier_e";
import nuoaierQ from "./nuoaier_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableRock from "../../../CommonTableRock";

export default {
    name: "Nuoaier.calculator",
    components: {
        CommonTablePhysical,
        CommonTableRock,
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
                afterQ: false,
            }
        }
    },
    computed: {
        nuoaierA() {
            return nuoaierA(this.artifacts, this.configObject, this.enemy, this.config);
        },

        nuoaierE() {
            return nuoaierE(this.artifacts, this.configObject, this.enemy);
        },

        nuoaierQ() {
            return nuoaierQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>