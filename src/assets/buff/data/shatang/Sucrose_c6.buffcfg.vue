<template>
    <div>
        <select-element-type
            :elements="['fire', 'ice', 'water', 'thunder', 'rock', 'wind', 'physical']"
            v-model="element"
            style="margin-bottom: 8px"
        ></select-element-type>
    </div>
</template>

<script>
import SelectElementType from "@c/select/SelectElementType";

export default {
    name: "ElementalBonus.buffcfg",
    components: {
        SelectElementType,
    },
    data: function () {
        return {
            value: "20",
            element: "fire",
        }
    },
    methods: {
        getStandardConfig() {
            return {
                type: "elementalBonus",
                value: (parseFloat(this.value) ?? 10) / 100,
                element: this.element,
            }
        },

        getBuff() {
            return {
                name: "elementalBonus",
                args: {
                    value: (parseFloat(this.value) ?? 10) / 100,
                    element: this.element,
                }
            }
        },

        setBuff(buff) {
            this.value = (buff.value * 100).toString();
            this.element = buff.element;
        }
    }
}
</script>