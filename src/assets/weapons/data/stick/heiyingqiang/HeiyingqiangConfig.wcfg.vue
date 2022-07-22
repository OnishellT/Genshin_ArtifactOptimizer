<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Fighting Slimes</h3>
            <el-switch
                v-model="slime"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeiyingqiangConfig.wcfg",
    data() {
        return {
            slime: true,
        }
    },
    methods: {
        setData(d) {
            this.slime = d.slime;
        }
    }
}
</script>