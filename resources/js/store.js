//vuex
import Vue from 'vue';
import VueX from 'vuex';
import * as auth from './services/auth_service';

Vue.use(VueX);
export default new VueX.Store({
    state:{
        isLoggedIn: null,
        apiUrl: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000',
        profile: {},
    },
    mutations:{
        authenticate(state, payload) {
            state.isLoggedIn = auth.isLoggedIn();
            if(state.isLoggedIn) {
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