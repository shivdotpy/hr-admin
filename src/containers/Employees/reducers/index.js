import { employeesActionTypes } from "../constants";

const initialState = {
    loading: false,
    employees_list: [],
    add_employee: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case employeesActionTypes.all_employees_list.REQUEST:
            return {
                ...state,
                loading: true,
                employees_list: []
            }
        case employeesActionTypes.all_employees_list.SUCCESS:
            return {
                ...state,
                loading: false,
                employee_list: payload
            }
        case employeesActionTypes.all_employees_list.FAILURE:
            return {
                ...state,
                loading: true,
                employees_list: []
            }
        case employeesActionTypes.add_employee.REQUEST:
            return {
                ...state,
                loading: true,
                add_employee: false
            }
        case employeesActionTypes.add_employee.SUCCESS:
            return {
                ...state,
                loading: false,
                add_employee: true
            }
        case employeesActionTypes.add_employee.FAILURE:
            return {
                ...state,
                loading: true,
                add_employee: false
            }
        default:
            return state
    }
}