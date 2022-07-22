<template>
    <div>
        <div class="config-item">
            <h3 class="config-title">Reaction Type</h3>
            <select-reaction-type
                :value="reactionType"
                @input="handleChangeReactionType"
                type="amp"
            ></select-reaction-type>
        </div>

        <div class="config-item">
            <h3 class="config-title">Damage type (referring to who triggered the elemental reaction)</h3>
            <select-element-type
                v-model="element"
                :elements="elementList"
            ></select-element-type>
        </div>

        <div class="config-item">
            <h3 class="config-title">Skill Type</h3>
            <select-skill-type
                v-model="skill"
            ></select-skill-type>
        </div>
    </div>
</template>

<script>
import SelectElementType from "@c/select/SelectElementType";
import SelectSkillType from "@c/select/SelectSkillType";
import SelectReactionType from "@c/select/SelectReactionType";

export default {
    name: "AmpReaction.tcfg",
    components: {
        SelectElementType,
        SelectSkillType,
        SelectReactionType,
    },
    data() {
        return {
            skill: "a",
            element: "fire",
            reactionType: "vaporize",

            elementList: ["fire", "water"],
        }
    },
    methods: {
        setData(d) {
            this.skill = d.skill ?? "a";
            this.element = d.element ?? "fire";
            this.handleChangeReactionType(d.reactionType ?? "vaporize");
        },

        compact() {
            return {
                skill: this.skill,
                element: this.element,
                reactionType: this.reactionType,
            }
        },

        handleChangeReactionType(type) {
            this.reactionType = type;
            if (type === "vaporize") {
                this.elementList = ["fire", "water"];
            }else if (type === "overload"){
                this.elementList = ["fire", "thunder"];
            } else {
                this.elementList = ["fire", "ice"];
            }
            this.element = this.elementList[0];
        }
    }
}
</script>