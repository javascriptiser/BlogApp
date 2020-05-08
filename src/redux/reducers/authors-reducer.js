import {authorsAPI} from "../../Api/Api";

const SET_AUTHORS = 'SET_AUTHORS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const CHANGE_AUTHORS_COUNT = 'CHANGE_AUTHORS_COUNT'
let initialState = {
    authors: [],
    authorsCount: 1,
    currentPage: 1,
    authorsOnPage: 3
}


const authorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORS: {
            return {
                ...state,
                authors: action.authors
            }
        }
        case CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case CHANGE_AUTHORS_COUNT: {
            return {
                ...state,
                authorsCount: action.authorsCount
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setAuthors = (authors) => {
    return {
        type: SET_AUTHORS,
        authors
    }
}
export const changeAuthorsCount = (authorsCount) => {
    return {
        type: CHANGE_AUTHORS_COUNT,
        authorsCount
    }
}
export const changeCurrentPage = (currentPage) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        currentPage
    }
}

export const getAuthorsThunkCreator = (currentPage, authorsOnPage) => {
    return (dispatch) => {
        authorsAPI.getAllAuthors(currentPage, authorsOnPage)
            .then(response => {
                dispatch(setAuthors(response.results))
                dispatch(changeAuthorsCount(response.length))
            })
    }
}
export const changeAuthorsPageThunkCreator = (currentPage, authorsOnPage) => {
    return (dispatch) => {
        dispatch(changeCurrentPage(currentPage))
        authorsAPI.getAllAuthors(currentPage,authorsOnPage)
            .then(response => {
                dispatch(setAuthors(response.results))
            })
    }
}

export default authorsReducer
