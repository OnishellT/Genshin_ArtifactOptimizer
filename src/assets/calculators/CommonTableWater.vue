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
                label="Hydro Damage"
                width="200"
            >
                <template slot-scope="scope">
                    <damage-display
                        :damage="scope.row.water"
                        :show-expect="getShowExpect(scope.row)"
                        :show-critical="getShowCritical(scope.row)"
                        :show-non-critical="getShowNonCritical(scope.row)"
                    ></damage-display>
                </template>
            </el-table-column>
            <el-table-column
                label="Vaporize Damage"
                width="200"
            >
                <template slot-scope="scope">
                    <damage-display
                        :damage="scope.row.waterVaporize"
                        :show-expect="getShowExpect(scope.row)"
                        :show-critical="getShowCritical(scope.row)"
                        :show-non-critical="getShowNonCritical(scope.row)"
                    ></damage-display>
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
import DamageDisplay from "@c/display/DamageDisplay";

export default {
    name: "CommonTableWater",
    components: {
        DamageDisplay,
    },
    props: ["data"],
    methods: {
        getShowExpect(row) {
            if (!row.tag) {
                return true;
            }

            if (row.tag === "expectOnly") {
                return true;
            }

            return true;
        },

        getShowCritical(row) {
            if (!row.tag) {
                return true;
            }

            if (row.tag === "expectOnly") {
                return false;
            }

            return true;
        },

        getShowNonCritical(row) {
            if (!row.tag) {
                return true;
            }

            if (row.tag === "expectOnly") {
                return false;
            }

            return true;
        }
    }
}
</script>
<style>
.el-table__body tr:hover > td {
    
   background-color: unset !important;
   
}
</style>