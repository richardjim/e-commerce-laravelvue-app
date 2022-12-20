import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/Dashboard.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
    },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
