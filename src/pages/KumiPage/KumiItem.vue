<template>
    <div>
        <div class="up">
            <click-edit-label
                :value="data.name"
                @input="handleChangeKumiName"
                class="title"
            ></click-edit-label>
            <div class="buttons">
                <el-button
                    type="text"
                    icon="el-icon-delete"
                    title="Delete"
                    @click="$emit('delete')"
                ></el-button>
            
            </div>
        </div>
        <div class="body">
            <template
                v-for="i in 5"
            >
                <artifact-display
                    :key="i"
                    v-if="isIdValid(data.ids[i - 1])"
                    class="artifact"
                    width="200"
                    :item="getArtifactById(data.ids[i - 1])"
                    selectable
                    @delete="$emit('deleteArtifact', i - 1)"
                    @toggle="toggle(data.ids[i - 1])"
                    buttons
                    :lock-button="true"
                    :delete-button="true"
                ></artifact-display>
                <add-button
                    :key="i"
                    v-else
                    class="artifact"
                    :back="getIcon(i)"
                    @click="$emit('click', i - 1)"
                ></add-button>
            </template>
        </div>
    </div>
</template>

<script>
import { artifactsIcon } from "@asset/artifacts";

import AddButton from "@c/misc/AddButton";
import ArtifactDisplay from "@c/ArtifactDisplay";
import ClickEditLabel from "@c/misc/ClickEditLabel";

export default {
    name: "KumiItem",
    components: {
        AddButton,
        ArtifactDisplay,
        ClickEditLabel,
    },
    props: {
        data: {
            default: () => ({
                name: "test",
                ids: [7001, -1, 2, -3, 4]
            })
        }
    },
    methods: {
        isIdValid(id) {
            if (id < 0) {
                return false;
            }
            let artifactsById = this.$store.getters["artifacts/artifactsById"];
            if (!Object.prototype.hasOwnProperty.call(artifactsById, id)) {
                return false;
            }

            return true;
        },


        getArtifactById(id) {
            let artifactsById = this.$store.getters["artifacts/artifactsById"];
            return artifactsById[id];
        },

        getIcon(i) {
            let temp = [artifactsIcon.flower, artifactsIcon.feather, artifactsIcon.sand, artifactsIcon.cup, artifactsIcon.head];
            return temp[i - 1];
        },

        handleChangeKumiName(text) {
            this.$store.commit("kumi/updateKumiName", {
                id: this.data.id,
                newName: text,
            });
        },

        isAllDisabled() {
            for (let art of this.notDeletedArtifacts) {
                if (!art.omit) {
                    return false;
                }
            }

            return true;
        },
         toggle(id) {
            this.$store.commit("artifacts/toggleById", { id });
        },



        
    }
}
</script>

<style lang="scss" scoped>
.up {
    border-bottom: 1px solid #dcdfe6;
    padding: 8px;
    background: #00000005;
    display: flex;
    align-items: center;
    justify-content: space-between;

    title {
        flex: 1;
        margin-right: 16px;
        
    }

    .buttons {
        // width: 100px;
        // text-align: right;
        button {
            // margin: 0;
            vertical-align: top;
        }
    }
}

.body {
    background: #222933;
    // display: flex;
    // overflow: auto;
    overflow-x: auto;
    white-space: nowrap;
    padding: 16px;
    
    .artifact-item {
        margin-right: 16px;
        vertical-align: middle;
        width: 200px;
        height: 130px;

        &:last-of-type {
            margin-right: 0;
        }
    }
}
input{
    color: white;
}
</style>