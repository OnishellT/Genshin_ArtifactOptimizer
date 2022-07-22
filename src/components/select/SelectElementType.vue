<template>
    <el-radio-group
        :value="value"
        @input="$emit('input', $event)"
        size="large"
    >
        <el-radio-button v-if="eleMap.has('fire')" label="fire">Pyro</el-radio-button>
        <el-radio-button v-if="eleMap.has('thunder')" label="thunder">Electro</el-radio-button>
        <el-radio-button v-if="eleMap.has('water')" label="water">Hydro</el-radio-button>
        <el-radio-button v-if="eleMap.has('wind')" label="wind">Anemo</el-radio-button>
        <el-radio-button v-if="eleMap.has('rock')" label="rock">Geo</el-radio-button>
        <el-radio-button v-if="eleMap.has('ice')" label="ice">Cryo</el-radio-button>
        <el-radio-button v-if="eleMap.has('physical')" label="physical">Physical</el-radio-button>
    </el-radio-group>
</template>

<script>
export default {
    name: "SelectElementType",
    props: {
        value: {
            type: String,
            required: true,
        },
        elements: {
            default: () => {
                return ["fire", "thunder", "water", "wind", "rock", "ice", "physical"];
            }
        },
        multi: { default: false }
    },
    computed: {
        eleMap() {
            let temp = new Set();
            for (let ele of this.elements) {
                temp.add(ele);
            }
            return temp;
        }
    }
}
</script>