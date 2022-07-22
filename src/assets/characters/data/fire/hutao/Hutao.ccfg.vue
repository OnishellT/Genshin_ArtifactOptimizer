<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">HP Below 50%</h3>
            <el-switch
                v-model="hpBelow50"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hutao.ccfg",
    data() {
        return {
            hpBelow50: false,
        }
    },
    methods: {
        setData(d) {
            if (!d) {
                return;
            }
            this.hpBelow50 = d.hpBelow50;
        }
    }
}
</script>