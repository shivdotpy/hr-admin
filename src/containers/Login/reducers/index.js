import {loginActionTypes} from '../constants';

const initialState = {
    loading: false
}

export default (state=initialState, {type, payload}) => {
    switch(type) {
        case loginActionTypes.admin_login.REQUEST:
            return {
                ...state,
                loading: true
            }
        case loginActionTypes.admin_login.SUCCESS:
            return {
                ...state,
                loading: false
            }
        case loginActionTypes.admin_login.FAILURE:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}