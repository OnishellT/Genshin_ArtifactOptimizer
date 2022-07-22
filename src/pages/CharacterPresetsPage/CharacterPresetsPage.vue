<template>
    <div>
        <el-dialog
            :visible.sync="showExportDialog"
            :title="exportPresetTitle"
        >
            <el-input
                type="textarea"
                :rows="10"
                v-model="exportPresetItemStr"
            ></el-input>

            <span slot="footer">
                <el-button @click="showExportDialog = false">Cancel</el-button>
                <el-button
                    type="primary"
                    v-if="canCopy"
                    @click="handleCopy"
                >Copy</el-button>
            </span>
        </el-dialog>

        <el-dialog
            :visible.sync="showImportDialog"
            title="Import"
        >
            <el-input
                type="textarea"
                :rows="10"
                v-model="importPresetStr"
            ></el-input>

            <span slot="footer">
                <el-button @click="showImportDialog = false">Cancel</el-button>
                <el-button
                    type="primary"
                    @click="handleImport('append')"
                >Additional Import</el-button>
                <el-button
                    type="primary"
                    @click="handleImport('overwrite')"
                >Overwrite Import</el-button>
            </span>
        </el-dialog>

        <el-breadcrumb>
            <el-breadcrumb-item>Character Presets</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <div class="toolbar">
            <el-button
                icon="el-icon-download"
                circle
                size="small"
                title="Export All"
                @click="handleExportAll"
            ></el-button>
            <el-button
                icon="el-icon-upload2"
                circle
                size="small"
                title="Import"
                @click="showImportDialog = true"
            ></el-button>
        </div>

        <div class="body">
            <template v-if="!isEmpty">
                <preset-item
                    v-for="(item, name) in all"
                    :key="name"
                    :item="item"
                    @delete="deletePreset(name)"
                    @download="handleDownload(name, item)"
                    class="item"
                ></preset-item>
            </template>
            <el-alert
                v-else
                title="Please go to the Character Calculator page to add a preset."
                :closable="false"
                type="warning"
                style="margin-bottom: 20px"
            ></el-alert>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import PresetItem from "@c/display/PresetItem";

export default {
    name: "CharacterPresetsPage",
    components: {
        PresetItem,
    },
    created() {
        this.canCopy = !!navigator.clipboard;
    },
    data() {
        return {
            showExportDialog: false,
            showImportDialog: false,

            exportPresetTitle: "",
            exportPresetItemStr: "",

            importPresetStr: "",
        }
    },
    methods: {
        checkImportType(obj) {
            if (Object.prototype.hasOwnProperty.call(obj, "data")) {
                return "multi";
            } else {
                return "single"
            }
        },

        handleImport(mode) {
            let json;
            try {
                json = JSON.parse(this.importPresetStr);
            } catch (e) {
                this.$message.error("JSON format error, please check the format or source of the imported data");
                return;
            }

            let itemsToDelete = [];
            if (mode === "overwrite") {
                itemsToDelete = Object.keys(this.all);
            }

            for (let deleteItemName of itemsToDelete) {
                this.$store.commit("presets/delete", { name: deleteItemName });
            }

            let type = this.checkImportType(json);
            if (type === "multi") {
                for (let presetItem of json.data) {
                    let name = presetItem.name;
                    this.$store.commit("presets/add", {
                        name,
                        value: presetItem
                    });
                }
            } else if (type === "single") {
                let name = json.name;
                let preset = json;
                this.$store.commit("presets/add", {
                    name,
                    value: preset,
                });
            }

            this.showImportDialog = false;
        },

        deletePreset(name) {
            this.$store.commit("presets/delete", {
                name,
            });
        },

        handleDownload(name, presetItem) {
            this.exportPresetTitle = `Export preset "${name}"`;
            this.exportPresetItemStr = JSON.stringify(presetItem);

            this.showExportDialog = true;
        },

        handleCopy() {
            navigator.clipboard.writeText(this.exportPresetItemStr).then(() => {
                this.$message("Copy Successfully");
            }).catch(() => {
                this.$message.error("Copy Failed");
            });
        },

        handleExportAll() {
            this.exportPresetTitle = "Export All";
            let all = this.all;
            
            let data = {
                data: Object.values(all),
            };
            this.exportPresetItemStr = JSON.stringify(data);
            this.showExportDialog = true;
        }
    },
    computed: {
        ...mapGetters("presets", ["all"]),
        isEmpty() {
            return Object.keys(this.all).length === 0;
        }
    }
}
</script>

<style scoped>
.item {
    margin: 0 16px 16px 0;
}

.body {
    background: #222933;
    display: flex;
    flex-wrap: wrap;
}

.toolbar {
    margin-bottom: 20px;
}
</style>