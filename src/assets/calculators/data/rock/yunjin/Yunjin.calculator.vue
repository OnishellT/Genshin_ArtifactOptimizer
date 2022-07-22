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
            <div>
                <common-table-physical
                    :data="yunjinA.a"
                    class="mb-16"
                ></common-table-physical>
                <common-table-physical
                    :data="yunjinA.b"
                    class="mb-16"
                ></common-table-physical>
                <common-table-physical
                    :data="yunjinA.air"
                ></common-table-physical>
            </div>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-rock
                :data="yunjinE.e"
            ></common-table-rock>
            <p class="single-item">E Shield: {{ yunjinE.shield }}</p>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-rock
                :data="yunjinQ.q"
            ></common-table-rock>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import yunjinA from "./yunjin_a";
import yunjinE from "./yunjin_e";
import yunjinQ from "./yunjin_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableRock from "../../../CommonTableRock";

export default {
    name: "yunjin.calculator",
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
        }
    },
    computed: {
        yunjinA() {
            return yunjinA(this.artifacts, this.configObject, this.enemy);
        },

        yunjinE() {
            return yunjinE(this.artifacts, this.configObject, this.enemy);
        },

        yunjinQ() {
            return yunjinQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>