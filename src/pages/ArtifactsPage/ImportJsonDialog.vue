<template>
    <el-dialog
        title="Import JSON"
        :visible.sync="visible"
        width="80%"
        style="color: white"
        :before-close="handleClose"
        @opened="handleOpened"
    >
        <h3 class="text">Any help is welcome to develop third-party export tools, please refer to the JSON interface: <a target="_blank" href="https://wormtql.gitbook.io/mona-uranai/"> Documentation for Mona Format</a></h3>
        <p></p>
        <el-input
            ref="field"
            type="textarea"
            placeholder="Input JSON (Mona Format)"
            v-model="json"
            :rows="5"
           
        >
        </el-input>
        <p v-if="supportFileReader">*Supports drag and drop files</p>

        <div class="buttons">
            <!-- <el-button
                type="primary"
                class="confirm-button"
                @click="handleOverwrite"
                style="margin-left: 20px"
            >
                覆盖导入<i class="el-icon-document-delete"></i>
            </el-button> -->
            <el-button
                type="primary"
                class="confirm-button"
                @click="handleAppend"
                style="margin-left: 20px"
            >
                Import<i class="el-icon-document-add"></i>
            </el-button>
            <el-button class="cancel-button" @click="handleClose">Cancel</el-button>
            <label class="text-reader">
                Open File
            <input type="file" ref="doc" @change="readFile()" >
            </label>
        </div>
    </el-dialog>
</template>

<script>
import checkImportJson from "@util/checkImportJson";

let supportFileReader = !!window.FileReader;

export default {
    name: "ImportJsonDialog",
    props: {
        visible: {
            type: Boolean,
        }
    },
    data: function () {
        return {
            json: "",
        }
    },
    created() {
        this.supportFileReader = supportFileReader;
    },
    methods: {
        handleOpened() {
            if (!supportFileReader) {
                return;
            }

            let ele = this.$refs.field.$el;
            ele.ondrop = e => {
                e.preventDefault();

                let df = e.dataTransfer;
                if (df.length === 0) {
                    return;
                }

                let file = df.files[0];
                let fileReader = new FileReader();

                fileReader.onload = (readResult) => {
                    this.json = readResult.target.result;
                };
                fileReader.readAsText(file);
            };
             console.log(ele);
        },
         readFile() {
            this.file = this.$refs.doc.files[0];
            const reader = new FileReader();
            if (this.file.name.includes(".json")) {
                reader.onload = (res) => {
                this.json = res.target.result;

                };

                reader.onerror = (err) => console.log(err);
                reader.readAsText(this.file);
            } else {
                this.content = "check the console for file output";
                reader.onload = (res) => {
                console.log(res.target.result);
                };
                reader.onerror = (err) => console.log(err);
                reader.readAsText(this.file);
            }
        },

        handleClose() {
            let ele = this.$refs.field.$el;
            ele.ondrop = null;

            this.$emit("close");
        },

        appendArtifacts() {
            let { artifacts, invalidCount } = checkImportJson(this.json);
            if (invalidCount > 0) {
                this.$message({
                    type: "warning",
                    message: `There are ${invalidCount} artifacts that cannot be identified, and these artifacts have been ignored`
                });
            }

            this.$store.commit("artifacts/appendArtifactsCheckHash", artifacts);
        },

        // setLoading() {
        //     const loading = this.$loading({
        //         lock: true,
        //         text: "处理中",
        //         spinner: "el-icon-loading",
        //         background: "rgba(0, 0, 0, 0.7)",
        //     });

        //     return loading;
        // },

        // append clicked
        handleAppend() {
            if (this.json) {
                // const loading = this.setLoading();
                this.appendArtifacts();
                // loading.close();
            }
            
            this.$emit("close");
        },

        // overwrite clicked
        async handleOverwrite() {
            if (this.json) {
                // this.setLoading();

                // this.$store.commit("artifacts/removeAllArtifacts");

                this.appendArtifacts();

                // loading.close();

                // this.$nextTick(() => {
                    
                // })

                
            }

            this.$emit("close");
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

.text {
    margin: 0;
}


.text-reader {
  position: relative;
  overflow: hidden;
  display: flex;

  /* Fancy button style 😎 */
  border: 0.5px solid rgb(24, 22, 22);
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>