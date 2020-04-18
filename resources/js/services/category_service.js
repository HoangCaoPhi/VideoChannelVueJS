import { http, httpFile } from './http_service';

export function createCategory(data) {
    return httpFile().post('/categories', data);
}

export function loadCategory() {
    return http().get('/categories');
}

export function loadCategoryProfile(id) {
    return http().get(`/profile/${id}`);
}


export function deleteCategory(id) {
    return http().delete(`/categories/${id}`);
}

export function updateCategory(id, data) {
    return httpFile().post(`categories/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`categories?page=${nextPage}`);
}

export function getDetail(id) {

    // GET|HEAD  | api/categories/{category}      | categories.show
    console.log(id);
    return http().get(`/categories/${id}`);
}
