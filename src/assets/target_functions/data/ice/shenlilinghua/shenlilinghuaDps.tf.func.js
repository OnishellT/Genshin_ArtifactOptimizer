import { charactersData } from "@asset/characters";

let skill = charactersData["shenlilinghua"].skill;


// function zeroPad(num, places) {
//     var zero = places - num.toString().length + 1;
//     return Array(+(zero > 0 && zero)).join("0") + num;
// }

// var proto = Object.create(Number.prototype);
function PrettyNumber(val) { this.val = val;  this.formatted = ""
}
// PrettyNumber.prototype = proto;
PrettyNumber.prototype.constructor = PrettyNumber;
PrettyNumber.prototype.valueOf = function() { return this.val }

function shenlilinghuaDps(config) {
    // console.log(JSON.parse(JSON.stringify(config.weapon)))
    let hasTalent1 = config.character.hasTalent1;
    let hasTalent2 = config.character.hasTalent2;

    let aLevel = config.cArgs.skill1
    let eLevel = config.cArgs.skill2
    let qLevel = config.cArgs.skill3

    // http://xin.07073.com/zixun/1912038.html
    // A more practical trick is that ayaka can use dodge to cancel the heavy hitting back swing, and use flat A to cancel the dodge back swing, a set of 4A heavy flash cycle also only takes about 2.66 seconds, after the talent to offset the dodge consumption becomes a perpetual motion cycle.
    let aDmg = skill.a.dmg1[aLevel] + skill.a.dmg2[aLevel] + skill.a.dmg3[aLevel] + skill.a.dmg4[aLevel] * 3 + skill.a.bDmg1[aLevel] * 3
    let aDmgTime = 2.66
    let aBonus = hasTalent1 ? 0.3 : 0

    // At the same time QE can also use dodge to cancel the back swing, a single E takes 1 second, E to normal  A takes 0.83 seconds, E to dodge takes 0.46 seconds, the ultimate akes 2.16 seconds, to dodge takes about 2.06 seconds (relatively speaking the ultimate can cancel the back swing is not obvious).
    let eDmg = skill.e.dmg1[eLevel]
    let eDmgTime = 2.53
    
    let qDmg = skill.q.dmg1[qLevel] * 19 + skill.q.dmg2[qLevel]
    let qDmgTime = 2.16
    let talentBonus = hasTalent2 ? 0.18 : 0 

    let dogeTime = 0.5 // Dodge time

    let ice4Crit = config.tArgs.ice4Crit;
    let weaponElement = 0

    if(config.weapon.name === "tianmuyingdadao")
    {
        const tianmuEnergyRecharge = [6, 7.5, 9, 10.5, 12]
        weaponElement += tianmuEnergyRecharge[config.weapon.refine - 1] * 1.5 / 30.0
    }

    return function (attribute, context) {
        let attack = attribute.attack();
        let crit = attribute.bCritical;

        let bonus = attribute.bBonus + attribute.bonus + attribute.iceBonus;

        let isBS4 = (context.artifactSet.blizzardStrayer || 0) >= 4;
        if (isBS4) {
            crit += ice4Crit;
        }


        // Elemental Sphere Recharge Theory https://bbs.mihoyo.com/ys/article/1474904
        // Elemental Sphere Output: https://bbs.nga.cn/read.php?tid=26932608&rand=468
        // Diona e long press 3-5 elemental sphere, cooldown 15s
        // ayaka e 4-5, cd 10
        
        let helperElement = config.tArgs.doubleIceRecharge ?  4 / 15.0 : 0.0
        let shenliElement = 4.5 / 10.0
        let additionalElement = 4.0 / 20 // Assume that ultimate hits two monster output particles

        // Each particle of the same element can acquire about 3 energy
        let totalElementPerSec = (helperElement + shenliElement + additionalElement) * 2.7
        let energyPerSecond = totalElementPerSec * attribute.recharge + weaponElement
        let energyBurstInterval = Math.max(80 / energyPerSecond, 20)
        
        let critBonus = (1 + Math.min(crit, 1) * attribute.criticalDamage);

        
        let aOutput = aDmg * attack * (1 + bonus + aBonus + talentBonus) * critBonus // aDmgTime
        let eOutput = eDmg * attack * (1 + bonus          + talentBonus) * critBonus // (eDmgTime)
        let qOutput = qDmg * attack * (1 + bonus          + talentBonus) * critBonus // (qDmgTime)

        let timeElapse = 0
        let eTimer = 0
        let qTimer = 0

        let aCount = 0
        let eCount = 0
        let qCount = 0
        
        // ayaka three moves cycle, simulation charge attack, normal attack, e skill and the ultimate
        while(qCount < 3)
        {
            let usedTime = 4 + aDmgTime
            timeElapse += usedTime // 辅助一通输出
            eTimer += usedTime
            qTimer += usedTime
            aCount++;

            if(eTimer > 10)
            {
                eCount ++;
                eTimer = 0;
                timeElapse += eDmgTime
            }
            if(qTimer > energyBurstInterval)
            {
                qCount ++;
                qTimer = 0;
                timeElapse += qDmgTime + dogeTime // After dodging, zoom in to get ice damage bonus
            }
        }

        const totalOutput = (aOutput * aCount + eOutput * eCount + qOutput * qCount)
        const res = totalOutput / timeElapse
        var theRes = new PrettyNumber(res);

        const atkPercentage = (attribute.attackPercentage / attribute.attackBasic * 100).toFixed(1)
        // const greenAtkPercentage = ((attribute.attackPercentage+attribute.attackStatic) / attribute.attackBasic * 100).toFixed(1)
        
        const aPercentage = aOutput * aCount / totalOutput * 100
        const ePercentage = eOutput * eCount / totalOutput * 100
        const qPercentage = qOutput * qCount / totalOutput * 100

        // const critDmgPercentage = (attribute.criticalDamage * 100).toFixed(1)
        theRes.formatted = [
            `Expected Dps: ${res.toFixed(1)}`,
            `ATK%: ${atkPercentage}%`, 
            `Energy Burst Interval: ${energyBurstInterval.toFixed(1)}s`,
            `Output Percentage: Normal attack(${aPercentage.toFixed(1)}%), E(${ePercentage.toFixed(1)}%), Q(${qPercentage.toFixed(1)}%)`,
            // `输出量 vs 循环中使用次数: ${aOutput.toFixed(1)}:${aCount}, ${eOutput.toFixed(1)}:${eCount}, ${qOutput.toFixed(1)}:${qCount}`,
            // `倍率: ${aDmg.toFixed(1)}, ${eDmg.toFixed(1)}, ${qDmg.toFixed(1)}`
        ].join('  ‏‏‎ ')
        return theRes;
    };
}

export default {
    name: "shenlilinghuaDps",
    func: shenlilinghuaDps,
    needConfig: true,
    needContext: true,
}