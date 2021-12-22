import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/day1",
        name: "day1",
        component: () => import("../views/Day1.vue"),
    },
    {
        path: "/day2",
        name: "day2",
        component: () => import("../views/Day2.vue"),
    },
    {
        path: "/day3",
        name: "day3",
        component: () => import("../views/Day3.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
