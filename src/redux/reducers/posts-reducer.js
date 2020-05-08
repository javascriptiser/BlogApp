import {postsAPI} from "../../Api/Api";

const SET_POSTS = 'SET_POSTS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const CHANGE_POSTS_COUNT = 'CHANGE_POSTS_COUNT'
let initialState = {
    posts: [],
    postsCount: 1,
    currentPage: 1,
    postsOnPage: 3
}


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
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