import { createRequestActionTypes, API_BASE_URL } from "../../../utils";

export const EMPLOYEES_LIST_API = `${API_BASE_URL}/api/employee`;
export const ADD_EMPLOYEE_API = `${API_BASE_URL}/api/employee`;
export const DELETE_EMPLOYEE_API = `${API_BASE_URL}/api/employee`;
export const GET_EMPLOYEE_BY_ID_API = `${API_BASE_URL}/api/employee`; 
export const UPDATE_EMPLOYEE_BY_ID = `${API_BASE_URL}/api/employee`;


export const employeesActionTypes = {
    all_employees_list: createRequestActionTypes('EMPLOYEES_LIST'),
    add_employee: createRequestActionTypes('ADD_EMPLOYEE'),
    delete_employee: createRequestActionTypes('DELETE_EMPLOYEE'),
    get_employee_by_id: createRequestActionTypes('GET_EMPLOYEE_BY_ID'),
    update_employee_by_id: createRequestActionTypes('UPDATE_EMPLOYEE_BY_ID')
}