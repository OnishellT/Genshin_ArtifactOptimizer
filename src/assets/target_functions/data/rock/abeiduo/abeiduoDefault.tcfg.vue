<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">E Hits Count</h3>
            <el-input-number
                v-model="eCount"
                :min="0"
                size="small"
            ></el-input-number>
        </div>

        <div class="config-item">
            <h3 class="config-title">Number of Q hits</h3>
            <el-input-number
                v-model="qCount"
                :min="0"
                size="small"
            ></el-input-number>
        </div>

        <div class="config-item">
            <h3 class="config-title">Q skill cast frequency (percentage of the total times of E and Q) (please enter a value of 0-1)</h3>
            <el-input
                v-model="qFreq"
                size="small"
            ></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">C2 Count</h3>
            <el-input-number
                v-model="c2Count"
                :min="0"
                :max="4"
                size="small"
            ></el-input-number>
        </div>
    </div>
</template>

<script>
export default {
    name: "AbeiduoDefault.tcfg",
    data() {
        return {
            eCount: 4,
            qCount: 7,
            qFreq: "0.4",
            c2Count: 2,
        }
    },
    methods: {
        compact() {
            let temp = Object.assign({}, this.$data);
            temp.qFreq = parseFloat(this.qFreq) ?? 0.4;

            return temp;
        },
        setData(d) {
            this.eCount = d.eCount;
            this.qCount = d.qCount;
            this.qFreq = d.qFreq.toString();
            this.c2Count = d.c2Count;
        }
    }
    
}
</script>