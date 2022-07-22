<template>
    <el-radio-group
        :value="value"
        @input="$emit('input', $event)"
        size="large"
    >
        <el-radio-button label="a">Normal Attack</el-radio-button>
        <el-radio-button label="b">Charge Attack </el-radio-button>
        <el-radio-button label="e">Elemental Skill</el-radio-button>
        <el-radio-button label="q">Elemental Burst</el-radio-button>
    </el-radio-group>
</template>

<script>
export default {
    name: "SelectSkillType",
    props: {
        value: {
            type: String,
            required: true,
        }
    }
}
</script>