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
    name: "Yunjin.tcfg",
    data() {
        return {
            fieldName: "defend",
        }
    },
    methods: {
        setData(d) {
            this.fieldName = d.fieldName;
        }
    }
}

</script>