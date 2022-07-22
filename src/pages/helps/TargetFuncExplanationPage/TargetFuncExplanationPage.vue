<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>Help</el-breadcrumb-item>
            <el-breadcrumb-item>TargetFfunction Parameter Description</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="18">
                <h1>Keqing- Object Clear</h1>
                <target-func-explanation-item name="Enemy Electro Element Coverage" description="The percentage of time the enemy is afected by the electro element, which triggers the effect of thundersoother 4 piece"></target-func-explanation-item>
                <target-func-explanation-item
                    name="Normal Attack, Charge ATK, E, Q"
                    description="These four are refered as skills. If you put 10 skills and normal attack accounts for 4 times, then the frequency of normal attack is 0.4"
                ></target-func-explanation-item>
                <target-func-explanation-item
                    name="Charge Attack, Normal Attack Enchantment ratio"
                    description="The enchantment ratio affected by the E skill, for example, level of normal attack 10 times, 4 times are the thunder element, then the level of normal attack enchantment ratio is 0.4, which will affect the choice of damage bonus"
                ></target-func-explanation-item>

                <h1>Hu Tao - Guide to Afterlife </h1>
                <target-func-explanation-item
                    name="Enemy Pyro Element Coverage"
                    description="The proportion of time that the enemy is afected by the pyro element, which will affect the effect of crimson witch 4 piece set"
                ></target-func-explanation-item>
                <target-func-explanation-item
                    name="Proportion of Vaporize/Melt (ICD)"
                    description="In all attacks, the ratio of vaporize/melt, for example, if you perform 10 attacks (both normal and charge attacks), 2 vaporize, then the evaporation ratio is 0.2"
                ></target-func-explanation-item>
                <target-func-explanation-item
                    name="Chrage Attack Frequency"
                    description="After hu tao uses E, the frequency of chrage attack, for example, 10 attacks, 4 of which are chrage attack, then the frequency of chrage attack is 0.4"
                ></target-func-explanation-item>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import TargetFuncExplanationItem from "./TargetFuncExplanationItem";

export default {
    components: {
        TargetFuncExplanationItem,
    },
    name: "TargetFuncExplanationPage"
}
</script>