<template>

    <div>
        <!-- new artifact dialog -->
        <add-artifact-dialog
            :visible="newDialogVisible"
            @close="newDialogVisible = false"
            @confirm="handleAddArtifact"
        ></add-artifact-dialog>

        <import-json-dialog
            :visible="importJsonDialogVisible"
            @close="importJsonDialogVisible = false"
        >
        </import-json-dialog>

        <output-json-dialog
            :visible="outputJsonDialogVisible"
            @close="outputJsonDialogVisible = false"
        >
        </output-json-dialog>

        <edit-artifact-drawer
            :visible="editArtifactDrawerVisible"
            @close="editArtifactDrawerVisible = false"
            :args="editArtifactArgs"
            ref="editDrawer"
        >
        </edit-artifact-drawer>

        <!-- <div style="position: sticky"> -->
        <!-- bread crumb -->
        <el-breadcrumb>
            <el-breadcrumb-item>Artifact</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <el-alert
            title="Please pay attention to save the artifacts data locally to prevent accidental data loss"
            type="warning"
            :closable="false"
            style="margin-bottom: 16px"
        ></el-alert>

        <el-tag>Artifacts Count：{{ $store.getters["artifacts/count"] }}</el-tag>

        <!-- tool bar -->
        <div class="tool-bar">
            <el-button @click="add"
                type="primary"
                icon="el-icon-plus"
            >
                Add Artifacts
            </el-button>

            <div class="tool-right">
                <el-button @click="handleImportJsonClicked">
                    Import JSON
                </el-button>
                <el-button @click="handleOutputJsonClicked">
                    Export JSON
                </el-button>
            </div>
        </div>

        <artifacts-filter
            :filter.sync="artifactsFilter"
            style="margin-bottom: 16px"
        ></artifacts-filter>

        <div class="small-toolbar" style="margin-bottom: 16px">
            <el-popconfirm
                title="Are you sure you want to delete every artifact? The artifact set data will also be deleted."
                @confirm="handleClickDeleteAll"
                style="margin-right: 8px"
            >
                <el-button
                    slot="reference"
                    size="mini"
                    icon="el-icon-delete"
                    type="danger"
                    title="Delete all"
                >
                    Delete all
                </el-button>
            </el-popconfirm>
            
            <el-button
                size="mini"
                icon="el-icon-unlock"
                title="Lock All"
                @click="lockOrUnlockall"
            >Unlock All Artifacts</el-button>
            <el-button
                size="mini"
                icon="el-icon-lock"
                title="Lock/Unlock current page"
                @click="lockOrUnlockCurrentPage"
            >Lock/Unlock Current Page</el-button>
        </div>

        <!-- </div> -->

        <!-- artifacts display -->
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane
                v-for="artType in artifactsType"
                :key="artType.name"
                class="panel"
                :name="artType.name"
            >
                <div slot="label" class="flex-row">
                    <img :src="artType.iconURL">
                    <span>{{ artType.chs }}</span>
                </div>
                <artifact
                    class="artifact-panel"
                    v-for="(item) in filteredArtifacts[artType.name]"
                    :key="item.id"
                    :item="item"
                    @delete="removeArtifact(artType.name, item.id)"
                    @toggle="toggleArtifact(artType.name, item.id)"
                    @edit="editArtifact(artType.name, item.id)"
                ></artifact>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import AddArtifactDialog from "./AddArtifactDialog";
import ImportJsonDialog from "./ImportJsonDialog";
import OutputJsonDialog from "./OutputJsonDialog";
import Artifact from "./Artifact";
import EditArtifactDrawer from "./EditArtifactDrawer";
import ArtifactsFilter from "@c/filter/ArtifactsFilter";

import { artifactsIcon } from "@asset/artifacts";
import { toChs as estimateToChs } from "@util/time_estimate";

import positions from "@const/positions";

