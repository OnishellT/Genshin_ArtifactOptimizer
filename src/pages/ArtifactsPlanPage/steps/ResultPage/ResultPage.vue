<template>
    <div>
        <save-as-kumi-dialog
            :visible.sync="showSaveAsKumiDialog"
            @confirm="handleConfirmSavaAsKumi"
        ></save-as-kumi-dialog>

        <div v-if="calculating">
            Calculating
        </div>
        <div v-else-if="!calculating && !error.isError">
            <el-dialog
                :visible.sync="showArtifactsAnalysis"
                title="Artifacts Analysis"
                width="80%"
            >
                <artifacts-set-statistics
                    :artifacts="artifacts"
                ></artifacts-set-statistics>
            </el-dialog>

            <el-dialog
                :visible.sync="showAttributeAnalysis"
                title="Panel Analysis"
                width="80%"
            >
                <attribute-statistics
                    :attribute="currentRecord.attribute"
                    :config="configObject"
                    :arts="currentRecord.combo"
                    :howMuchBonusPerTag="currentRecord.howMuchBonusPerTag"
                ></attribute-statistics>
            </el-dialog>

            <div class="toolbar" style="margin-bottom: 16px">
                <el-button
                    size="small"
                    @click="showArtifactsAnalysis = true"
                >View Artifacts Analysis</el-button>
                <el-button
                    size="small"
                    @click="showAttributeAnalysis = true"
                >View Attributes Analysis</el-button>
            </div>

            <div style="margin-bottom: 16px">
                <el-radio-group v-model="recordIndex" size="large">
                    <el-radio-button :label="0" v-if="recordCount > 0">
                        <font-awesome-icon
                            :icon="['fas', 'crown']"
                            class="icon"
                            style="color: gold"
                        ></font-awesome-icon>
                        1st Place
                    </el-radio-button>
                    <el-radio-button :label="1" v-if="recordCount > 1">
                        <font-awesome-icon
                            :icon="['fas', 'crown']"
                            class="icon"
                            style="color: silver"
                        ></font-awesome-icon>
                        2nd Place
                    </el-radio-button>
                    <el-radio-button :label="2" v-if="recordCount > 2">
                        <font-awesome-icon
                            :icon="['fas', 'crown']"
                            class="icon"
                            style="color: brown"
                        ></font-awesome-icon>
                        3rd Place
                    </el-radio-button>
                    <el-radio-button :label="3" v-if="recordCount > 3">
                        4th Place
                    </el-radio-button>
                    <el-radio-button :label="4" v-if="recordCount > 4">
                        5th Place
                    </el-radio-button>
                </el-radio-group>
            </div>

            <el-row :gutter="16">
                <el-col :span="18">
                    <el-alert
                        title="Since the battle system of Genshin Impact is complicated and there are many buff systems, the calculation results are for reference only."
                        :closable="false"
                         type="warning"
                    ></el-alert>

                    <h3 style="color: white" class="title">Best Match</h3>
                    <div class="artifact-div">
                        <artifact-display
                            v-for="(art, index) in artifacts"
                            :key="art.id"
                            :buttons="!artifactsDeleted[index]"
                            :item="art"
                            class="artifact"
                            @toggle="toggle(art.id)"
                        ></artifact-display>
                    </div>
                    <div>
                        <el-button size="small" @click="handleSaveAsNewKumi">Save as Artifact Set</el-button>
                        <el-button size="small" @click="handleToggleAll">{{ isAllDisabled ? "Unlock" : "Lock" }} Selected Artifacts</el-button>
                    </div>

                    <h3 style="color: white" class="title">Output</h3>
                    <el-alert
                        title="The maximum value of different objective functions cannot be compared with each other; the maximum value of the output type is not the final expected damage, so it is for reference only."
                        type="warning"
                        :closable="false"
                        style="margin-bottom: 12px"
                    ></el-alert>

                    <ul>
                        <li
                            v-for="(history, index) in historyValue"
                            :key="index"
                            class="history-entry fs-12"
                        >
                            {{ index === 0 ? "Current：" : "History: " + index + "：" }}
                            {{ history[recordIndex].formatted || history[recordIndex].toFixed(3) }}
                        </li>
                    </ul>
                    <!-- <p class="max-value">{{ currentRecord.value.toFixed(3) }}</p> -->
                </el-col>
                <el-col :span="6">
                    <attribute-panel
                        :panel="currentRecord.attribute"
                        v-if="!calculating"
                    ></attribute-panel>
                </el-col>
            </el-row>
        </div>
        <div v-else-if="!calculating && error.isError">
            <span v-if="isNoArtifactError">
                <el-alert
                    :title="error.reason"
                    :closable="false"
                    type="warning"
                ></el-alert>
            </span>
            <span v-else>
                {{ error.reason }}
            </span>
        </div>
    </div>
