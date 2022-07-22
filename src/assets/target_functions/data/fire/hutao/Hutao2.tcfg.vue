<template>
    <div>
        <div
            class="config-item"
        >
            <h3 class="config-title">Vaporize（0-1）</h3>
            <el-input
                v-model="vaporize"
                size="small"
            ></el-input>
        </div>

        <div
            class="config-item"
        >
            <h3 class="config-title">Charge Attack Frequency</h3>
            <el-input
                v-model="bFreq"
                size="small"
            ></el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hutao.tcfg",
    data() {
        return {
            vaporize: "0.5",
            bFreq: "0.7",
        }
    },
    methods: {
        compact() {
            return {
                vaporize: parseFloat(this.vaporize) ?? 0.5,
                bFreq: parseFloat(this.bFreq) ?? 0.7,
            };
        },
        setData(d) {
            this.vaporize = (d.vaporize ?? 0.5).toString();
            this.bFreq = (d.bFreq ?? 0.7).toString();
        }
    }
    
}
</script>