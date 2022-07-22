<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Swirl Ratio（0-1）</h3>
            <el-alert
                title=""
                :closable="false"
                style="margin-bottom: 16px"
            ></el-alert>
            <el-switch
                v-model="isGroup"
                active-text="AOE"
                inactive-text="Single Target"
                style="margin-bottom: 16px"
            ></el-switch>
            <el-slider
                :min="0"
                :max="1"
                :step="0.01"
                show-input
                input-size="small"
                v-model="swirlRatio"
            ></el-slider>
        </div>
        <div class="config-item">
            <h3 class="config-title">Swirl Time</h3>
            <el-slider
                :min="0"
                :max="1"
                :step="0.01"
                show-input
                input-size="small"
                v-model="swirlTime"
            ></el-slider>
        </div>
        <div class="config-item">
            <h3 class="config-title">Viridescent Venerer 4 Piece Resistance Reduction</h3>
            <div class="buff-config-item">
                <h3 class="buff-config-title">The proportion of reduced resistance after Swirl</h3>
                <el-slider
                    :min="0"
                    :max="1"
                    :step="0.01"
                    show-input
                    input-size="small"
                    v-model="rate1"
                ></el-slider>
            </div>
            <div class="buff-config-item">
                <h3 class="buff-config-title">The proportion of the reduced resistance eaten by diffusion</h3>
                <el-slider
                    :min="0"
                    :max="1"
                    :step="0.01"
                    show-input
                    input-size="small"
                    v-model="rate2"
                ></el-slider>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VentiSwirl.tcfg",
    data() {
        return {
            swirlRatio: 0.3,
            swirlTime: 0.2,
            rate1: 0.9,
            rate2: 1,
            isGroup: true,
        }
    },
    methods: {
        setData(d) {
            this.swirlRatio = d.swirlRatio ?? 0.3;
            this.swirlTime = d.swirlTime ?? 0.2;
            this.rate1 = d.rate1 ?? 0.9;
            this.rate2 = d.rate2 ?? 1;
            this.isGroup = d.isGroup ?? true;
        },
        compact() {
            return {
                swirlRatio: this.swirlRatio,
                swirlTime: this.swirlTime,
                rate1: this.rate1,
                rate2: this.rate2,
                isGroup: this.isGroup,
            }
        }
    }
    
}
</script>