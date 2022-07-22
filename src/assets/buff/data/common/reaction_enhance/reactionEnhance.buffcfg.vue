<template>
    <div>
        <single-value
            title="Value（0-1）"
            v-model="value"
        ></single-value>

        <div class="buff-config-item">
            <h3 class="buff-config-title">Reaction Type</h3>
            <el-checkbox-group
                v-model="reactionTypes"
                size="small"
            >
                <el-checkbox-button label="melt">Melt</el-checkbox-button>
                <el-checkbox-button label="vaporize">Vaporize</el-checkbox-button>
                <el-checkbox-button label="overload">Overload</el-checkbox-button>
                <el-checkbox-button label="superconduct">Super Conduct</el-checkbox-button>
                <el-checkbox-button label="electroCharged">Electro Charge</el-checkbox-button>
                <el-checkbox-button label="swirl">Swirl</el-checkbox-button>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
import SingleValue from "@asset/buff/common_config_item/SingleValue";

export default {
    name: "ReactionEnhance.buffcfg",
    components: {
        SingleValue,
    },
    data: function () {
        return {
            value: "0.2",
            reactionTypes: [],
        }
    },
    methods: {
        getStandardConfig() {
            return {
                type: "reactionEnhance",
                value: parseFloat(this.value) ?? 0.2,
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
            this.value = (buff.value ?? "0.2").toString(),
            this.reactionTypes = buff.reactonTypes ?? [];
        }
    }
}
</script>