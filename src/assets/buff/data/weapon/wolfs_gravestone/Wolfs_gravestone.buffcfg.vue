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
    name: "Wolfs_gravestone.buffcfg",
    data: function () {
        return {
            refine: 1,
        }
    },
    methods: {
        getValue() {
            return this.refine * 0.10 + 0.30;
        },

        getStandardConfig() {
            return {
                type: "atk-percentage",
                value: this.getValue(),
            }
        },

        getBuff() {
            return {
                name: "Wolfs_gravestone",
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