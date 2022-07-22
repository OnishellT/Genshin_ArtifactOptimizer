import { artifactsTagMap } from "@asset/artifacts";
import { secondaryTags } from "@asset/tags";

export default function(vm) {
    let sand = vm.$store.getters["artifacts/allArtifacts"].sand;
    if (vm.sandMainStat16Only) {
        sand = sand.filter(item => {
            return (item.level ?? 20) >= 16;
        })
    }

    let count = {};
    for (let key of artifactsTagMap["sand"]) {
        count[key] = 0;
    }
    for (let i = 0; i < sand.length; i++) {
        let name = sand[i].mainTag.name;
        count[name]++;
    }

    let options = {
        tooltip: {
            trigger: "item"
        },
        series: [
            {
                name: "Sands Main Stat Distribution",
                type: "pie",
                radius: ["40%", "70%"],
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                data: Object.keys(count).map(key => ({
                    name: secondaryTags[key].chs,
                    value: count[key]
                })).filter(item => item.value > 0),
            }
        ]
    }

    return options;
}