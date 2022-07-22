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
                label="Reaction Type"
                property="title"
                width="300"
            ></el-table-column>
            <el-table-column
                label="Damage"
                width="200"
            >
                <template slot-scope="scope">
                    {{ scope.row.dmg.toFixed(1) }}
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
export default {
    name: "CommonTransformative",
    props: ["data"],
}
</script>
<style>
.el-table__body tr:hover > td {
    
   background-color: unset !important;
   
}
</style>
