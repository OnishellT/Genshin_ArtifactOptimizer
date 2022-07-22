<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Enemy Pyro Element Application</h3>
            <el-input
                v-model="fireFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Normal Attack Frquency</h3>
            <el-input
                v-model="aFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Normal Attack Infusion Ratio</h3>
            <el-input
                v-model="aEle"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Heavy Attack Frquency</h3>
            <el-input
                v-model="bFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Heavy Attack Infusion Ratio</h3>
            <el-input
                v-model="bEle"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Elemental Skill Frequency</h3>
            <el-input
                v-model="eFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Elemental Burst Frequency</h3>
            <el-input
                v-model="qFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Percentage of Vaporize（0-1）</h3>
            <el-input
                v-model="evaporate"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Proportion of Melt（0-1）（Please make sure that the sum of the ratio to vaporize is less than 1)</h3>
            <el-input
                v-model="melt"
                size="small"
            ></el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "DilukeNormal.tcfg",
    data() {
        return {
            fireFreq: "0.3",
            aFreq: "0.55",
            aEle: "0.5",
            bFreq: "0",
            bEle: "0.5",
            eFreq: "0.4",
            qFreq: "0.05",

            evaporate: "0",
            melt: "0",
        }
    },
    methods: {
        setData(d) {
            this.fireFreq = d.fireFreq.toString();
            this.aFreq = d.aFreq.toString();
            this.aEle = d.aEle.toString();
            this.bFreq = d.bFreq.toString();
            this.bEle = d.bEle.toString();
            this.eFreq = d.eFreq.toString();
            this.qFreq = d.qFreq.toString();

            this.evaporate = d.evaporate.toString();
            this.melt = d.melt.toString();
        },

        compact() {
            let fireFreq = parseFloat(this.fireFreq) ?? 0.3;
            let aFreq = parseFloat(this.aFreq) ?? 0.55;
            let bFreq = parseFloat(this.bFreq) ?? 0;
            let eFreq = parseFloat(this.eFreq) ?? 0.4;
            let qFreq = parseFloat(this.qFreq) ?? 0.05;

            let aEle = parseFloat(this.aEle) ?? 0.5;
            let bEle = parseFloat(this.bEle) ?? 0.5;

            let sum = aFreq + bFreq + eFreq + qFreq;
            if (sum === 0) {
                aFreq = 0.55
                bFreq = 0.0;
                eFreq = 0.4;
                qFreq = 0.05
            } else {
                aFreq /= sum;
                bFreq /= sum;
                eFreq /= sum;
                qFreq /= sum;
            }

            return {
                fireFreq,

                aFreq,
                aEle,
                bFreq,
                bEle,
                eFreq,
                qFreq,

                evaporate: parseFloat(this.evaporate) ?? 0,
                melt: parseFloat(this.melt) ?? 0
            }
        },
    }
    
}
</script>