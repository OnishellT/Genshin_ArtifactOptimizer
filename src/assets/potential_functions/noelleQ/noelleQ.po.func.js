function f(args) {
    let baseAtk = args.pArgs.baseAtk;
    let baseCrit = args.pArgs.baseCrit;
    let baseCD = args.pArgs.baseCriticalDamage;
    let atk = args.pArgs.atk;
    let baseDEF = args.pArgs.baseDEF;
    let def = args.pArgs.def;

    let original = (atk + Math.min(4 * baseAtk, 0.5 * def)) * (1 + baseCrit * baseCD);

    return function (tags) {
        let a = atk;
        let crit = baseCrit;
        let cd = baseCD;
        let myDEF = def;
        for (let tag of tags) {
            switch (tag.name) {
                case "attackStatic":
                    a += tag.value;
                    break;
                case "attackPercentage":
                    a += tag.value * baseAtk;
                    break;
                case "critical":
                    crit += tag.value;
                    break;
                case "criticalDamage":
                    cd += tag.value;
                    break;
                case "defendStatic":
                    myDEF += tag.value;
                    break;
                case "defendPercentage":
                    myDEF += tag.value * baseDEF;
                    break;
            }
        }

        let value = (a + Math.min(4 * baseAtk, 0.5 * myDEF)) * (1 + cd * crit);
        // return (value - original) / value * 100;
        return value - original;
    };
}

export default {
    name: "noelleQ",
    func: f,
    valid: ["attackStatic", "attackPercentage", "critical", "criticalDamage", "defendStatic", "defendPercentage"],
    needConfig: true,
}