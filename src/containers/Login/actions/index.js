import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from "../../../utils";
import { loginActionTypes, ADMIN_LOGIN_API } from "../constants";

export const adminLogin = (data) => {
    return (dispatch) => {
        dispatch(actionCreator(loginActionTypes.admin_login.REQUEST))
        fetch(`${ADMIN_LOGIN_API}`, {
            method: 'POST',
            headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json'),
            body: JSON.stringify(data),
        })
        .then(response => console.log(response))
        .catch(error => {
            console.log('error', error)
        })
    }
}