export default {
    name: "ArtifactsPage",
    components: {
        AddArtifactDialog,
        ImportJsonDialog,
        OutputJsonDialog,
        Artifact,
        EditArtifactDrawer,
        ArtifactsFilter,
    
    },
    created: function () {
        this.artifactsIcon = artifactsIcon;

        this.artifactsType = [
            {
                name: "flower",
                chs: "Flower",
                iconURL: artifactsIcon["flower"],
            },
            {
                name: "feather",
                chs: "Feather",
                iconURL: artifactsIcon["feather"],
            },
            {
                name: "sand",
                chs: "Sands",
                iconURL: artifactsIcon["sand"],
            },
            {
                name: "cup",
                chs: "Goblet",
                iconURL: artifactsIcon["cup"],
            },
            {
                name: "head",
                chs: "Circlet",
                iconURL: artifactsIcon["head"],
            }
        ];
    },
    data: function() {
        return {
            activeName: "flower",

            newDialogVisible: false,
            importJsonDialogVisible: false,
            outputJsonDialogVisible: false,
            editArtifactDrawerVisible: false,

            editArtifactArgs: {
                id: -1,
            },

            artifactsFilter: () => true,
        }
    },
    methods: {
        handleClickDeleteAll() {
            this.$store.commit("artifacts/removeAllArtifacts");
        },
       


        lockOrUnlockCurrentPage() {
            let artifacts = this.$store.getters["artifacts/allArtifacts"][this.activeName];
            let lockCount = artifacts.reduce((a, b) => a + (b.omit ? 1 : 0), 0);
            // console.log(lockCount);

            if (lockCount === artifacts.length || lockCount === 0) {
                for (let i = 0; i < artifacts.length; i++) {
                    this.$store.commit("artifacts/toggleArtifact", {
                        position: this.activeName,
                        index: i,
                    });
                }
            } else {
                for (let i = 0; i < artifacts.length; i++) {
                    if (artifacts[i].omit) {
                        this.$store.commit("artifacts/toggleArtifact", {
                            position: this.activeName,
                            index: i,
                        });
                    }
                }
            }
        },
        lockOrUnlockall() {
            this.$store.commit("artifacts/unlockAll");
        },

        /**
         * remove artifacts of type: position and index: index
         */
        removeArtifact: function(position, id) {
            this.$store.commit("artifacts/removeArtifactById", {
                id
            });
        },

        /**
         * toggle enabled
         */
        toggleArtifact: function(position, id) {
            this.$store.commit("artifacts/toggleArtifactById", {
                id,
            });
        },

        /**
         * edit an artifact
         */
        editArtifact: function(position, id) {
            this.editArtifactDrawerVisible = true;
            this.editArtifactArgs.id = id;

            let art = this.$store.getters["artifacts/artifactsById"][id];

            this.$refs.editDrawer.setInit(art);
        },

        add: function() {
            this.newDialogVisible = true;
        },

        handleAddArtifact: function(item) {
            this.newDialogVisible = false;

            this.activeName = item.position;

            this.$store.commit("artifacts/addArtifact", item);
        },

        handleImportJsonClicked() {
            this.importJsonDialogVisible = true;
        },

        handleOutputJsonClicked() {
            this.outputJsonDialogVisible = true;
        },
    },
    computed: {
        allArtifacts() {
            return this.$store.getters["artifacts/allArtifacts"];
        },

        filteredArtifacts() {
            let temp = {};
            for (let pos of positions) {
                temp[pos] = this.allArtifacts[pos].filter(this.artifactsFilter);
            }
            return temp;
        },

        estimatedTime() {
            let iterCount = this.$store.getters["artifacts/iterCount"];
            return estimateToChs(iterCount);
        }
    }
}
</script>

<style scoped>
.panel {
    display: flex;
    flex-wrap: wrap;
    /* max-height: 700px; */
    /* overflow: auto; */
}

.artifact-panel {
    margin: 8px;
}

.tool-bar {
    margin-bottom: 16px;
    margin-top: 16px;
}

.tool-bar .tool-right {
    float: right;
}
</style>