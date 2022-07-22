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
            <h3 class="config-title">Nomal Attack Infusion Ratio</h3>
            <el-input
                v-model="aEle"
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
            <h3 class="config-title">Charge Attack Infusion Ratio</h3>
            <el-input
                v-model="bEle"
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
    name: "KeqingNormal.tcfg",
    data() {
        return {
            thunderFreq: "0.9",
            aFreq: "0.4",
            bFreq: "0.4",
            eFreq: "0.15",
            qFreq: "0.05",
            aEle: "0.8",
            bEle: "0.8",
        }
    },
    methods: {
        setData(d) {
            this.thunderFreq = d.thunderFreq.toString();
            this.aFreq = d.aFreq.toString();
            this.bFreq = d.bFreq.toString();
            this.eFreq = d.eFreq.toString();
            this.qFreq = d.qFreq.toString();
            this.aEle = d.aEle.toString();
            this.bEle = d.bEle.toString();
        },
        compact() {
            let aFreq = parseFloat(this.aFreq);
            let bFreq = parseFloat(this.bFreq);
            let eFreq = parseFloat(this.eFreq);
            let qFreq = parseFloat(this.qFreq);

            let sum = aFreq + bFreq + eFreq + qFreq;
            if (sum === 0) {
                aFreq = 0.4;
                bFreq = 0.4;
                eFreq = 0.15;
                qFreq = 0.05
            } else {
                aFreq /= sum;
                bFreq /= sum;
                eFreq /= sum;
                qFreq /= sum;
            }

            return {
                thunderFreq: parseFloat(this.thunderFreq) ?? 0.9,

                aFreq,
                bFreq,
                eFreq,
                qFreq,

                aEle: parseFloat(this.aEle) ?? 0.8,
                bEle: parseFloat(this.bEle) ?? 0.8,
            }
        },
    }
    
}
</script>