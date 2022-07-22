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
                v-model="config.afterE"
                active-text="After Guide to Afterlife: "
                class="mb-16"
            ></el-switch>

            <div v-if="config.afterE">
                <common-table-fire
                    :data="hutaoA.a"
                    class="mb-16"
                ></common-table-fire>
                <common-table-fire
                    :data="hutaoA.b"
                    class="mb-16"
                ></common-table-fire>
                <common-table-fire
                    :data="hutaoA.air"
                ></common-table-fire>
            </div>
            <div v-else>
                <common-table-physical
                    :data="hutaoA.a"
                    class="mb-16"
                ></common-table-physical>
                <common-table-physical
                    :data="hutaoA.b"
                    class="mb-16"
                ></common-table-physical>
                <common-table-physical
                    :data="hutaoA.air"
                ></common-table-physical>
            </div>
        </div>

        <div v-show="showSkill === 'e'">
            <el-switch
                v-model="config.afterE"
                active-text="After Guide to Afterlife: "
                class="mb-16"
            ></el-switch>
            <common-table-fire
                :data="hutaoE.e"
            ></common-table-fire>
            <p class="single-item">Guide to Afterlife ATK Boost: {{ hutaoE.atkBonus }}</p>
        </div>

        <div v-show="showSkill === 'q'">
            <el-switch
                v-model="config.afterE"
                active-text="After Guide to Afterlife:"
                class="mb-16"
            ></el-switch>
            <common-table-fire
                :data="hutaoQ.q"
            ></common-table-fire>
            <p class="single-item">Healing: {{ hutaoQ.cure1 }}</p>
            <p class="single-item">Low HP Healing：{{ hutaoQ.cure2 }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import hutaoA from "./hutao_a";
import hutaoE from "./hutao_e";
import hutaoQ from "./hutao_q";
import CommonTableFire from '../../../CommonTableFire.vue';
import CommonTablePhysical from "../../../CommonTablePhysical";


export default {
    name: "Hutao.calculator",
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
            config: {
                afterE: false,
            }
        }
    },
    computed: {
        hutaoA() {
            return hutaoA(this.artifacts, this.configObject, this.enemy, this.config);
        },

        hutaoE() {
            return hutaoE(this.artifacts, this.configObject, this.enemy, this.config);
        },

        hutaoQ() {
            return hutaoQ(this.artifacts, this.configObject, this.enemy, this.config);
        },
    }
}
</script>