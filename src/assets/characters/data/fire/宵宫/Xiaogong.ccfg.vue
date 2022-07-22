<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Tricks of the Trouble-Maker - First Ascension Passive</h3>
            <el-slider
                input-size="small"
                show-input
                :min="0"
                :max="10"
                :step="0.1"
                v-model="talent1Level"
            ></el-slider>
        </div>
    </div>
</template>

<script>
export default {
    name: "Xiaogong.ccfg",
    data() {
        return {
            talent1Level: 0,
        }
    },
    methods: {
        setData(d) {
            if (!d) {
                return;
            }
            this.talent1Level = d.talent1Level ?? 0;
        }
    }
}
</script>