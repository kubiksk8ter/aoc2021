import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/aoc1",
        name: "aoc1",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Aoc1.vue"),
    },
    {
        path: "/aoc2",
        name: "aoc2",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Aoc2.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
