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
                :data="leidianjiangjunA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="leidianjiangjunA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="leidianjiangjunA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-thunder
                :data="leidianjiangjunE"
            ></common-table-thunder>
        </div>

        <div v-show="showSkill === 'q'">
            <div class="buff-config-item">
                <h3 class="buff-config-title">Eye of Stormy Judgement Active</h3>
                <el-switch
                    active-text="Yes"
                    inactive-text="No"
                    v-model="afterE"
                ></el-switch>
            </div>
            <div class="buff-config-item">
                <h3 class="buff-config-title">Resolve Stacks</h3>
                <el-slider
                    :min="0"
                    :max="60"
                    show-input
                    input-size="small"
                    :step="1"
                    v-model="qLevel"
                ></el-slider>
            </div>

            <common-table-thunder
                :data="leidianjiangjunQ.q"
            ></common-table-thunder>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import leidianjiangjunA from "./leidianjiangjun_a";
import leidianjiangjunE from "./leidianjiangjun_e";
import leidianjiangjunQ from "./leidianjiangjun_q";

import CommonTableThunder from "../../../CommonTableThunder";
import CommonTablePhysical from "../../../CommonTablePhysical";

export default {
    name: "Leidianjiangjun.calculator",
    components: {
        CommonTableThunder,
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
            
            afterE: false,
            qLevel: 0,
        }
    },
    computed: {
        leidianjiangjunA() {
            return leidianjiangjunA(this.artifacts, this.configObject, this.enemy);
        },

        leidianjiangjunE() {
            return leidianjiangjunE(this.artifacts, this.configObject, this.enemy);
        },

        leidianjiangjunQ() {
            return leidianjiangjunQ(this.artifacts, this.configObject, this.enemy, {
                afterE: this.afterE,
                qLevel: this.qLevel,
            });
        }
    }
}
</script>