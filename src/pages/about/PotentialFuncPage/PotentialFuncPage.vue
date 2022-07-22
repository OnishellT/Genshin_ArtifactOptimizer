<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>Algorithm Description</el-breadcrumb-item>
            <el-breadcrumb-item>Potential Function</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="18">
                <h1>Influencing factors: </h1>
                <p>It is well known that the impact of the output toward the subtext can be basically summarized by this formula.</p>
                <p v-katex="'atk*(1+crit*cd)'"></p>
                <p v-katex="'atk=baseAtk*(1+p)+s'"></p>
                <p>Among them, <span v-katex="'baseAtk'"></span><span v-katex="'p'"></span>is the base ATK，<span v-katex="'s'"></span>For flat attack bonus</p>

                <h1>Expectations</h1>
                <p>For full level artifacts<span v-katex="'X'"></span>, Definition ：</p>
                <p v-katex="'V=f(X)'"></p>
                <p>
                    Among them.<span v-katex="'f'"></span>is the potential function, which is a function of the sacred relic adverb.<br>
                   And for non-full level artifacts,<span v-katex="'X'"></span>is a random variable, thus.
                </p>
                <p v-katex="'V=E(f(X))'"></p>
                <p>Therefore, this model not only scores full level artifacst, but also calculates the "potential value" for unleveled relics</p>

                <h1>Algorithm</h1>
                <p>Knowing the above principle, it is actually a simple search, each subtree is equivalent to a state in reinforcement, and each leaf node is the state of reinforcement to full level</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "PotentialFuncPage",
    // mounted: function () {
    //     let ele = document.getElementById("text");
    //     katex.render("c = \\pm\\sqrt{a^2 + b^2}", ele);
    // }
}
</script>