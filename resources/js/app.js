
require('./bootstrap');
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

