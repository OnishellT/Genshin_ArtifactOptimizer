import LoadingComponent from "@c/LoadingComponent";
import ErrorComponent from "@c/ErrorComponent";
import VueRouter from "vue-router";

const IntroPage = () => ({
    component: import(/* webpackChunkName: "intro-page" */ "@page/about/IntroPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const ArtifactsPage = () => ({
    component: import(/* webpackChunkName: "artifacts-page" */"@page/ArtifactsPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const ArtifactsPlanPage = () => ({
    component: import(/* webpackChunkName: "artifacts-plan-page" */ "@page/ArtifactsPlanPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const ChangeLogPage = () => ({
    component: import(/* webpackChunkName: "about-page" */ "@page/about/ChangeLogPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const AlgorithmPage = () => ({
    component: import(/* webpackChunkName: "about-page" */ "@page/about/AlgorithmPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const ExternalLinkPage = () => ({
    component: import(/* webpackChunkName: "about-page" */ "@page/about/ExternalLinkPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const ArtifactPotentialPage = () => ({
    component: import(/* webpackChunkName: "artifact-potential-page" */ "@page/ArtifactPotentialPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const PotentialFuncPage = () => ({
    component: import(/* webpackChunkName: "about-page" */ "@page/about/PotentialFuncPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const CharacterPresetsPage = () => (
    {
        component: import(/* webpackChunkName: "character-presets-page" */ "@page/CharacterPresetsPage"),
        loading: LoadingComponent,
        error: ErrorComponent,
    }
);
const HelpBasicPage = () => ({
    component: import(/* webpackChunkName: "help-page" */ "@page/helps/HelpBasicPage"),
    loading: LoadingComponent,
    error: ErrorComponent,
});
const FAQPage = () => import(/* webpackChunkName: "help-page" */ "@page/helps/FAQPage");
const TargetFuncExplanationPage = () => import(/* webpackChunkName: "help-page" */ "@page/helps/TargetFuncExplanationPage");
const ExportToolPage = () => import(/* webpackChunkName: "help-page" */ "@page/helps/ExportToolPage");
const ArtifactsStatisticsPage = () => import(/* webpackChunkName: "artifacts-statistics-page" */ "@page/ArtifactsStatisticsPage");
const KumiPage = () => import (/* webpackChunkName: "kumi-page" */ "@page/KumiPage");


const webName = process.env.WEB_TITLE;

const routes = [
    {
        path: "/artifacts-kumi",
        component: KumiPage,
        meta: {
            title: "Favorites Artifacts | " + webName,
            keepAlive: true,
        }
    },
    {
        path: "/artifacts-statistics",
        component: ArtifactsStatisticsPage,
        meta: {
            title: "Artifacts Statistics | " + webName,
            keepAlive: true,
        }
    },
    {
        path: "/help/export-tools",
        component: ExportToolPage,
        meta: {
            title: "Export Tools | " + webName,
        }
    },
    {
        path: "/help/target-func-explanation",
        component: TargetFuncExplanationPage,
        meta: {
            title: "Target Functions Parameter Description | " + webName,
        }
    },
    {
        path: "/help/basic",
        component: HelpBasicPage,
        meta: {
            title: "Basic Usage| " + webName,
        }
    },
    {
        path: "/help/faq",
        component: FAQPage,
        meta: {
            title: "FAQ | " + webName,
        }
    },
    {
        path: "/intro",
        component: IntroPage,
        alias: "/",
        meta: {
            title: "Main Page | " + webName,
        }
    },
    {
        path: "/artifacts",
        component: ArtifactsPage,
        meta: {
            keepAlive: true,
            title: "Add Artifacts | " + webName,
        }
    },
    {
        path: "/calculate",
        component: ArtifactsPlanPage,
        meta: {
            keepAlive: true,
            title: "Character Calculator | " + webName,
        }
    },
    {
        path: "/changelog",
        component: ChangeLogPage,
        meta: {
            title: "Update Record | " + webName,
        }
    },
    {
        path: "/algorithm-target",
        component: AlgorithmPage,
        meta: {
            title: "Target Function | " + webName,
        }
    },
    {
        path: "/algorithm-potential",
        component: PotentialFuncPage,
        meta: {
            title: "Potential Function | " + webName,
        }
    },
    {
        path: "/tomodachi",
        component: ExternalLinkPage,
        meta: {
            title: "Links | " + webName,
        }
    },
    {
        path: "/potential",
        component: ArtifactPotentialPage,
        meta: {
            keepAlive: true,
            title: "Artifacts Potential | " + webName,
        }
    },
    {
        path: "/character-presets",
        component: CharacterPresetsPage,
        meta: {
            keepAlive: true,
            title: "Character Presets | " + webName,
        }
    }
]

const router = new VueRouter({
    mode: process.env.ROUTE_MODE,       // webpack define plugin
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;