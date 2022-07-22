<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Attribute Name</h3>
            <el-radio-group
                v-model="fieldName"
                size="large"
            >
                <el-radio-button label="attack">ATK</el-radio-button>
                <el-radio-button label="life">HP</el-radio-button>
                <el-radio-button label="defend">DEF</el-radio-button>
                <el-radio-button label="criticalDamage">Crit Damage</el-radio-button>
                <el-radio-button label="critical">Crit Rate</el-radio-button>
                <el-radio-button label="elementalMastery">Elemental Mastery</el-radio-button>
                <el-radio-button label="recharge">Energy Recharge</el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    name: "Single.tcfg",
    data() {
        return {
            fieldName: "attack",
        }
    },
    methods: {
        setData(d) {
            this.fieldName = d.fieldName;
        }
    }
}

</script>