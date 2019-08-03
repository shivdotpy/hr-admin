import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from "../../../utils";
import { loginActionTypes, ADMIN_LOGIN_API } from "../constants";
import axios from 'axios';
import Alert from 'react-s-alert';

export const adminLogin = (data, history) => {
    return (dispatch) => {
        dispatch(actionCreator(loginActionTypes.admin_login.REQUEST))
        
        // API Request
        axios.post(ADMIN_LOGIN_API, data)
        .then((response) => {
            localStorage.setItem('admin_token', response.data.token)
            history.push('/employees')
            dispatch(actionCreator(loginActionTypes.admin_login.SUCCESS))
            Alert.success('Logged in successfully ', {
                position: 'top-right',
                effect: 'slide',
                timeout: 2000
            });
        })
        .catch((error) => {
            dispatch(actionCreator(loginActionTypes.admin_login.FAILURE))
            Alert.error(error.response.data.message, {
                position: 'top-right',
                effect: 'slide',
                timeout: 2000
            });
        })
        
        // fetch(`${ADMIN_LOGIN_API}`, {
        //     method: 'POST',
        //     headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json'),
        //     body: JSON.stringify(data),
        // })
        //     .then(response => response.json())
        //     .then(response => {
        //         debugger;
        //         if (response.status === 200 || response.status === 201) {
        //             localStorage.setItem('admin_token', response.token)
        //             dispatch(actionCreator(loginActionTypes.admin_login.SUCCESS, response))
        //         }
        //     })
        //     .catch(error => {
        //         dispatch(actionCreator(loginActionTypes.admin_login.FAILURE))
        //     })
    }
}