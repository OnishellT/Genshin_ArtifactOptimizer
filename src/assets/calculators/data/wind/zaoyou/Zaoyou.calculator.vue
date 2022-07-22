<template>
    <div>
        <!-- <common-table-transformative

        ></common-table-transformative> -->

        <el-radio-group
            v-model="showSkill"
            size="large"
            style="margin: 16px 0"
        >
            <el-radio-button label="a">Normal Attack </el-radio-button>
            <el-radio-button label="e">Elelmental Skill </el-radio-button>
            <el-radio-button label="q">Elemental Burst </el-radio-button>
        </el-radio-group>

        <div v-show="showSkill === 'a'">
            <common-table-physical
                :data="zaoyouA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="zaoyouA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="zaoyouA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-wind
                :data="zaoyouE.e"
            ></common-table-wind>
            <el-radio-group
                v-model="element"
                size="large"
                style="margin: 16px 0"
            >
                <el-radio-button label="water">Hydro</el-radio-button>
                <el-radio-button label="fire">Pyro</el-radio-button>
                <el-radio-button label="thunder">Electro</el-radio-button>
                <el-radio-button label="ice">Cryo</el-radio-button>
            </el-radio-group>

            <common-table-water :data="zaoyouE.water" v-show="element === 'water'"></common-table-water>
            <common-table-fire :data="zaoyouE.fire" v-show="element === 'fire'"></common-table-fire>
            <common-table-thunder :data="zaoyouE.thunder" v-show="element === 'thunder'"></common-table-thunder>
            <common-table-ice :data="zaoyouE.ice" v-show="element === 'ice'"></common-table-ice>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-wind
                :data="zaoyouQ.q"
            ></common-table-wind>
            <p class="single-item">Q Activation Healing Amount ：{{ zaoyouQ.heal1 }}</p>
            <p class="single-item">Q Muji-Muji Daruma Healing Amount：{{ zaoyouQ.heal2 }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import zaoyouA from "./zaoyou_a";
import zaoyouE from "./zaoyou_e";
import zaoyouQ from "./zaoyou_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableWind from "../../../CommonTableWind";
import CommonTableWater from "../../../CommonTableWater";
import CommonTableThunder from "../../../CommonTableThunder";
import CommonTableIce from "../../../CommonTableIce";
import CommonTableFire from "../../../CommonTableFire";
// import CommonTableTransformative from "../../../CommonTransformative";

export default {
    name: "Zaoyou.calculator",
    components: {
        CommonTablePhysical,
        CommonTableWind,
        CommonTableWater,
        CommonTableThunder,
        CommonTableIce,
        CommonTableFire,
        // CommonTableTransformative,
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
            element: "water",
        }
    },
    computed: {
        zaoyouA() {
            return zaoyouA(this.artifacts, this.configObject, this.enemy);
        },

        zaoyouE() {
            return zaoyouE(this.artifacts, this.configObject, this.enemy);
        },

        zaoyouQ() {
            return zaoyouQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>