<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Eye of Stormy Judgment Active?</h3>
            <el-switch
                active-text="Yes"
                inactive-text="No"
                v-model="underE"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "KeqingNormal.tcfg",
    data() {
        return {
            underE: false,
        }
    },
    methods: {
        setData(d) {
            this.underE = d.underE ?? false;
        },
    }
    
}
</script>