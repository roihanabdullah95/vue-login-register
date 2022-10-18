// import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/view/Home.vue"
import AboutPage from "@/view/About.vue"
import ContactPage from "@/view/Contact.vue"
import ProdukPage from "@/view/Produk.vue"
import DetailPage from "@/view/Detail.vue"
import Login from "@/components/Login.vue"
import Register from "@/components/Register.vue"
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "LoginPage",
        component: Login
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: Register
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: ContactPage
    },
    {
        path: "/produk",
        name: "ProdukPage",
        component: ProdukPage
    },
    {
        path: "/detail",
        name: "DetailPage",
        component: DetailPage
    },

];

const router = new Router({
    routes,
    mode: "history",
});

export default router;