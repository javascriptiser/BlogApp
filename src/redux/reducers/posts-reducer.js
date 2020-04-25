const SHOW_POSTS = 'SHOW_POSTS'
const SET_PAGE = 'SET_PAGE'

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
        default:
            return state
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