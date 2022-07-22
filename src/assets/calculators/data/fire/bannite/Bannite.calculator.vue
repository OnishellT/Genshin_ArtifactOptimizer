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
                :data="banniteA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="banniteA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="banniteA.air"
            ></common-table-physical>
        </div>

        <common-table-fire
            v-show="showSkill === 'e'"
            :data="banniteE"
        ></common-table-fire>

        <div v-show="showSkill === 'q'">
            <common-table-fire
                :data="banniteQ.q"
            ></common-table-fire>

            <p class="single-item">Healing：{{ banniteQ.cure }}</p>
            <p class="single-item">Attack Bonus：{{ banniteQ.atkBonus }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import banniteA from "./bannite_a";
import banniteE from "./bannite_e";
import banniteQ from "./bannite_q";

import CommonTableFire from "../../../CommonTableFire";
import CommonTablePhysical from "../../../CommonTablePhysical";

export default {
    name: "Bannite.calculator",
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
        banniteA() {
            return banniteA(this.artifacts, this.configObject, this.enemy);
        },

        banniteE() {
            return banniteE(this.artifacts, this.configObject, this.enemy);
        },

        banniteQ() {
            return banniteQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>