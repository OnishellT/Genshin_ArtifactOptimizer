<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Average Number of Passive Stacks</h3>
            <common-config-slider v-model="level" :max="3"></common-config-slider>
        </div>
        <div class="config-item">
            <h3 class="config-title">Max Number of Stacks Ratio</h3>
            <common-config-slider v-model="rate" :max="1"></common-config-slider>
        </div>
    </div>
</template>

<script>
import CommonConfigSlider from "../../../common/CommonConfigSlider.vue"


export default {
    components: { CommonConfigSlider },
    name: "Shenlezhizhenyi.wcfg",
    data() {
        return {
            level: 3,
            rate: 1
        }
    },
    methods: {
        setData(d) {
            this.level = d.level ?? 3
            this.rate = d.rate ?? 1
        }
    }
}
</script>