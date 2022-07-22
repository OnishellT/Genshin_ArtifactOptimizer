<template>
    <div>
        <div class="filter-item">
            <span class="filter-title">Filter Artifacts</span>
            <el-checkbox-group v-model="value.filterSlots" size="small">
                <el-checkbox-button label="flower">Flower</el-checkbox-button>
                <el-checkbox-button label="feather">Feather</el-checkbox-button>
                <el-checkbox-button label="sand">Sands</el-checkbox-button>
                <el-checkbox-button label="cup">Goblet</el-checkbox-button>
                <el-checkbox-button label="head">Circlet</el-checkbox-button>
            </el-checkbox-group>
        </div>

        <div class="filter-item">
            <span class="filter-title">Level</span>
            <div>
                <el-input-number
                    :min="0"
                    :max="value.maxLevel"
                    v-model="value.minLevel"
                    size="small"
                ></el-input-number>
                <span style="margin: 0 18px">--</span>
                <el-input-number
                    :min="value.minLevel"
                    :max="20"
                    v-model="value.maxLevel"
                    size="small"
                ></el-input-number>
            </div>
        </div>

        <div class="filter-item">
            <span class="filter-title">Filter by Set</span>
            <select-artifact-set
                any-option
                v-model="value.filterSetName"
            ></select-artifact-set>
        </div>

        <div class="filter-item">
            <span class="filter-title">Filter by Main Stat</span>
            <select-art-main-tag-without-val
                v-model="value.filterMainTag"
                position="any"
            ></select-art-main-tag-without-val>
        </div>
    </div>
</template>

<script>
import SelectArtifactSet from "@c/SelectArtifactSet";
import SelectArtMainTagWithoutVal from "@c/SelectArtMainTagWithoutVal";

export default {
    name: "FilterPotentialResult",
    components: {
        SelectArtifactSet,
        SelectArtMainTagWithoutVal,
    },
    props: ["value"],
}
</script>

<style lang="scss" scoped>
.filter-item {
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    .filter-title {
        color: white;
        font-size: 1.6rem;
        display: inline-block;
        width: 120px;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
}
</style>