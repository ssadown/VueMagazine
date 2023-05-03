import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import Product from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import CartConfirm from "@/pages/CartConfirm";
import orderPage from "@/pages/orderPage";

Vue.use(VueRouter);

const routes = [
    {name: 'main', component: MainPage, path: '/'},
    {name: 'product', component: Product, path: '/product/:id'},
    {name: 'notFound', component: NotFoundPage, path: '*'},
    {name: 'cart', component: CartPage, path:'/cart'},
    {name: 'confirm', component: CartConfirm, path: '/confirm'},
    {name: 'order', component: orderPage, path: '/order'},
];

const router = new VueRouter({
    routes
});

export default router;