<template>
    <div>
        <single-value
            title="Value"
            v-model="value"
            :percentage="true"
        ></single-value>
    </div>
</template>

<script>
import SingleValue from "@asset/buff/common_config_item/SingleValue";

export default {
    name: "AtkPercentage.buffcfg",
    components: {
        SingleValue,
    },
    data: function () {
        return {
            value: "10",
        }
    },
    methods: {
        getStandardConfig() {
            return {
                type: "atk-percentage",
                value: (parseFloat(this.value) ?? 10) / 100,
            }
        },

        getBuff() {
            return {
                name: "atkPercentage",
                args: {
                    value: (parseFloat(this.value) ?? 10) / 100,
                }
            }
        },

        setBuff(buff) {
            this.value = (buff.value * 100).toString();
        }
    }
}
</script>