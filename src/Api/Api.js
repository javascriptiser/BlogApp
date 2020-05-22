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
    },
    putNewPost(idUser, title, content) {
        let str = `idUser=${idUser}&title=${title}&content=${content}`
        return axios({
            method: 'put',
            url: baseURL + 'my-posts',
            data: str,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(response => {
            return response
        })
    },
    editPost(idPost, title, content) {
        let str = `idPost=${idPost}&title=${title}&content=${content}`
        return axios({
            method: 'post',
            url: baseURL + 'my-posts',
            data: str,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(response => {
            return response
        })
    },
    getPostById(idPost) {
        return axios.get(baseURL + `my-posts/${idPost}`)
            .then(response => {
                return response.data.post;
            });
    },
    deletePostById(idPost) {
        let str = `idPost=${idPost}`
        return axios({
            method: 'delete',
            url: baseURL + 'my-posts',
            data: str,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(response => {
            return response
        })
    },

}

export const profileAPI = {
    getAllMyPosts(idUser) {
        return axios.get(`http://api.com:4000/api/user/${idUser}`)
            .then(response => {
                return response.data.users.user[0].posts
            });
    },
    getMyProfile(idUser) {
        return axios.get(`http://api.com:4000/api/user/${idUser}`)
            .then(response => {
                return response.data.users.user[0]
            });
    },
    editMyProfile(idUser, fname, lname, email, login, password) {
        let str = `par=${idUser}&fname=${fname}&lname=${lname}&email=${email}&login=${login}&pass=${password}`
        return axios({
            method: 'put',
            url: baseURL + 'users/edit',
            data: str,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(response => {
            return response
        })
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
    },
    registery(fname, lname, email, login, password) {
        debugger
        let str = `fname=${fname}&lname=${lname}&email=${email}&login=${login}&pass=${password}`
        return axios({
            method: 'put',
            url: baseURL + 'users',
            data: str,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(response => {
            return response
        })
    }

}