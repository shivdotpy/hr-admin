import axios from "axios";
import { employeesActionTypes, EMPLOYEES_LIST_API, ADD_EMPLOYEE_API } from '../constants'
import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils'
import Alert from 'react-s-alert'


export const getAllEmployees = () => {
    return (dispatch) => {
        dispatch(actionCreator(employeesActionTypes.all_employees_list.REQUEST))

        // GET EMPLOYEES API
        axios.get(EMPLOYEES_LIST_API, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
            .then(response => {
                dispatch(actionCreator(employeesActionTypes.all_employees_list.SUCCESS, response.data.data))
            })
            .catch(error => {
                dispatch(actionCreator(employeesActionTypes.all_employees_list.FAILURE))
            })
    }
}

export const saveEmployee = (data) => {
    return (dispatch) => {
        dispatch(actionCreator(employeesActionTypes.add_employee.REQUEST))

        // SAVE EMPLOYEE API
        axios.post(ADD_EMPLOYEE_API, data, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
            .then(response => {
                dispatch(actionCreator(employeesActionTypes.add_employee.SUCCESS))
                Alert.success(response.data.message, {
                    position: 'top-right',
                    effect: 'slide',
                    timeout: 1000
                })
            })
            .catch(error => {
                dispatch(actionCreator(employeesActionTypes.add_employee.FAILURE))
                Alert.error(error.response.data.message, {
                    position: 'top-right',
                    effect: 'slide',
                    timeout: 2000
                });
            })
    }
}
