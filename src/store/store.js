import Vuex from "vuex";
import Vue from "vue";

import artifacts from "./modules/artifact";
import presets from "./modules/presets";
import kumi from "./modules/artifactKumi";

Vue.use(Vuex);

const _store = new Vuex.Store({
    modules: {
        artifacts,
        presets,
        kumi,
    }
});

// watch artifacts change
_store.watch(
    state => ({
        flower: state.artifacts.flower,
        feather: state.artifacts.feather,
        sand: state.artifacts.sand,
        cup: state.artifacts.cup,
        head: state.artifacts.head,
    }),
    newValue => {
        localStorage.setItem("artifacts", JSON.stringify(newValue));
    },
    {
        deep: true,
    },
);

// watch presets change
_store.watch(
    state => state.presets.presets,
    newValue => {
        localStorage.setItem("presets", JSON.stringify(newValue));
    },
    {
        deep: true,
    }
)

// watch artifact group change
_store.watch(
    state => ({
        tree: state.kumi.tree,
    }),
    newValue => {
        localStorage.setItem("kumiTree", JSON.stringify(newValue));
    },
    {
        deep: true
    }
);

export default _store;