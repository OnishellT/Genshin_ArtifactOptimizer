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
            <common-table-thunder
                :data="lishaA.a"
                class="mb-16"
            ></common-table-thunder>
            <common-table-thunder
                :data="lishaA.b"
                class="mb-16"
            ></common-table-thunder>
            <common-table-thunder
                :data="lishaA.air"
            ></common-table-thunder>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-thunder
                :data="lishaE"
            ></common-table-thunder>
        </div>

        <common-table-thunder
            v-show="showSkill === 'q'"
            :data="lishaQ"
        ></common-table-thunder>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import lishaA from "./lisha_a";
import lishaE from "./lisha_e";
import lishaQ from "./lisha_q";

import CommonTableThunder from "../../../CommonTableThunder";

export default {
    name: "Lisha.calculator",
    components: {
        CommonTableThunder,
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
        lishaA() {
            return lishaA(this.artifacts, this.configObject, this.enemy);
        },

        lishaE() {
            return lishaE(this.artifacts, this.configObject, this.enemy);
        },

        lishaQ() {
            return lishaQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>