</template>

<script>
import ArtifactDisplay from "@c/ArtifactDisplay";
import AttributePanel from "@c/AttributePanel";
import ArtifactsSetStatistics from "@c/display/ArtifactsSetStatistics";
import AttributeStatistics from "@c/display/AttributeStatistics";
import SaveAsKumiDialog from "./SaveAsKumiDialog";

import compute from "@alg/attribute_target/compute_artifacts_promise";
import timer from "@util/timer";
import positions from "@const/positions";
import deepCopy from "@util/deepcopy";

import targetFunctionsData from "@asset/target_functions/data";

const HISTORY_MAX_ENTRY = 5;

export default {
    name: "ResultPage",
    components: {
        ArtifactDisplay,
        AttributePanel,
        ArtifactsSetStatistics,
        AttributeStatistics,
        SaveAsKumiDialog,
    },
    data: function () {
        return {
            resultRecord: [],
            error: {},
            configObject:null,
            calculating: true,
            recordIndex: 0,

            historyValue: [],

            showAttributeAnalysis: false,
            showArtifactsAnalysis: false,

            showSaveAsKumiDialog: false,
        }
    },
    methods: {
        handleToggleAll() {
            let op;
            if (this.isAllDisabled) {
                op = id => this.$store.commit("artifacts/enableArtifactById", { id });
            } else {
                op = id => this.$store.commit("artifacts/disableArtifactById", { id });
            }

            for (let i = 0, l = this.notDeletedArtifacts.length; i < l; i++) {
                let art = this.notDeletedArtifacts[i];
                op(art.id);
            }
        },

        handleConfirmSavaAsKumi({ dirId, name }) {
            this.showSaveAsKumiDialog = false;

            let ids = this.artifacts.map(item => item.id);
            this.$store.commit("kumi/newKumi", {
                ids,
                label: name,
                under: dirId
            });
        },

        pushHistory(values) {
            if (this.historyValue.length === HISTORY_MAX_ENTRY) {
                this.historyValue.pop();
            }

            this.historyValue.splice(0, 0, values);
        },

        toggle(id) {
            this.$store.commit("artifacts/toggleById", { id });
        },

        disableArtifacts() {
            for (let i = 0; i < this.artifacts.length; i++) {
                if (!this.artifactsDeleted[i]) {
                    let id = this.artifacts[i].id;
                    this.$store.commit("artifacts/disableArtifactById", { id });
                }
            }
            // this.$message("操作成功");
        },

        handleSaveAsNewKumi() {
            this.showSaveAsKumiDialog = true;
        },

        convertTArgs(name, args) {
            let data = targetFunctionsData[name];
            if (data && data.config && data.config.compact) {
                return data.config.compact(args);
            }
            return args;
        },

        /**
         * return an object representing all not omited artifacts
         */
        getArtifacts(configObject) {
            let excludedIds = configObject.excludedIds;
            let fil = item => !excludedIds.has(item.id);

            let temp = deepCopy(this.$store.getters["artifacts/notOmittedArtifacts"]);

            for (let pos of positions) {
                temp[pos] = temp[pos].filter(fil);
            }

            return temp;
        },

        doCompute(artifacts, veryBigConfigObject) {
            // let character = veryBigConfigObject.character;
            // let weapon = veryBigConfigObject.weapon;
            // let constraint = veryBigConfigObject.constraint;
            // let targetFunc = veryBigConfigObject.targetFunc;
            // let buffs = veryBigConfigObject.buffs;
            // let artifactsConfig = veryBigConfigObject.artifactsConfig;
            // console.log(weapon);

            let loading = this.$loading({
                lock: true,
                text: "Calculating ",
                background: "rgba(0, 0, 0, 0.7)",
            });
            this.calculating = true;

            // this is a web worker wrapped by a promise
            this.configObject = veryBigConfigObject;
            let promise = compute(
                artifacts,
                veryBigConfigObject
            ).then(({ record, error }) => {
                this.error = error;
                if (!error.isError) {
                    this.resultRecord = record;
                    this.pushHistory(record.map(item => item.value));
                }

                loading.close();
                this.calculating = false;
            }).catch(reason => {
                this.error = {
                    isError: true,
                    reason: "An error occurred during calculation:" + reason
                };
                loading.close();
                this.calculating = false;
            });

            // record time
            timer(promise).then(time => {
                console.log(`complete after ${time}ms`);
            });
        },

        getResultArtifacts() {
            if (this.calculating) {
                return {
                    error: true,
                    data: "calculating",
                }
            }
            return {
                error: false,
                data: this.artifacts
            };
        }
    },
    computed: {
        // result artifacts may contain null or undefined(which represents not putting on anything in this slot
        filteredArtifacts() {
            return this.currentRecord.combo.filter(item => !!item);
        },

        // artifacts Ids
        artifactsId() {
            return this.filteredArtifacts.map(item => item.id);
        },

        // whether an artifact is deleted
        artifactsDeleted() {
            let temp = [];

            let map = this.$store.getters["artifacts/artifactsById"];

            for (let i = 0; i < this.artifactsId.length; i++) {
                temp.push(!map[this.artifactsId[i]]);
            }

            return temp;
        },

        // artifacts to display
        artifacts() {
            let temp = [];
            let map = this.$store.getters["artifacts/artifactsById"];

            for (let i = 0, l = this.filteredArtifacts.length; i < l; i++) {
                let id = this.filteredArtifacts[i].id;

                if (this.artifactsDeleted[i]) {
                    // if the artifact has been deleted
                    temp.push(this.filteredArtifacts[i]);
                } else {
                    temp.push(map[id]);
                }
            }

            return temp;
        },

        notDeletedArtifacts() {
            let temp = [];
            let map = this.$store.getters["artifacts/artifactsById"];

            for (let i = 0, l = this.filteredArtifacts.length; i < l; i++) {
                let id = this.filteredArtifacts[i].id;

                if (!this.artifactsDeleted[i]) {
                    temp.push(map[id]);
                }
            }

            return temp;
        },

        currentRecord() {
            return this.resultRecord[this.recordIndex];
        },

        recordCount() {
            return this.resultRecord.length;
        },

        isNoArtifactError() {
            return this.error.isError && this.error.code === 1000;
        },

        isAllDisabled() {
            for (let art of this.notDeletedArtifacts) {
                if (!art.omit) {
                    return false;
                }
            }

            return true;
        }
    }
}
</script>

<style scoped>
ul {
    padding: 0;
}

.history-entry {
    list-style: none;
    padding: 4px;
    background: #00000005;
    color: #ff9966;
    border-bottom: 1px solid #00000011;
}

.title {
    /* background:rgb(74, 99, 211); */
    padding: 0px 16px;
    display: inline-block;
    color: white; 
    border-radius: 3px;
    font-size: 1.6rem;
    border-bottom: 5px solid rgb(74, 99, 211);
    color: #555555;
}

.artifact-div {
    display: flex;
    flex-wrap: wrap;
}

.artifact {
    margin: 0 16px 16px 0;

}


.max-value {
    padding: 0;
    margin: 0;
    font-size: 1.25rem;
}

.left {
    flex: 1;
    margin-right: 16px;
}
</style>