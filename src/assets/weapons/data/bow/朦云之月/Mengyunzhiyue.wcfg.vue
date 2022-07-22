<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Total Energy in the Team</h3>
            <el-input
                v-model="totalEnergy"
                size="small"
            ></el-input>
        </div>
    </div>
</template>

<script>


export default {
    name: "mengyunzhiyue.wcfg",
    data() {
        return {
            totalEnergy: "200",
        }
    },
    methods: {
        setData(d) {
            this.totalEnergy = (d.totalEnergy ?? 200).toString();
        },

        compact() {
            return {
                totalEnergy: parseFloat(this.totalEnergy),
            }
        }
    }
}
</script>