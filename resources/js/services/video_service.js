import { http, httpFile } from './http_service';

export function createVideo(data) {
    return httpFile().post('/videos', data);
}

export function loadVideo() {
    return http().get('/videos');
}

export function loadVideoProfile(id) {
    return http().get(`/profile/${id}`);
}


export function deleteVideo(id) {
    return http().delete(`/videos/${id}`);
}

export function updateVideo(id, data) {
    return httpFile().post(`videos/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`videos?page=${nextPage}`);
}

export function getDetail(id) {
    console.log(id);
    return http().get(`/videos/${id}`);
}
