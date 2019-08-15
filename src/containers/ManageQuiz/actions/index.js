import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils'
import { manageQuizActionTypes,ALL_QUESTIONS_API, ADD_QUESTION_API } from '../constants';
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

export const addQuestion = (formData) => {
    return (dispatch) => {
        dispatch(actionCreator(manageQuizActionTypes.add_question.REQUEST))

        // ADD QUESTION WITH OPTIONS AND SKILL
        axios.post(ADD_QUESTION_API, formData, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
            .then(response => {
                dispatch(actionCreator(manageQuizActionTypes.add_question.SUCCESS, true))
            })
            .catch(error => {
                dispatch(actionCreator(manageQuizActionTypes.add_question.FAILURE))
            })
    }
}