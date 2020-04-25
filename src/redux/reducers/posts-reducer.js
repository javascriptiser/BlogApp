const SHOW_POSTS = 'SHOW_POSTS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_POSTS_COUNT = 'SET_TOTAL_POSTS_COUNT'
const DELETE_POST_BY_ID = 'DELETE_POST_BY_ID'

let initialState = {
    posts: [],
    pageSize: 3,
    totalPostsCount: 10,
    currentPage: 1
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_POSTS: {
            return {
                ...state,
                posts: [...action.posts]
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                currentPage : action.currentPage
            }
        }
        case SET_TOTAL_POSTS_COUNT: {
            return {
                ...state,
                totalPostsCount : action.totalPostsCount
            }
        }
        case DELETE_POST_BY_ID: {
            return {
                ...state,
                id : action.id
            }
        }
        default:
            return state
    }
}
export const deletePostById = (id) =>{
    return {
        type: DELETE_POST_BY_ID,
        id : id
    }
}
export const setTotalPostsCountAC= (count) => {
    return {
        type: SET_TOTAL_POSTS_COUNT,
        totalPostsCount: count
    }
}
export const setPageAC = (page) => {
    return {
        type: SET_PAGE,
        currentPage: page
    }
}
export const showPostsAC = (posts) => {
    return {
        type: SHOW_POSTS,
        posts: posts
    }
}


export default postsReducer;