<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>Artifact Sets</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <div class="toolbar">
            <el-button
                size="small"
                type="primary"
                @click="handleNewDir"
            >New Favorite <i class="el-icon-plus"></i></el-button>
        </div>

        <el-row :gutter="16">
            <el-col :span="6">
                <kumi-display
                    v-model="currentDirId"
                ></kumi-display>
            </el-col>
            <el-col :span="18">
                <kumi-directory-display
                    :dirId="currentDirId"
                    @delete="handleDeleteDir"
                ></kumi-directory-display>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import KumiDisplay from "./KumiDisplay.vue";
import KumiDirectoryDisplay from "./KumiDirectoryDisplay.vue";

export default {
    name: "KumiPage",
    components: {
        KumiDisplay,
        KumiDirectoryDisplay,
    },
    data() {
        return {
            currentDirId: -1,
        }
    },
    created() {
        this.currentDirId = this.$store.getters["kumi/firstDirId"];
    },
    methods: {
        handleDeleteDir(id) {
            this.$store.commit("kumi/deleteDir", { id });
            this.currentDirId = this.$store.getters["kumi/firstDirId"];
        },

        handleNewDir() {
            this.$store.commit("kumi/newDir", { name: "New Set " })
        },
    }
}
</script>

<style scoped>
.toolbar {
    margin-bottom: 16px;
}
</style>