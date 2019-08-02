import { combineReducers } from "redux";
import LoginReducer from '../containers/Login/reducers';

const rootReducer = (state, action) => {
    return appReducers(state, action);
};

const appReducers = combineReducers({
    login: LoginReducer
})

export default rootReducer;