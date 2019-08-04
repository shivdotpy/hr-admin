import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import LoginReducer from '../containers/Login/reducers';
import EmployeesReducer from '../containers/Employees/reducers';

const rootReducer = (state, action) => {
    return appReducers(state, action);
};

const appReducers = combineReducers({
    login: LoginReducer,
    employee: EmployeesReducer,
    form: formReducer
})

export default rootReducer;