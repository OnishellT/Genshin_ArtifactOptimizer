<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Application Effect (No Damage)</h3>
            <el-switch
                v-model="undamaged"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "Anxiangshanguang.wcfg",
    data() {
        return {
            undamaged: true,
        }
    },
    methods: {
        setData(d) {
            this.undamaged = d.undamaged;
        }
    }
}
</script>