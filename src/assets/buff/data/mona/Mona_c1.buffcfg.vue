<template>
    <div>
        <div class="buff-config-item">
            <h3 class="buff-config-title">Reaction Type</h3>
            <el-checkbox-group
                v-model="reactionTypes"
                size="small"
            >
                <el-checkbox-button label="vaporize">Vaporize</el-checkbox-button>
                <el-checkbox-button label="electroCharged">Electro Charge</el-checkbox-button>
                <el-checkbox-button label="swirlWaterEnhance">Hydro Swirl</el-checkbox-button>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>


export default {
    name: "ReactionEnhance.buffcfg",
    components: {

    },
    data: function () {
        return {
            value: "0.15",
            reactionTypes: [],
        }
    },
    methods: {
        getStandardConfig() {
            return {
                type: "reactionEnhance",
                value: parseFloat(this.value) ?? 0.15*100,
                reactionTypes: this.reactionTypes,
            }
        },

        getBuff() {
            return {
                name: "reactionEnhance",
                args: {
                    value: this.value,
                    reactonTypes: this.reactionTypes,
                }
            }
        },

        setBuff(buff) {
            this.value = (buff.value ?? "0.15").toString(),
            this.reactionTypes = buff.reactonTypes ?? [];
        }
    }
}
</script>