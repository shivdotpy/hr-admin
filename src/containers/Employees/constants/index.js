import { createRequestActionTypes, API_BASE_URL } from "../../../utils";

export const EMPLOYEES_LIST_API = `${API_BASE_URL}/api/employee`;
export const ADD_EMPLOYEE_API = `${API_BASE_URL}/api/employee`;

export const employeesActionTypes = {
    all_employees_list: createRequestActionTypes('EMPLOYEES_LIST'),
    add_employee: createRequestActionTypes('ADD_EMPLOYEE')
}