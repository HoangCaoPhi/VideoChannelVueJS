import { http, httpFile } from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store'

export function register(user) {
    return http().post('/auth/register', user);
}

export function login(user) {
    return http().post('/auth/login', user)
            .then(response => {
                if (response.status === 200) {
                    setToken(response.data);
                }

                return response.data;
            });
}
function setToken(user) {
    // ,  JSON.stringify(user)
    const token = jwt.sign({ user: user }, 'laravuespahcp');
    localStorage.setItem('laravel-vue-spa-token', token);
    store.dispatch('authenticate', user.user);

}

export function isLoggedIn() {
    const token = localStorage.getItem('laravel-vue-spa-token');
    return token != null;
}

export function getProfile() {
    return http().get('/auth/profile');
}

export function logout() {
    http().get('/auth/logout');
    localStorage.removeItem('laravel-vue-spa-token');
}
export function getAccessToken() {
    const token = localStorage.getItem('laravel-vue-spa-token');
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    console.log(tokenData.user.token_scope);
  
    return tokenData.user.access_token;
}

export function checkUser() {
    const token = localStorage.getItem('laravel-vue-spa-token');
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    console.log(tokenData.user.token_scope);
  
    return tokenData.user.token_scope;
}

