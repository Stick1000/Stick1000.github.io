import { createRouter, createWebHistory } from "vue-router";
import Header from "../components/Header.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Header,
        },
        {
            path: "/details",
            name: "details",
            component: () => import("../views/DetailsView.vue"),
        },
        {
            path: "/about",
            name: "about",
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
