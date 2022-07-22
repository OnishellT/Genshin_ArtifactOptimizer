<template>
    <div>
        <h3 class="class">Basic Attributes</h3>
        <div class="item">
            <span class="title">HP</span>
            <span class="value">
                {{ life.toFixed(0) }}
                =
                {{ panel.lifeBasic.toFixed(0) }}
                +
                <span class="extra">{{ (panel.lifePercentage + panel.lifeStatic).toFixed(0) }}</span>
            </span>
        </div>
        <div class="item">
            <span class="title">ATK</span>
            <span class="value">
                {{ attack.toFixed(0) }}
                =
                {{ panel.attackBasic.toFixed(0) }}
                +
                <span class="extra">
                    {{ (panel.attackPercentage + panel.attackStatic).toFixed(0) }}
                </span>
            </span>
        </div>
        <div class="item">
            <span class="title">DEF</span>
            <span class="value">
                {{ defend.toFixed(0) }}
                =
                {{ panel.defendBasic.toFixed(0) }}
                +
                <span class="extra">
                    {{ (panel.defendPercentage + panel.defendStatic).toFixed(0) }}
                </span>
            </span>
        </div>
        <div class="item">
            <span class="title">Elemental Mastery</span>
            <span class="value">{{ panel.elementalMastery }}</span>
        </div>
        <div class="item">
            <span class="title">Energy Recharge</span>
            <span class="value">{{ mul100("recharge") }}</span>
        </div>
         <div class="item">
            <span class="title">Critical Rate</span>
            <span class="value">{{ mul100("bCritical") }}</span>
        </div>
        <div class="item">
            <span class="title">Critical Damage</span>
            <span class="value">{{ mul100("criticalDamage") }}</span>
        </div>


        <h3 class="class">Crit</h3>
        <div class="item">
            <span class="title">Normal Attack Crit Rate</span>
            <span class="value">{{ mul100("critical") }}</span>
        </div>
        <div class="item">
            <span class="title">Elemental Skill Crit Rate</span>
            <span class="value">{{ mul100("eCritical") }}</span>
        </div>
        <div class="item">
            <span class="title">Elemental Burst Crit Rate</span>
            <span class="value">{{ mul100("qCritical") }}</span>
        </div>
        <div class="item">
            <span class="title">Plunge Attack Crit Rate</span>
            <span class="value">{{ mul100("airCritical") }}</span>
        </div>
        


        <h3 class="class">Damage Bonuses</h3>
        <div class="item">
            <span class="title">Electro Damage Bonus</span>
            <span class="value">{{ mul100("thunderBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Pyro Damage Bonus</span>
            <span class="value">{{ mul100("fireBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Cryo Damage Bonus</span>
            <span class="value">{{ mul100("iceBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Hydro Damage Bonus</span>
            <span class="value">{{ mul100("waterBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Electro Damage Bonus</span>
            <span class="value">{{ mul100("windBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Geo Damage Bonus</span>
            <span class="value">{{ mul100("rockBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Physical Damage Bonus</span>
            <span class="value">{{ mul100("physicalBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Normal Attack Damage Bonus</span>
            <span class="value">{{ mul100("aBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Critical Damage Bonus</span>
            <span class="value">{{ mul100("bBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Elemental Skill Damage Bonus</span>
            <span class="value">{{ mul100("eBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Elemental Burst Damage Bonus</span>
            <span class="value">{{ mul100("qBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Plunge Attack Damage Bonus</span>
            <span class="value">{{ mul100("airBonus") }}</span>
        </div>
        <div class="item">
            <span class="title">Damage Bonus</span>
            <span class="value">{{ mul100("bonus") }}</span>
        </div>


        <h3 class="class">Elements</h3>
        <div class="item">
            <span class="title">Overload Enhancement</span>
            <span class="value">{{ mul100("overloadEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Burning Enhancement</span>
            <span class="value">{{ mul100("burningEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Electro Charge Enhancement</span>
            <span class="value">{{ mul100("electroEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Superconduct Enhancement</span>
            <span class="value">{{ mul100("superconductEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Swirl (Electro) Enhancement</span>
            <span class="value">{{ mul100("swirlThunderEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Swirl (Pyro) Enhancement</span>
            <span class="value">{{ mul100("swirlFireEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Swirl (Hydro) Enhancement</span>
            <span class="value">{{ mul100("swirlWaterEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Swirl (Cryo) Enhancement</span>
            <span class="value">{{ mul100("swirlIceEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Swirl Enhancement</span>
            <span class="value">{{ mul100("swirlEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Vaporize Enhancement</span>
            <span class="value">{{ mul100("vaporizeEnhance") }}</span>
        </div>
        <div class="item">
            <span class="title">Melt Enhancement</span>
            <span class="value">{{ mul100("meltEnhance") }}</span>
        </div>


        <h3 class="class">Elemental Resistances</h3>
        <div class="item">
            <span class="title">Electro Resistance</span>
            <span class="value">{{ mul100("thunderRes") }}</span>
        </div>
        <div class="item">
            <span class="title">Pyro Resistance</span>
            <span class="value">{{ mul100("fireRes") }}</span>
        </div>
        <div class="item">
            <span class="title">Cryo Resistance</span>
            <span class="value">{{ mul100("iceRes") }}</span>
        </div>
        <div class="item">
            <span class="title">Hydro Resistance</span>
            <span class="value">{{ mul100("waterRes") }}</span>
        </div>
        <div class="item">
            <span class="title">Anemo Resistance</span>
            <span class="value">{{ mul100("windRes") }}</span>
        </div>
        <div class="item">
            <span class="title">Geo Resistance</span>
            <span class="value">{{ mul100("rockRes") }}</span>
        </div>


        <h3 class="class">Other</h3>
        <div class="item">
            <span class="title">Healing Bonus</span>
            <span class="value">{{ mul100("cureEffect") }}</span>
        </div>
        <div class="item">
            <span class="title">Shield Strength</span>
            <span class="value">{{ mul100("shield") }}</span>
        </div>
        <div class="item">
            <span class="title">Normal Attack Speed</span>
            <span class="value">{{ mul100("aSpeed") }}</span>
        </div>
        <div class="item">
            <span class="title">Attack Speed</span>
            <span class="value">{{ mul100("bSpeed") }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "AttributePanel",
    props: {
        panel: {
            type: Object,
        },
    },
    methods: {
        mul100(field) {
            return (this.panel[field] * 100).toFixed(1) + "%";
        }
    },
    computed: {
        attack() {
            let p = this.panel;
            return p.attackStatic + p.attackBasic + p.attackPercentage;
        },

        defend() {
            let p = this.panel;
            return p.defendStatic + p.defendBasic + p.defendPercentage;
        },

        life() {
            let p = this.panel;
            return p.lifeStatic + p.lifeBasic + p.lifePercentage;
        }
    }
}
</script>

<style lang="scss" scoped>
.attribute {
    margin-bottom: 8px;
}

.item {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    /* background: rgba(0, 0, 0, 0.05); */
    padding: 4px;

    .title {
        font-size: 1rem;
        color: #f5eded;
        display: inline-block;
        flex: 1;
    }

    .value {
        font-size: 1rem;
        display: inline-block;
        color: #00adff;
        
        flex: 1;

        .extra {
            color: #67C23A;
        }
    }
}





.class {
    /* background:rgb(74, 99, 211); */
    padding: 0px 16px;
    display: inline-block;
    /* color: white; */
    border-radius: 3px;
    font-size: 1.6rem;
    border-bottom: 5px solid rgb(74, 99, 211);
    color: #dfd7d7;
}
</style>