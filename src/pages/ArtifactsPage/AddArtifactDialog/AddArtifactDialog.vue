<template>
    <el-dialog
        title="Add Artifact"
        :visible.sync="visible"
        width="80%"
        :before-close="onCancel"
    >
        <h3>Set</h3>
        <choose-artifact-set :value="setName" @input="handleSetNameChange"></choose-artifact-set>

        <h3>Position</h3>
        <choose-artifact-position
            v-model="position"
            :setName="setName"
        ></choose-artifact-position>

        <el-row :gutter="16">
            <el-col :span="12">
                <h3>Rarity</h3>
                <el-rate
                    @input="handleStarChange"
                    :value="star"
                    :max="artifactData.maxStar"
                ></el-rate>
            </el-col>
            <el-col :span="12">
                <div class="flex-row">
                    <h3 style="margin-right: 8px">Level</h3>
                    <el-button icon="el-icon-d-arrow-left" circle size="mini" title="Level 0"
                        @click="level = 0"
                    ></el-button>
                    <el-button icon="el-icon-d-arrow-right" circle size="mini" title="Full Level"
                        @click="level = star * 4"
                    ></el-button>
                </div>
                
                <el-input-number
                    v-model="level"
                    :max="star * 4"
                    :min="0"
                    size="small"
                ></el-input-number>
                
            </el-col>
        </el-row>

        <el-row :gutter="16">
            <el-col :span="12">
                <h3>Main Stat</h3>
                <!-- <choose-main-tag v-model="mainTag" :position="position"></choose-main-tag> -->
                <select-artifact-main-tag
                    :value="mainTag"
                    :position="position"
                    @input="handleMainTagChange"
                ></select-artifact-main-tag>
            </el-col>
            <el-col :span="12">
                <div class="flex-row">
                    <h3 style="margin-right: 8px">Secondary Stats</h3>
                    <el-button
                        icon="el-icon-refresh"
                        circle
                        size="mini"
                        @click="shuffleNormalTags"
                        title="Random"
                    ></el-button>
                    <el-button
                        icon="el-icon-question"
                        circle
                        style="padding: 0"
                        title="Help"
                        type="text"
                        @click="openHelp"
                    ></el-button>
                </div>
                
                <select-artifact-normal-tag v-model="normalTags"></select-artifact-normal-tag>
            </el-col>
        </el-row>

        <template #footer>
            <el-button @click="onCancel">Cancel</el-button>
            <el-button type="primary" @click="onConfirm">Save</el-button>
        </template>
    </el-dialog>
</template>

<script>
import ChooseArtifactSet from "./ChooseArtifactSet";
import ChooseArtifactPosition from "./ChooseArtifactPosition";
// import ChooseMainTag from "./ChooseMainTag";
// import ChooseNormalTag from "./ChooseNormalTag";
import SelectArtifactNormalTag from "@c/SelectArtifactNormalTag";
import SelectArtifactMainTag from "@c/SelectArtifactMainTag";

import { getDetailName, getArtifactRealValue } from "@util/utils";
import randomNormalTag from "@/artifacts_numeric/random_normal_tag";
import { convertDisplayTagValue } from '@util/utils';
import isArtifactUnique from "@util/isArtifactUnique";
import { artifactsData } from "@asset/artifacts";
import { secondaryTags } from "@asset/tags";

function convertPercentage(item) {
    item.value = getArtifactRealValue(item.name, item.value);

    return item;
}


export default {
    name: "NewDialog",
    provide() {
        return {
            star: this.star,
        }
    },
    components: {
        ChooseArtifactSet,
        ChooseArtifactPosition,
        SelectArtifactNormalTag,
        SelectArtifactMainTag,
    },
    props: {
        visible: {
            type: Boolean
        }
    },
    data: function() {
        return {
            // 套装名
            setName: "archaicPetra",
            // 位置名
            position: "flower",
            // 主属性名
            mainTag: {
                name: "lifeStatic",
                value: "4780",
            },
            // 副属性
            normalTags: [],
            // 星级
            star: 5,
            level: 20,
        }
    },
    methods: {
        handleStarChange(e) {
            if (e >= this.artifactData.minStar && e <= this.artifactData.maxStar) {
                this.star = e;
                this.level = this.star * 4;
            }
        },

        handleMainTagChange(e) {
            if (e.name !== this.mainTag.name) {
                let maxValue = secondaryTags[e.name].max[5];

                this.mainTag.value = convertDisplayTagValue(e.name, maxValue);
                this.mainTag.name = e.name;
            } else {
                this.mainTag = e;
            }
        },

        handleSetNameChange(e) {
            this.setName = e;
            this.star = this.artifactData.maxStar;
            this.level = this.star * 4;
        },

        /**
         * return the final artifact object
         */
        getArtifact: function() {
            return {
                setName: this.setName,
                position: this.position,
                detailName: getDetailName(this.setName, this.position),
                mainTag: this.getArtifactMainTag(),
                normalTags: this.getArtifactNormalTags(),
                omit: this.level < 16,
                star: this.star,
                level: this.level,
                id: 0,  // it's a placeholder, id is determined in Vuex store
            }
        },

        getArtifactMainTag() {
            let temp = Object.assign({}, this.mainTag);
            temp.value = parseFloat(temp.value);

            if (isNaN(temp.value)) {
                temp.value = 0;
            }

            return convertPercentage(temp);
        },

        getArtifactNormalTags() {
            let temp = [];
            for (let item of this.normalTags) {
                if (item.value === "" || item.value === "0") {
                    continue;
                }

                temp.push(convertPercentage({
                    name: item.name,
                    value: parseFloat(item.value),
                }));
            }

            return temp;
        },

        onConfirm() {
            let result = this.getArtifact();

            if (!isArtifactUnique(this.$store.getters["artifacts/allFlat"], result)) {
                this.$confirm("The same artifac has been detected, do you want to continue?", "Hint", {
                    confirmButtonText: "Save",
                    cancelButtonText: "Cancel",
                    type: "warning",
                }).then(() => {
                    this.$emit("confirm", result);
                }).catch(() => {});
            } else {
                this.$emit("confirm", result);
            }
        },
        
        onCancel() {
            this.$emit("close");
        },

        shuffleNormalTags() {
            let temp = randomNormalTag(5, 20, [this.mainTag.name]);
            for (let i = 0, l = temp.length; i < l; i++) {
                temp[i].value = convertDisplayTagValue(temp[i].name, temp[i].value);
            }

            this.normalTags = temp;
        },

        openHelp() {
            let text = "Using random numbers, you can quickly construct a large number of reasonable artifacts, and you can easily determine what artifacts a certain role is suitable for. For example, quickly construct a 4-piece set of gladiators, shimenawas, and witches, so as to calculate what kind of artifacts combination for hu tao is suitable for you";
            this.$alert(text, "Help");
        }
    },
    computed: {
        artifactData() {
            return artifactsData[this.setName];
        }
    }
}
</script>

<style scoped>

</style>