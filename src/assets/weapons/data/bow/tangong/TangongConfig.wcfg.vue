<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Hit Enemy Within 0.3 Seconds</h3>
            <el-switch
                v-model="within03"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "TangongConfig.wcfg",

    data() {
        return {
            within03: true,
        };
    },
    methods: {
        setData(d) {
            this.within03 = d.within03;
        }
    }
}
</script>