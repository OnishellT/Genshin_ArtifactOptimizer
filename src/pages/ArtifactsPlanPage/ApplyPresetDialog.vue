<template>
    <el-dialog
        title="Apply Presets"
        :visible.sync="visible"
        width="80%"
        :before-close="() => { this.visible = false }"
    >
        <div class="body">
            <preset-item
                v-for="(item, name) in all"
                :key="name"
                :toolbar="false"
                :item="item"
                class="hand item"
                :class="{active: selected === name}"
                @click="selected = name"
            ></preset-item>
        </div>

        <template #footer>
            <el-button @click="visible = false">Cancel</el-button>
            <el-button
                type="primary"
                @click="handleConfirm"
                :disabled="!isSelectedValid"
            >Apply</el-button>
        </template>
    </el-dialog>
</template>

<script>
import PresetItem from "@c/display/PresetItem";

import { mapGetters } from "vuex";

export default {
    name: "ApplyPresetDialog",
    components: {
        PresetItem,
    },
    data: function () {
        return {
            visible: false,
            selected: "",
        }
    },
    methods: {
        open() {
            this.visible = true;

            // this.selected = this.$store.getters["presets/firstName"];
        },

        handleConfirm() {
            this.visible = false;
            this.$emit("confirm", this.selected);
        }
    },
    computed: {
        ...mapGetters("presets", ["all"]),

        isSelectedValid() {
            return Object.prototype.hasOwnProperty.call(this.all, this.selected);
        }
    }
}
</script>

<style scoped>
.item {
    margin: 0 16px 16px 0;
}

.active {
    background-color: #4798e922;
    border-bottom: 1px solid #00adff;
}

.footer {
    display: flex;
    flex-direction: row-reverse;
}

.body {
    background: #222933;
    display: flex;
    flex-wrap: wrap;
}
</style>