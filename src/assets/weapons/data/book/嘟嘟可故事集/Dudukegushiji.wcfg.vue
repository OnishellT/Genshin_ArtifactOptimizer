<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Average Effect 1 Ratio</h3>
            <el-alert
                title="Normal Attack hits on opponents increase Charged Attack DMG by 16/20/24/28/32% for 6s."
                :closable="false"
                style="margin-bottom: 16px"
            ></el-alert>
            <common-config-slider v-model="rate1"></common-config-slider>
        </div>
        <div class="config-item">
            <h3 class="config-title">Average Effect 2 Ratio</h3>
            <el-alert
                title="Charged Attack hits on opponents increase ATK by 8/10/12/14/16% for 6s."
                :closable="false"
                style="margin-bottom: 16px"
            ></el-alert>
            <common-config-slider v-model="rate2"></common-config-slider>
        </div>
    </div>
</template>

<script>
import CommonConfigSlider from "../../../common/CommonConfigSlider.vue"


export default {
    components: { CommonConfigSlider },
    name: "Dodoco Tales.wcfg",
    data() {
        return {
            rate1: 0.3,
            rate2: 0.1,
        }
    },
    methods: {
        setData(d) {
            this.rate1 = d.rate1;
            this.rate2 = d.rate2;
        }
    }
}
</script>