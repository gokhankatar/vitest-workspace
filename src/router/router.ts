import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AppView from '../views/AppView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/app', component: AppView }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

