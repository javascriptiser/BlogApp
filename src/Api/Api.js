import * as axios from "axios";
import * as querystring from "querystring";

const baseURL = 'http://api.com:4000/api/';

export const authorsAPI = {
    getAllAuthors(currentPage, authorsOnPage) {
        return axios.get(baseURL + `users?page=${currentPage}&count=${authorsOnPage}`)
            .then(response => {
                return response.data;
            });
    }
}

export const postsAPI = {
    getAllPosts(currentPage, postsOnPage) {
        return axios.get(baseURL + `posts?page=${currentPage}&count=${postsOnPage}`)
            .then(response => {
                return response.data;
            });
    }

}

export const profileAPI = {
    getAllMyPosts(idUser) {
        return axios.get(`http://api.com:4000/api/user/${idUser}`)
            .then(response => {
                return response.data.users.user[0].posts
            });
    },
    getMyProfile(idUser){
        return axios.get(`http://api.com:4000/api/user/${idUser}`)
            .then(response => {
                return response.data.users.user[0]
            });
    }
}

export const authAPI = {
    logIn(bodyParams) {
        let str = querystring.stringify(bodyParams);
        return axios({
            method: 'post',
            url: baseURL + 'auth',
            data: str,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(response => {
            return response.data;
        })
    }
}