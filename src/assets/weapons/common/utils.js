import CommonConfigSlider from "./CommonConfigSlider";


function f(name, max, title, defaul, attrName) {
    return {
        name: name + ".wcfg",
        render(h) {
            return h("div", [
                h("div", { attrs: { "class": "config-item" } }, [
                    h("h3", { attrs: { "class": "config-title" } }, [title]),
                    h(CommonConfigSlider, {
                        props: { value: this[attrName], max },
                        on: {
                            input: value => {
                                this[attrName] = value;
                            }
                        },
                    })
                ])
            ])
        },
        components: {
            CommonConfigSlider
        },
        data() {
            return {
                [attrName]: defaul,
            }
        },
        methods: {
            setData(d) {
                this[attrName] = d[attrName];
            }
        }
    };
}

export function commonConfigRate(name) {
    return f(name, 1, "Average Passive Trigger Ratio", 0.3, "rate");
}

export function commonConfigLevel(name, max) {
    return f(name, max, "Average Number of Passive Effect Stacks", max / 2, "level");
}

export function commonConfigPassive(name, title, attrName="passive") {
    return {
        name: name + ".wcfg",
        render(h) {
            return h("div", [
                h("div", { attrs: { "class": "config-item" } }, [
                    h("h3", { attrs: { "class": "config-title" } }, [title]),
                    h("el-switch", {
                        props: {
                            value: this[attrName],
                            "active-text": "Yes",
                            "inactive-text": "No",
                        },
                        on: {
                            input: value => {
                                this[attrName] = value;
                            }
                        },
                    })
                ])
            ])
        },
        components: {
            CommonConfigSlider
        },
        data() {
            return {
                [attrName]: false,
            }
        },
        methods: {
            setData(d) {
                this[attrName] = d[attrName];
            }
        }
    };
}