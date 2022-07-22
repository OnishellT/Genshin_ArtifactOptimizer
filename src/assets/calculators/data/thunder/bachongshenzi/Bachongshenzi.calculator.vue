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
                <common-table-thunder
                    :data="bachongshenziA.a"
                    class="mb-16"
                ></common-table-thunder>
                <common-table-thunder
                    :data="bachongshenziA.b"
                    class="mb-16"
                ></common-table-thunder>
                <common-table-thunder
                    :data="bachongshenziA.air"
                ></common-table-thunder>
            </div>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-thunder
                :data="bachongshenziE.e"
            ></common-table-thunder>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-thunder
                :data="bachongshenziQ.q"
            ></common-table-thunder>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import bachongshenziA from "./bachongshenzi_a";
import bachongshenziE from "./bachongshenzi_e";
import bachongshenziQ from "./bachongshenzi_q";

// import CommonTablePhysical from "../../../CommonTablePhysical";
// import CommonTableRock from "../../../CommonTableRock";
import CommonTableThunder from "@asset/calculators/CommonTableThunder";

export default {
    name: "Bachongshenzi.calculator",
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
                afterQ: false,
            }
        }
    },
    computed: {
        bachongshenziA() {
            return bachongshenziA(this.artifacts, this.configObject, this.enemy, this.config);
        },

        bachongshenziE() {
            return bachongshenziE(this.artifacts, this.configObject, this.enemy, this.config);
        },

        bachongshenziQ() {
            return bachongshenziQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>