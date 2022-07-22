<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Have 2 or More Enemies Around You</h3>
            <el-switch
                v-model="enemyAbove2"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "JuedouzhiqiangConfig.wcfg",
    data() {
        return {
            enemyAbove2: true,
        }
    },
    methods: {
        setData(d) {
            this.enemyAbove2 = d.enemyAbove2;
        }
    }
}
</script>