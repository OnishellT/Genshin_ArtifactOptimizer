<template>
    <div>
            <el-alert
                title="This function has no parameters to be configured"
                :closable="false"
                style="margin-bottom: 20px"
            ></el-alert>
    </div>
</template>

<script>
export default {
    name: "Shenhe.tcfg",
    data() {
        return {
            fieldName: "attack",
        }
    },
    methods: {
        setData(d) {
            this.fieldName = d.fieldName;
        }
    }
}

</script>