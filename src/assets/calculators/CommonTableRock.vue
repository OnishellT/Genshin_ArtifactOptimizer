<template>
    <el-table
            :data="data"
            size="large"
            stripe
            :header-cell-style="{
            background: '#222933',
            color: '#fafafa'
            }"
            :row-style="{
            background: '#222933',
            color: '#fcba03',
            }"
        >
            <el-table-column
                label="Skill"
                property="chs"
                width="300"
            ></el-table-column>
            <el-table-column
                label="Geo Damage"
                width="200"

            >
                <template slot-scope="scope">
                    <damage-display :damage="scope.row.rock"></damage-display>
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
import DamageDisplay from "@c/display/DamageDisplay";

export default {
    name: "CommonTableRock",
    components: {
        DamageDisplay,
    },
    props: ["data"],
}
</script>
<style>
.el-table__body tr:hover > td {
    
   background-color: unset !important;
   
}
</style>