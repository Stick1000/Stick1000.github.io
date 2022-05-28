import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/details",
            name: "details",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
    ],
    scrollBehavior(to) {
        let position;

        if (to.name === "details") {
            position = { el: "#details" };
        } else if (to.name === "about") {
            position = { el: "#about" };
        } else {
            position = { left: 0, top: 0 };
        }

        return {
            ...position,
            behavior: "smooth",
        };
    },
});

export default router;
