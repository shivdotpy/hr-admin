import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import LoginReducer from '../containers/Login/reducers';
import EmployeesReducer from '../containers/Employees/reducers';
import QuizReducer from '../containers/Quiz/reducers';

const rootReducer = (state, action) => {
    return appReducers(state, action);
};

const appReducers = combineReducers({
    login: LoginReducer,
    employee: EmployeesReducer,
    form: formReducer,
    quiz: QuizReducer
})

export default rootReducer;