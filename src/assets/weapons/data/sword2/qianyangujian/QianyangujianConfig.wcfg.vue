<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Number of Liyue Characters in the Team</h3>
            <el-input-number
                v-model="liyueCount"
                :min="0"
                :max="4"
                size="small"
            ></el-input-number>
        </div>
    </div>
</template>

<script>
export default {
    name: "QianyangujianConfig.wcfg",
    data() {
        return {
            liyueCount: 0,
        }
    },
    methods: {
        setData(d) {
            this.liyueCount = d.liyueCount;
        }
    }
}
</script>