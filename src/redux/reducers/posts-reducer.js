const SHOW_POSTS = 'SHOW_POSTS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_POSTS_COUNT = 'SET_TOTAL_POSTS_COUNT'

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
        default:
            return state
    }
}
export const setTotalPostsCount= (count) => {
    return {
        type: SET_TOTAL_POSTS_COUNT,
        totalPostsCount: count
    }
}
export const setPage= (page) => {
    return {
        type: SET_PAGE,
        currentPage: page
    }
}
export const showPosts = (posts) => {
    return {
        type: SHOW_POSTS,
        posts: posts
    }
}


export default postsReducer;