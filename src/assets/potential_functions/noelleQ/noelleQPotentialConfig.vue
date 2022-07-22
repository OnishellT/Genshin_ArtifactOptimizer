<template>
    <div>
        <el-alert
            title="These parameters are not so important, they are optional."
            :closable="false"
            type="warning"
            class="hint"
        ></el-alert>
        <div class="config-item">
            <h3 class="config-title">Base ATK</h3>
            <el-alert
                title="Refers to the character + weapon's ATK."
                :closable="false"
                type="warning"
                class="hint"
            ></el-alert>
            <el-input v-model="baseAtk"></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">ATK</h3>
            <el-alert
                title="ATK provided by stats."
                :closable="false"
                type="warning"
                class="hint"
            ></el-alert>
            <el-input v-model="atk"></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Base DEF</h3>
            <el-input v-model="baseDEF"></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">DEF</h3>
            <el-input v-model="def"></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Base Crit Rate</h3>
        
            <el-input v-model="baseCrit"></el-input>
        </div>

        <div class="config-item">
            <h3 class="config-title">Base Crit Damage</h3>
           
            <el-input v-model="baseCriticalDamage"></el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "noelleQPotentialConfig",
    data: function () {
        return {
            baseAtk: "600",
            atk: "1400",
            baseCrit: "30",
            baseCriticalDamage: "100",
            baseDEF: "1500",
            def: "2000",
        }
    },
    methods: {
        compact() {
            return {
                baseAtk: parseFloat(this.baseAtk),
                baseCrit: parseFloat(this.baseCrit)/100,
                baseCriticalDamage: parseFloat(this.baseCriticalDamage)/100,
                atk: parseFloat(this.atk),
                baseDEF: parseFloat(this.baseDEF),
                DEF: parseFloat(this.def),
            }
        }
    }
}
</script>

<style scoped>
.hint {
    margin-bottom: 16px;
}
</style>