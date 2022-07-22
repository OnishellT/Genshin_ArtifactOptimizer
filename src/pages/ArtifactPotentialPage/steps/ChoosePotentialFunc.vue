<template>
    <div>
        <el-alert
            title="Unleveled artifacts potential refers to the mathematical expectation of what can be reached, and for leveled artifacts, it can be considered as the current rating, please refer to the algorithm description for details"
            :closable="false"
            type="danger"
            style="margin-bottom: 20px"
        >
        </el-alert>
        <el-alert
            title="Only 4-star and 5-star artifacts are taking into account"
            :closable="false"
            type="warning"
            style="margin-bottom: 20px"
        ></el-alert>
        <div
            class="item hand"
            v-for="(f, key) in potentialFuncData"
            :key="key"
            style="color:white"
            :class="{ active: key === value }"
            @click="handleClick(key)"
        >
            <div>
                <img class="badge" :src="f.badge">
            </div>
            <div class="detail" >
                <p class="title fs-14">{{ f.chs }}</p>
                <div class="description fs-12" >
                    <span
                        style="color:white"
                        v-for="(des, index) in f.description"
                        :key="index"
                    >
                        {{ des }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import potentialFuncData from "@asset/potential_functions/data";

export default {
    name: "ChoosePotentialFunc",
    created: function () {
        this.potentialFuncData = potentialFuncData;
    },
    props: ["value"],
    methods: {
        handleClick(name) {
            this.$emit("input", name);
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    /* height: 64px; */
    padding: 8px;
    transition: 300ms;
    border-radius: 3px;
    display: flex;
    border: 1px solid transparent;
    color: #ccc;
    &:hover {
        background: #1f3647;
    }

    .detail {
        padding-left: 16px;

        .title {
            font-weight: bold;
            display: block;
            /* padding: 0; */
            margin: 0;
        }

        .description span {
            display: block;
            color: #555555;
            padding-top: 3px;
        }
    }

    .badge {
        width: 64px;
        display: inline-block;
        vertical-align: top;
    }

    &.active {
        color: #00adff;
        background: #409EFF;
        background-color: #1f3647;
        border: 1px solid #12345633;
    }
}
</style>