<template>
    <div>
        <div
            class="config-item"
        >
            <h3 class="config-title">Vaporize Percentage（0-1）</h3>
            <el-input
                v-model="vaporize"
                size="small"
            ></el-input>
        </div>

        <div
            class="config-item"
        >
            <h3 class="config-title">Melting Percentage（0-1）（Please ensure that the value of the vaporize percentage is less than 1）</h3>
            <el-input
                v-model="melt"
                size="small"
            ></el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "XiaogongE.tcfg",
    data() {
        return {
            vaporize: "0",
            melt: "0",
        }
    },
    methods: {
        compact() {
            return {
                vaporize: parseFloat(this.vaporize) ?? 0,
                melt: parseFloat(this.melt) ?? 0,
            };
        },
        setData(d) {
            this.vaporize = (d.vaporize ?? 0).toString();
            this.melt = (d.melt ?? 0).toString();
        }
    }
    
}
</script>