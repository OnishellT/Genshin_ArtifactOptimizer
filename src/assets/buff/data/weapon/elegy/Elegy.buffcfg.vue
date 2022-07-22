<template>
    <div>
        <div class="buff-config-item">
            <p class="buff-config-title">Refinement level</p>
            <el-input-number
                v-model="refine"
                :min="1"
                :max="5"
                size="mini"
            ></el-input-number>
        </div>
    </div>
</template>

<script>
export default {
    name: "Elegy.buffcfg",
    data: function () {
        return {
            refine: 1,
        }
    },
    methods: {
        getValue() {
            return this.refine * 0.05 + 0.15;
        },

        getStandardConfig() {
            return {
                type: "atk-percentage",
                value: this.getValue(),

            }
            
        },

        getBuff() {
            return {
                name: "elegy",
                args: {
                    refine: this.refine
                }
            }
        },

        setBuff(buff) {
            this.refine = buff.refine;
        }
    }
}
</script>