import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import * as auth from './services/auth_service';

Vue.use(Router);

const routes = [
    {
        path: '/profile',
        name: 'video',
        component: () => import('./views/video/Videos'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next('/login');
            }
            else {
                next();
            }
        }
    },
    {
        path: '/',
        name: 'dashboard',
        component: () => import('./views/Dashboard')
    },
    {
        path: '/video/:id',
        name: 'detail',
        component: () => import('./views/video/DetailVideos'),
        props: true
    },
    {
        path: '/search/:nameSearch',
        name: 'search',
        component:() => import('./views/video/VideoSearch'),
        props: true
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentication/Register')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            }
            else {
                next('/');
            }
        }
    }
    ,
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword')
    }

]

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});
export default router;