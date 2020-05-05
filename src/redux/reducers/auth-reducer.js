const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SET_ERROR_TEXT = 'SET_ERROR_TEXT'
const CHANGE_LOGIN_TEXT = 'CHANGE_LOGIN_TEXT'
const CHANGE_PASSWORD_TEXT = 'CHANGE_PASSWORD_TEXT'
const CHANGE_REMEMBER_ME_RADIO_BUTTON = 'CHANGE_REMEMBER_ME_RADIO_BUTTON'


let initialState = {
    authData: {},
    currentUser:{},
    errorText:'',
    loginText:'',
    passwordText:'',
    rememberMeRadioButton:false
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
        case CHANGE_LOGIN_TEXT: {
            return {
                ...state,
                loginText: action.loginText
            }
        }
        case CHANGE_PASSWORD_TEXT: {
            return {
                ...state,
                passwordText: action.passwordText
            }
        }
        case CHANGE_REMEMBER_ME_RADIO_BUTTON: {
            return {
                ...state,
                rememberMeRadioButton: action.rememberMeRadioButton
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
export const changeLoginText = (loginText) => {
    return {
        type: CHANGE_LOGIN_TEXT,
        loginText
    }
}
export const changePasswordText = (passwordText) => {
    return {
        type: CHANGE_PASSWORD_TEXT,
        passwordText
    }
}
export const changeRememberMeRadioButton = (rememberMeRadioButton) => {
    return {
        type: CHANGE_REMEMBER_ME_RADIO_BUTTON,
        rememberMeRadioButton
    }
}
export default authReducer