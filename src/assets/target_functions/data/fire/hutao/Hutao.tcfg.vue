<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Calculation Mode</h3>
            <el-radio-group
                v-model="mode"
                size="large"
            >
                <el-radio-button label="expect">Expected Damage</el-radio-button>
                <el-radio-button label="max">Maximum Damage</el-radio-button>
                <el-radio-button label="max-reaction">Maximum Reaction Damage</el-radio-button>
            </el-radio-group>
        </div>

        <div
            class="config-item"
            v-if="mode === 'max' || mode === 'max-reaction'"
        >
            <h3 class="config-title">Skill Type</h3>
            <el-radio-group
                v-model="skill"
                size="large"
            >
                <el-radio-button label="a">Normal Attack</el-radio-button>
                <el-radio-button label="b">Charge Attack</el-radio-button>
            </el-radio-group>
        </div>

        <div
            class="config-item"
            v-if="mode === 'max' || mode === 'max-reaction'"
        >
            <h3 class="config-title">Apply LavaWalker 4 Piece Set</h3>
            <el-switch
                v-model="lw4"
                active-text="Yes"
                inactive-text="No"
            ></el-switch>
        </div>

        <div
            class="config-item"
            v-if="mode === 'expect'"
        >
            <h3 class="config-title">Enemy Pyro Element Application (ICD)</h3>
            <el-input
                v-model="pyroRate"
                size="small"
            ></el-input>
        </div>

        <div
            class="config-item"
            v-if="mode === 'expect'"
        >
            <h3 class="config-title">Vaporize Ratio（0-1）</h3>
            <el-input
                v-model="evaporate"
                size="small"
            ></el-input>
        </div>

        <div
            class="config-item"
            v-if="mode === 'expect'"
        >
            <h3 class="config-title">Melting Proportion（0-1）(Please make sure that the sum of the ratio to evaporation is less than 1)</h3>
            <el-input
                v-model="melt"
                size="small"
            ></el-input>
        </div>

        <div
            class="config-item"
            v-if="mode === 'expect'"
        >
            <h3 class="config-title">Charge Attack Frequency</h3>
            <el-input
                v-model="bFreq"
                size="small"
            ></el-input>
        </div>

        <div
            class="config-item"
            v-if="mode === 'expect'"
        >
            <h3 class="config-title">Coverage Rate of Constellation 6 (please ignore if less than 6 constellations)</h3>
            <el-input
                v-model="conste6Rate"
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
            pyroRate: "0.9",
            evaporate: "0.5",
            melt: "0",
            bFreq: "0.7",
            mode: "expect",
            lw4: false,
            skill: "a",
            conste6Rate: "0.05",
        }
    },
    methods: {
        compact() {
            return {
                pyroRate: parseFloat(this.pyroRate) ?? 0.9,
                evaporate: parseFloat(this.evaporate) ?? 0.5,
                melt: parseFloat(this.melt) ?? 0,
                bFreq: parseFloat(this.bFreq) ?? 0.7,
                mode: this.mode,
                lw4: this.lw4,
                skill: this.skill,
                conste6Rate: parseFloat(this.conste6Rate) ?? 0.05,
            };
        },
        setData(d) {
            this.pyroRate = d.pyroRate.toString();
            this.evaporate = d.evaporate.toString();
            this.melt = d.melt.toString();
            this.bFreq = d.bFreq.toString();
            this.mode = d.mode;
            this.lw4 = d.lw4;
            this.skill = d.skill;
            this.conste6Rate = d.conste6Rate ?? "0.05";
        }
    }
    
}
</script>