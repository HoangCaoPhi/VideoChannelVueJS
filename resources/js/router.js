import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import * as auth from './services/auth_service';

Vue.use(Router);
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

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
        component: () => import('./views/Dashboard'),

        beforeEnter(to, from, next) {
            if (auth.checkUser() === 'user') {
                next();
            }
            else {
                next('/admin');
            }
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('./admin/HomeAdmin'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('./admin/Dashboard')
            },
            {
                path: 'videos',
                name: 'videos',
                component: () => import('./admin/videos/Video')
            }
            ,
            {
                path: 'users',
                name: 'users',
                component: () => import('./admin/users/User')
            },
        ],
        beforeEnter(to, from, next) {
            if (auth.checkUser() === 'user') {
                next('/');
            }
            else if (auth.checkUser() === 'administrator') {
                next();
            }

        }
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
        component: () => import('./views/video/VideoSearch'),
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