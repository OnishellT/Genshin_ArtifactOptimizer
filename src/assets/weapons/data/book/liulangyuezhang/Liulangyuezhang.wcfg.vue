<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Average Passive Trigger Ratio</h3>
            <common-config-slider v-model="rate"></common-config-slider>
        </div>
        <div class="config-item">
            <h3 class="config-title">Theme Song</h3>
            <el-radio-group v-model="type" size="large">
                <el-radio-button label="recitative">Recitative</el-radio-button>
                <el-radio-button label="aria">Aria</el-radio-button>
                <el-radio-button label="interlude">Interlude</el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
import CommonConfigSlider from "../../../common/CommonConfigSlider.vue"


export default {
    components: { CommonConfigSlider },
    name: "The Widsith.wcfg",
    data() {
        return {
            type: "recitative",
            rate: 0.1,
        }
    },
    methods: {
        setData(d) {
            this.type = d.type;
            this.rate = d.rate;
        }
    }
}
</script>