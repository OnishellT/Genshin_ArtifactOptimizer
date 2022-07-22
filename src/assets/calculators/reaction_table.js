import reactionBonus from "@/elemental_reaction/reaction_bonus";
import { getTransformativeBase, REACTION_TYPE } from "@/elemental_reaction/transformativeBase";


export function damageElectroA(attribute, configObject, enemy) {
    let c = configObject.character;
    let transformativeBonus = reactionBonus.transformative(attribute.elementalMastery);

    let rr = enemy.getRR("thunder");
    let bonus = transformativeBonus + attribute.electroEnhance;
    return getTransformativeBase(c.level, REACTION_TYPE.ELECTRO) * (1 + bonus) * rr;
}

export function damageSuperConductA(attribute, configObject, enemy) {
    let c = configObject.character;

    let transformativeBonus = reactionBonus.transformative(attribute.elementalMastery);

    let rr = enemy.getRR("thunder");
    let bonus = transformativeBonus + attribute.superconductEnhance;
    return getTransformativeBase(c.level, REACTION_TYPE.SUPER_CONDUCT) * (1 + bonus) * rr;
}

export function damageOverloadA(attribute, configObject, enemy) {
    let c = configObject.character;

    let transformativeBonus = reactionBonus.transformative(attribute.elementalMastery);

    let rr = enemy.getRR("fire");
    let bonus = transformativeBonus + attribute.overloadEnhance;
    return getTransformativeBase(c.level, REACTION_TYPE.OVERLOAD) * (1 + bonus) * rr;
}

export function damageShatteredA(attribute, configObject, enemy) {
    let c = configObject.character;

    let transformativeBonus = reactionBonus.transformative(attribute.elementalMastery);

    let rr = enemy.getRR("physical");
    let bonus = transformativeBonus; // todo
    return getTransformativeBase(c.level, REACTION_TYPE.SHATTERED) * (1 + bonus) * rr;
}

function captalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function damageSwirlA(attribute, configObject, enemy, element) {
    let c = configObject.character;
    let swirlEnhanceName = "swirl" + captalize(element) + "Enhance";

    let transformativeBonus = reactionBonus.transformative(attribute.elementalMastery);

    let rr = enemy.getRR(element);
    let bonus = transformativeBonus + (attribute[swirlEnhanceName] ?? 0) + attribute.swirlEnhance;
    return getTransformativeBase(c.level, REACTION_TYPE.SWIRL) * (1 + bonus) * rr;
}

// 感电，超导，超载，扩散，碎冰
export function tableTransformativeA(attribute, configObject, enemy) {
    let table = [];
    
    table.push({
        name: "electro",
        title: "Electro-Charge",
        dmg: damageElectroA(attribute, configObject, enemy),
    });
    table.push({
        name: "superconduct",
        title: "Superconduct",
        dmg: damageSuperConductA(attribute, configObject, enemy),
    });
    table.push({
        name: "overload",
        title: "Overload",
        dmg: damageOverloadA(attribute, configObject, enemy),
    });
    table.push({
        name: "shattered",
        title: "Shatter",
        dmg: damageShatteredA(attribute, configObject, enemy),
    });
    table.push({
        name: "swirlIce",
        title: "Swirl (Cryo)",
        dmg: damageSwirlA(attribute, configObject, enemy, "ice"),
    });
    table.push({
        name: "swirlFire",
        title: "Swirl (Pyro)",
        dmg: damageSwirlA(attribute, configObject, enemy, "fire"),
    });
    table.push({
        name: "swirlThunder",
        title: "Swirl (Electro)",
        dmg: damageSwirlA(attribute, configObject, enemy, "thunder"),
    });
    table.push({
        name: "swirlWater",
        title: "Swirl (Hydro)",
        dmg: damageSwirlA(attribute, configObject, enemy, "water"),
    });

    return table;
}