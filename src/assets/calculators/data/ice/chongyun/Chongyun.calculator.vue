<template>
    <div>
        <el-radio-group
            v-model="showSkill"
            size="large"
            style="margin: 16px 0"
        >
            <el-radio-button label="a">Normal Attack</el-radio-button>
            <el-radio-button label="e">Elemetal Skill</el-radio-button>
            <el-radio-button label="q">Elemental Burst</el-radio-button>
        </el-radio-group>

        <div v-show="showSkill === 'a'">
            <common-table-physical
                :data="chongyunA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="chongyunA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="chongyunA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-ice
                :data="chongyunE.e"
            ></common-table-ice>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-ice
                :data="chongyunQ.q"
            ></common-table-ice>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import chongyunA from "./chongyun_a";
import chongyunE from "./chongyun_e";
import chongyunQ from "./chongyun_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableIce from "../../../CommonTableIce";

export default {
    name: "Chongyun.calculator",
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
        chongyunA() {
            return chongyunA(this.artifacts, this.configObject, this.enemy);
        },

        chongyunE() {
            return chongyunE(this.artifacts, this.configObject, this.enemy);
        },

        chongyunQ() {
            return chongyunQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>