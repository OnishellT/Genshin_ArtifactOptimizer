<template>
    <el-dialog
        title="Exporting JSON"
        :visible.sync="visible"
        width="80%"
        :before-close="handleClose"
    >
        <p
            class="text"
        >
            {{ outputJson }}
        </p>

        <div class="buttons">
            <el-button type="primary" class="confirm-button" @click="handleCopy" v-if="canCopy">Copy</el-button>
            <el-button class="cancel-button" @click="handleClose">Close</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: "OutputJsonDialog",
    props: {
        visible: {
            type: Boolean,
        }
    },
    created: function () {
        this.canCopy = !!navigator.clipboard;
    },
    data: function () {
        return {
            json: "",
        }
    },
    methods: {
        handleClose() {
            this.$emit("close");
        },

        handleCopy() {
            navigator.clipboard.writeText(this.outputJson).then(() => {
                this.$message("Replication Succesfull");
            }).catch(() => {
                this.$message.error("Copy failure");
            });
        }
    },
    computed: {
        outputJson() {
            let obj = {};
            ["flower", "feather", "sand", "cup", "head"].forEach(item => {
                obj[item] = this.$store.state.artifacts[item];
            });

            return JSON.stringify(obj);
        }
    }
}
</script>

<style scoped>
.buttons {
    margin-top: 32px;
    display: flex;
    flex-direction: row-reverse;
}

.cancel-button {
    margin-right: 10px;
}

.text {
    max-height: 300px;
    overflow: auto;
}
</style>