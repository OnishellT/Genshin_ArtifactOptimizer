<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Average Number of Stacks</h3>
            <el-slider
                v-model="level"
                :min="0"
                :max="6"
                :step="0.1"
                show-input
            ></el-slider>
        </div>
        <div class="config-item">
            <h3 class="config-title">Off-Field</h3>
            <el-switch
                v-model="isBackend"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "Xizai.wcfg",
    data() {
        return {
            isBackend: false,
            level: 3,
        }
    },
    methods: {
        setData(d) {
            this.isBackend = d.isBackend ?? false;
            this.level = d.level ?? 3;
        }
    }
}
</script>