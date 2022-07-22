<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Average Number of Effect Stacks</h3>
            <common-config-slider v-model="level" :max="7"></common-config-slider>
        </div>
        <div class="config-item">
            <h3 class="config-title">Average Full Stacks Status Ratio</h3>
            <common-config-slider v-model="rate"></common-config-slider>
        </div>
    </div>
</template>

<script>
import CommonConfigSlider from "../../../common/CommonConfigSlider.vue"


export default {
    components: { CommonConfigSlider },
    name: "Primordial Jade Winged-Spear.wcfg",
    data() {
        return {
            level: 2.5,
            rate: 0,
        }
    },
    methods: {
        setData(d) {
            this.level = d.level;
            this.rate = d.rate;
        }
    }
}
</script>