import axios from "axios";
import {
    employeesActionTypes,
    EMPLOYEES_LIST_API,
    ADD_EMPLOYEE_API,
    DELETE_EMPLOYEE_API,
    GET_EMPLOYEE_BY_ID_API
} from '../constants'
import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils'
import Alert from 'react-s-alert'
import {reset} from 'redux-form';


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
                dispatch(reset('employeeForm'));
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

export const getEmployeeById = (empId) => {
    return (dispatch) => {
        dispatch(actionCreator(employeesActionTypes.get_employee_by_id.REQUEST))
        axios.get(`${GET_EMPLOYEE_BY_ID_API}/${empId}`, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
        .then(response => {
            dispatch(actionCreator(employeesActionTypes.get_employee_by_id.SUCCESS, response.data.data))
        })
        .catch(error => {
            dispatch(actionCreator(employeesActionTypes.get_employee_by_id.FAILURE))
        })
    }
}

export const deleteEmployee = (empId) => {
    return (dispatch) => {
        dispatch(actionCreator(employeesActionTypes.delete_employee.REQUEST))
        axios.delete(`${DELETE_EMPLOYEE_API}/${empId}`, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
        .then(response => {
            dispatch(actionCreator(employeesActionTypes.delete_employee.SUCCESS))
            Alert.success(response.data.message, {
                position: 'top-right',
                effect: 'slide',
                timeout: 1000
            })
        })
        .catch(error => {
            dispatch(actionCreator(employeesActionTypes.delete_employee.FAILURE))
            Alert.error(error.response.data.message, {
                position: 'top-right',
                effect: 'slide',
                timeout: 2000
            });
        })
    }
}


export const clearEmployeeForm = () => {
    return (dispatch) => {
        dispatch(actionCreator(employeesActionTypes.get_employee_by_id.REQUEST))
    }
}