<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">HP Below 50%</h3>
            <el-switch
                v-model="lifeBelow50"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "HumoConfig.wcfg",
    data() {
        return {
            lifeBelow50: false,
        }
    },
    methods: {
        setData(d) {
            this.lifeBelow50 = d.lifeBelow50;
        }
    }
}
</script>