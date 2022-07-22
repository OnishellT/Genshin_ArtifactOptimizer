<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Mistsplitter's Edge Stacks</h3>
            <el-input-number
                :min="0"
                :max="3"
                v-model="level"
                size="small"
            ></el-input-number>
        </div>
    </div>
</template>

<script>


export default {
    name: "Mistsplitter Reforged.wcfg",
    data() {
        return {
            level: 1,
        }
    },
    methods: {
        setData(d) {
            this.level = d.level ?? 1;
        }
    }
}
</script>