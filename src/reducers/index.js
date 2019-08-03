import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import LoginReducer from '../containers/Login/reducers';

const rootReducer = (state, action) => {
    return appReducers(state, action);
};

const appReducers = combineReducers({
    login: LoginReducer,
    form: formReducer
})

export default rootReducer;