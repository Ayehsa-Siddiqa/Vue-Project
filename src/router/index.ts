import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Navigation Guard
router.beforeEach((to, _from, next) => {
    const isAuthenticated = false;
    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: "Home" });
    } else {
        next();
    }
});

export default router;
