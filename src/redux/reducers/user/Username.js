import { types } from '../../actions/autorisation/Types'

const initialState = {
    isFetching: true,
    user: null,
    error: null,
    isRefreshUserFailed: false,
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.USER.REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case types.USER.RESPONSE:
            return {
                ...state,
                user: action.data,
                isFetching: false,
                isRefreshUserFailed: false,
            }
        case types.REFRESH.ACTION:
            return {
                ...state,
                isFetching: true,
                isRefreshUserFailed: false,
            }
        case types.REFRESH.FAIL:
            return {
                ...state,
                isFetching: false,
                isRefreshUserFailed: true,
            }
        case types.USER.ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        default:
            return state
    }
}
