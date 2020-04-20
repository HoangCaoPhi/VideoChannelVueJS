//vuex
import Vue from 'vue';
import VueX from 'vuex';
import * as auth from './services/auth_service';

var host = window.location.hostname;
var port = window.location.port;
console.log(host);

Vue.use(VueX);
export default new VueX.Store({
    state: {
        isLoggedIn: null,
        apiUrl: 'https://' + host + ':' + port + '/api',
        serverPath: 'https://' + host + ':' + port,
        profile: {},
    },
    mutations: {
        authenticate(state, payload) {
            state.isLoggedIn = auth.isLoggedIn();
            if (state.isLoggedIn) {
                state.profile = payload;
            }
            else {
                state.profile = {};
            }
        }
    },
    actions: {
        authenticate(context, payload) {
            context.commit('authenticate', payload);
        }
    }
});