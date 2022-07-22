<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Electro Damage Frequency (ICD)</h3>
            <el-input
                v-model="thunderFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Normal Attack Frequency (Attack Speed)</h3>
            <el-input
                v-model="aFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Charge Attack Frequency</h3>
            <el-input
                v-model="bFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">E Frequency</h3>
            <el-input
                v-model="eFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Q Frequency</h3>
            <el-input
                v-model="qFreq"
                size="small"
            ></el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "KeqingPhysical.tcfg",
    data() {
        return {
            thunderFreq: "0.5",
            aFreq: "0.3",
            bFreq: "0.5",
            eFreq: "0.15",
            qFreq: "0.05",
        }
    },
    methods: {
        setData(d) {
            this.thunderFreq = d.thunderFreq.toString();
            this.aFreq = d.aFreq.toString();
            this.bFreq = d.bFreq.toString();
            this.eFreq = d.eFreq.toString();
            this.qFreq = d.qFreq.toString();
        },
        compact() {
            let aFreq = parseFloat(this.aFreq);
            let bFreq = parseFloat(this.bFreq);
            let eFreq = parseFloat(this.eFreq);
            let qFreq = parseFloat(this.qFreq);

            let sum = aFreq + bFreq + eFreq + qFreq;
            if (sum === 0) {
                aFreq = 0.3;
                bFreq = 0.5;
                eFreq = 0.15;
                qFreq = 0.05
            } else {
                aFreq /= sum;
                bFreq /= sum;
                eFreq /= sum;
                qFreq /= sum;
            }

            return {
                thunderFreq: parseFloat(this.thunderFreq) ?? 0.5,

                aFreq,
                bFreq,
                eFreq,
                qFreq,
            }
        },
    }
    
}
</script>