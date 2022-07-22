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
                :data="qiqiA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="qiqiA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="qiqiA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-ice
                :data="qiqiE.e"
            ></common-table-ice>
            <p class="single-item">Regeneration on Hit: {{ qiqiE.cure1 }}</p>
            <p class="single-item">Continous Regeneration: {{ qiqiE.cure2 }}</p>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-ice
                :data="qiqiQ.q"
            ></common-table-ice>
            <p class="single-item">Healing ：{{ qiqiQ.cure }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import qiqiA from "./qiqi_a";
import qiqiE from "./qiqi_e";
import qiqiQ from "./qiqi_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableIce from "../../../CommonTableIce";

export default {
    name: "Qiqi.calculator",
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
        qiqiA() {
            return qiqiA(this.artifacts, this.configObject, this.enemy);
        },

        qiqiE() {
            return qiqiE(this.artifacts, this.configObject, this.enemy);
        },

        qiqiQ() {
            return qiqiQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>