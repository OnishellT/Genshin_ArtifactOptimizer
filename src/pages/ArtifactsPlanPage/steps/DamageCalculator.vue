<template>
    <div v-if="configObject !== null">
        <div class="toolbar">
            <el-button
                size="small"
                @click="selectArtifactFromResult"
            >Wearing Calculation Results</el-button>
        </div>

        <el-row :gutter="16">
            <el-col :span="18">
                <h3 class="title3">Choosing an Artifact</h3>
                <select-artifacts
                    :selected="selectedArtifactIds"
                ></select-artifacts>

                <h3 class="title3">Skill Damage</h3>
                <div
                    class="legend"
                    
                >
                    <damage-display :damage="{ crit: 'Critical Damage', nonCrit: 'Non-Critical damage', expect: 'Average Damage' }"></damage-display>
                </div>
                <component
                    :is="calculator"
                    :config-object="configObject"
                    :artifacts="selectedArtifactObjects"
                ></component>

                <h3 class="title3">Amplified Reaction Damage</h3>
                <CommonTableTransformative class="react-table" :data="reactionDamageTable"></CommonTableTransformative>
            </el-col>
            <el-col :span="6">
                <attribute-panel v-if="configObject !== null" :panel="attributePanel"></attribute-panel>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import calculators from "@asset/calculators";
import { getAttribute } from "@util/attribute";
import { tableTransformativeA } from "@asset/calculators/reaction_table";
import Enemy from "@asset/enemies/enemy";

import SelectArtifacts from "@c/select/SelectArtifacts";
import AttributePanel from "@c/AttributePanel";
import DamageDisplay from "@c/display/DamageDisplay";
import CommonTableTransformative from "@asset/calculators/CommonTransformative";


export default {
    name: "DamageCalculator",
    components: {
        SelectArtifacts,
        AttributePanel,
        DamageDisplay,
        CommonTableTransformative
    },
    inject: ["getConfigObject", "getResultPage"],
    data() {
        return {
            configObject: null,

            selectedArtifactIds: {
                flower: null,
                feather: null,
                sand: null,
                cup: null,
                head: null,
            },

            artifactsFilter: () => true,
        }
    },
    methods: {
        // called when this component is displayed
        updateConfigObject() {
            // console.log("on update");
            this.configObject = this.getConfigObject();
        },

        selectArtifactFromResult() {
            let resultPage = this.getResultPage();
            let { error, data } = resultPage.getResultArtifacts();

            if (error) {
                this.$message({
                    type: "warning",
                    message: "Please make a Calculation first",
                });
                return;
            }

            for (let art of data) {
                this.selectedArtifactIds[art.position] = art.id;
            }
            // console.log(data);
        }
    },
    computed: {
        calculator() {
            let cName = this.configObject.character.name;
            let temp = calculators[cName];
            temp = temp ?? calculators["keqing"];

            return temp;
        },

        selectedArtifactObjects() {
            let artifactsById = this.$store.getters["artifacts/artifactsById"];
            let temp = [];
            for (let id of Object.values(this.selectedArtifactIds)) {
                let art = artifactsById[id];
                if (art) {
                    temp.push(art);
                }
            }

            return temp;
        },

        attributePanel() {
            if (this.configObject === null) {
                return {};
            }

            let c = this.configObject.character;
            let w = this.configObject.weapon;
            let buffs = this.configObject.buffs;
            let artifactsConfig = this.configObject.artifactsConfig;
            
            return getAttribute(this.selectedArtifactObjects, c, w, buffs, artifactsConfig);
        },

        reactionDamageTable() {
            let enemy = new Enemy("hilichurl", 90);
            return tableTransformativeA(this.attributePanel, this.configObject, enemy);
        }
    }
}
</script>

<style lang="scss" scoped>
.toolbar {
    margin-bottom: 16px;
}
.title3{
    color: white;
}
.react-table{
    color: #fcba03;
}
.legend{
    color: red;
   
} 
</style>
