import {postsAPI} from "../../Api/Api";
import {setPostsThunkCreator} from "./profile-reducer";

const SET_POSTS = 'SET_POSTS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const CHANGE_POSTS_COUNT = 'CHANGE_POSTS_COUNT'
const SET_ADD_SUCCESS = 'SET_ADD_SUCCESS'
const SET_EDIT_POST = 'SET_EDIT_POST'
let initialState = {
    posts: [],
    postsCount: 1,
    currentPage: 1,
    postsOnPage: 3,
    addSuccess: false,
    editPost: {}
}


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        case SET_EDIT_POST: {
            return {
                ...state,
                editPost: action.editPost
            }
        }
        case CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case CHANGE_POSTS_COUNT: {
            return {
                ...state,
                postsCount: action.postsCount
            }
        }
        case SET_ADD_SUCCESS: {
            return {
                ...state,
                addSuccess: action.addSuccess
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    }
}
export const setEditPost = (editPost) => {
    return {
        type: SET_EDIT_POST,
        editPost
    }
}
export const setAddSuccess = (addSuccess) => {
    return {
        type: SET_ADD_SUCCESS,
        addSuccess
    }
}
export const changePostsCount = (postsCount) => {
    return {
        type: CHANGE_POSTS_COUNT,
        postsCount
    }
}
export const changeCurrentPage = (currentPage) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        currentPage
    }
}
export const getPostsThunkCreator = (currentPage, postsOnPage) => {
    return (dispatch) => {
        postsAPI.getAllPosts(currentPage, postsOnPage)
            .then(response => {
                dispatch(setPosts(response.results))
                dispatch(changePostsCount(response.length))
            })
    }
}
export const putNewPostThunkCreator = (idUser, title, content) => {
    return (dispatch) => {
        postsAPI.putNewPost(idUser, title, content)
            .then(response => {
                dispatch(setPostsThunkCreator(idUser))
                dispatch(setAddSuccess(true))
            })
    }
}
export const deletePostThunkCreator = (idPost,idUser) => {
    return (dispatch) => {
        postsAPI.deletePostById(idPost)
            .then(response => {
                dispatch(setPostsThunkCreator(idUser))
            })
    }
}
export const editPostThunkCreator = (idUser, idPost, title, content) => {
    return (dispatch) => {
        postsAPI.editPost(idPost, title, content)
            .then(response => {
                dispatch(setPostsThunkCreator(idUser))
                dispatch(setAddSuccess(true))
            })
    }
}
export const getPostByIdThunkCreator = (idPost) => {
    return (dispatch) => {
        postsAPI.getPostById(idPost)
            .then(response => {
                dispatch(setEditPost(response))
            })
    }
}
export const postsPageChangeThunkCreator = (currentPage, postsOnPage) => {
    return (dispatch) => {
        dispatch(changeCurrentPage(currentPage))
        postsAPI.getAllPosts(currentPage, postsOnPage)
            .then(response => {
                dispatch(setPosts(response.results))
            })
    }
}

export default postsReducer