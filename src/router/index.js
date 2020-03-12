import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/variables',
        name: 'Variables',
        component: () => import('../views/Variables.vue')
    },
    {
        path: '/mixin',
        name: 'Mixin',
        component: () => import('../views/Mixin.vue')
    },
    {
        path: '/nesting',
        name: 'Nesting',
        component: () => import('../views/Nesting.vue')
    },
    {
        path: '/operations',
        name: 'Operations',
        component: () => import('../views/Operations.vue')
    },
    {
        path: '/escaping',
        name: 'Escaping',
        component: () => import('../views/Escaping.vue')
    },
    {
        path: '/functions',
        name: 'Functions',
        component: () => import('../views/Functions.vue')
    },
    {
        path: '/namespace',
        name: 'Namespace',
        component: () => import('../views/Namespace.vue')
    },
    {
        path: '/scope',
        name: 'Scope',
        component: () => import('../views/Scope.vue')
    },
];

const router = new VueRouter({
    routes
});

export default router
