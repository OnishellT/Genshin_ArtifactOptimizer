<template>
    <el-drawer
        title="Edit"
        :visible.sync="visible"
        direction="rtl"
        :before-close="handleCancel"
       
    >
        <div class="header" v-if="this.artifact">
            <img :src="thumbnail.url">
            <span>{{ thumbnail.chs }}</span>
        </div>

        <el-divider></el-divider>

        <div style="padding: 0 20px">
            <el-row :gutter="16" v-if="this.artifact">
                <el-col :span="12">
                    <p class="title">Rarity</p>
                    <el-rate
                        @input="handleStarChange"
                        :value="star"
                        :max="artifactData.maxStar"
                    ></el-rate>
                </el-col>
                <el-col :span="12">
                    <div class="flex-row">
                        <p style="margin-right: 8px" class="title">Level</p>
                        <el-button icon="el-icon-d-arrow-left" circle size="mini" title="Level 0"
                            @click="level = 0"
                        ></el-button>
                        <el-button icon="el-icon-d-arrow-right" circle size="mini" title="Level 20"
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
        </div>

        <el-divider></el-divider>

        <div class="main-tag" v-if="this.artifact">
            <p class="title">Main Stat</p>
            <select-artifact-main-tag
                :position="artifact.position"
                :value="mainTag"
                @input="handleMainTagChange"
            ></select-artifact-main-tag>
        </div>

        <div class="normal-tag" v-if="this.artifact">
            <select-artifact-normal-tag v-model="normalTags">
            </select-artifact-normal-tag>
        </div>

        <el-divider></el-divider>

        <div class="buttons">
            <el-row :gutter="12">
                <el-col :span="12">
                    <el-button type="primary" @click="handleConfirm">
                        Confirm
                    </el-button>
                </el-col>
                <el-col :span="12">
                    <el-button @click="handleCancel">
                        Cancel
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </el-drawer>
</template>

<script>
import { artifactsData } from "@asset/artifacts";
import { convertDisplayTagValue, getArtifactRealValue } from "@util/utils";
import deepCopy from "@util/deepcopy";
import { secondaryTags } from "@asset/tags";

import SelectArtifactMainTag from "@c/SelectArtifactMainTag";
import SelectArtifactNormalTag from "@c/SelectArtifactNormalTag";

export default {
    name: "EditArtifactDrawer",
    components: {
        SelectArtifactMainTag,
        SelectArtifactNormalTag
    },
    props: {
        visible: {
            type: Boolean,
        },
        args: {
            type: Object,
            default: () => ({
                id: -1,
            })
        },
    },
    data: function () {
        return {
            mainTag: { name: "", value: "0" },
            normalTags: [
                { name: "", value: "0" },
                { name: "", value: "0" },
                { name: "", value: "0" },
                { name: "", value: "0" },
            ],
            star: 5,
            level: 1,
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

        setInit(item) {
            this.mainTag.name = item.mainTag.name;
            this.mainTag.value = convertDisplayTagValue(item.mainTag.name, item.mainTag.value);

            this.normalTags = [];
            for (let tag of item.normalTags) {
                this.normalTags.push({
                    name: tag.name,
                    value: convertDisplayTagValue(tag.name, tag.value),
                });
            }

            this.star = 5;
            if (Object.prototype.hasOwnProperty.call(item, "star")) {
                this.star = item.star;
            }
            this.level = item.level ?? 20;
        },

        handleConfirm() {
            this.doUpdate();
            this.$emit("close");
        },

        doUpdate() {
            let newArtifact = deepCopy(this.artifact);
            newArtifact.mainTag.name = this.mainTag.name;
            newArtifact.mainTag.value = getArtifactRealValue(this.mainTag.name, this.mainTag.value);

            newArtifact.normalTags = [];
            for (let tag of this.normalTags) {
                newArtifact.normalTags.push({
                    name: tag.name,
                    value: getArtifactRealValue(tag.name, tag.value),
                });
            }

            newArtifact.level = this.level;
            newArtifact.star = this.star;

            this.$store.commit("artifacts/setArtifactById", {
                id: this.artifact.id,
                newArt: newArtifact,
            });
        },

        handleCancel() {
            this.$emit("close");
        }
    },
    computed: {
        artifact() {
            let id = this.args.id;
            if (id < 0) {
                return null;
            }
            let artifactsById = this.$store.getters["artifacts/artifactsById"];
            return artifactsById[id];
        },

        artifactData() {
            return artifactsData[this.artifact.setName] || {};
        },

        thumbnail() {
            if (this.artifact) {
                let data = artifactsData[this.artifact.setName];
                return data[this.artifact.position];
            }

            return {};
        },
    },
    // watch: {
    //     visible(vis) {
    //         if (!vis) {
    //             return;
    //         }
            
    //         let newArt = this.artifact;
    //         setInit(newArt);
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.header {
    background: #222933;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    span {
        font-size: 1.6rem;
        /* margin-left: 32px; */
        /* border-bottom: 3px solid #123456; */
    }
}

.main-tag {
    background: #222933;
    padding: 0 20px;
    margin-top: 32px;
}

.normal-tag {
    background: #222933;
    padding: 0 20px;
    margin-top: 32px;
}

.buttons {
    background: #222933;
    padding: 0 20px;
    /* margin-top: 32px; */
    button {
        width: 100%;
    }
}

.title {
    background: #222933;
    font-size: 1rem;

}
</style>