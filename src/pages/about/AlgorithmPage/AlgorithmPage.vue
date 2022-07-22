<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>Algorithm Description</el-breadcrumb-item>
            <el-breadcrumb-item>Target Function</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="18">
                <h1>Expectation Funtion</h1>
                <p v-katex="'V=atk*(1+crit*cd)*(1+bonus)'"></p>

                <h1>Maximum Output Function</h1>
                <p v-katex="'V=atk*(1+cd)*(1+bonus)'"></p>

                <h1>Frequency-based Output Expectation Funtion</h1>
                
                <p v-katex="'V=atk*(a*f_a\'+b*f_b\'+e*f_e\'+q*f_q\')'"></p>
                <p v-katex="'f_a\'=\\frac{f_a}{f_a+f_b+f_e+f_q*(1+c)}'"></p>
                <p v-katex="'f_b\'=\\frac{f_b}{f_a+f_b+f_e+f_q*(1+c)}'"></p>
                <p v-katex="'f_e\'=\\frac{f_e}{f_a+f_b+f_e+f_q*(1+c)}'"></p>
                <p v-katex="'f_q\'=\\frac{f_q*(1+c)}{f_a+f_b+f_e+f_q*(1+c)}'"></p>
                <p v-katex="'a=(1+bonus_p*(1-r_a)+bonus_{ele}*r_a+bonus_a+bonus_{other})*T_a*(1+cd*c_a)'"></p>
                <p v-katex="'b=(1+bonus_p*(1-r_b)+bonus_{ele}*r_b+bonus_b+bonus_{other})*T_b*(1+cd*c_b)'"></p>
                <p v-katex="'e=(1+bonus_{ele}+bonus_e+bonus_{other})*T_e*(1+cd*c_e)'"></p>
                <p v-katex="'q=(1+bonus_{ele}+bonus_q+bonus_{other})*T_q*(1+cd*c_q)'"></p>
                <p>
                    In, <br>
                    <span v-katex="'f_x'"></span>Is the frequency of skill x,<span v-katex="'f_x\''"></span>In order to calculate the equivalent frequency after the charging efficiency,<br>
                    <span v-katex="'T_x'"></span>Is the multiplier of skill x<br>
                    <span v-katex="'c_x'"></span>Crit for skill x<br>
                    <span v-katex="'r_x'"></span>Percentage of enchantments for skill x<br>
                    <span v-katex="'bonus_p'"></span>For physical damage bonus,<span v-katex="'bonus_{ele}'"></span>Add elemental damage<br>
                    <span v-katex="'c'"></span>For energy recharge,<span v-katex="'cd'"></span>Critical damage
                </p>
                <p>Explanation: Keqing and Diluc use this function</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "AlgorithmPage"
}
</script>