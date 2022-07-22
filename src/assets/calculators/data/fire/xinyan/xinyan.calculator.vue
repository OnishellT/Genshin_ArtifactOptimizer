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
                :data="xinyanA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="xinyanA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="xinyanA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-fire
                :data="xinyanE.e"
            ></common-table-fire>

            <p class="single-item">
                Shield Level 1 Damage Absorption: {{ xinyanE.shield1 }}
            </p>
            <p class="single-item">
                Shield Level 2 Damage Absorption:{{ xinyanE.shield2 }}
            </p>
            <p class="single-item">
                Shield Level 3 Damage Absorption:{{ xinyanE.shield3 }}
            </p>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-physical
                :data="xinyanQ.physical"
                style="margin-bottom: 16px"
            ></common-table-physical>
            <common-table-fire
                :data="xinyanQ.fire"
            ></common-table-fire>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import xinyanA from "./xinyan_a";
import xinyanE from "./xinyan_e";
import xinyanQ from "./xinyan_q";

import CommonTableFire from "../../../CommonTableFire";
import CommonTablePhysical from "../../../CommonTablePhysical";

export default {
    name: "Xinyan.calculator",
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
        xinyanA() {
            return xinyanA(this.artifacts, this.configObject, this.enemy);
        },

        xinyanE() {
            return xinyanE(this.artifacts, this.configObject, this.enemy);
        },

        xinyanQ() {
            return xinyanQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>