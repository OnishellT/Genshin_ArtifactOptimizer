<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Hp Above 90%</h3>
            <el-switch
                v-model="lifeAbove90"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "LimingshenjianConfig.wcfg",
    data() {
        return {
            lifeAbove90: true,
        }
    },
    methods: {
        setData(d) {
            this.lifeAbove90 = d.lifeAbove90;
        }
    }
}
</script>