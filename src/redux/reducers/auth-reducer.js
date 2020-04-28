const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SET_ERROR_TEXT = 'SET_ERROR_TEXT'


let initialState = {
    authData: {},
    currentUser:{},
    errorText:''
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                authData: action.authData
            }
        }
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.currentUser
            }
        }
        case SET_ERROR_TEXT: {
            return {
                ...state,
                errorText: action.errorText
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
export const setAuthData = (authData) => {
    return {
        type: SET_AUTH_DATA,
        authData
    }
}
export const setErrorText = (errorText) => {
    return {
        type: SET_ERROR_TEXT,
        errorText
    }
}
export const setCurrentUser = (currentUser) => {
    return {
        type: SET_CURRENT_USER,
        currentUser
    }
}
export default authReducer