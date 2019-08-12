import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils'
import { manageQuizActionTypes,ALL_QUESTIONS_API } from '../constants';
import axios from 'axios';

export const getAllQuestions = () => {
    return (dispatch) => {
        dispatch(actionCreator(manageQuizActionTypes.all_questions_list.REQUEST))
        axios.get(ALL_QUESTIONS_API, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
            .then(response => {
                dispatch(actionCreator(manageQuizActionTypes.all_questions_list.SUCCESS, response.data.data))
            })
            .catch(error => {
                dispatch(actionCreator(manageQuizActionTypes.all_questions_list.FAILURE))
            })
    }
}