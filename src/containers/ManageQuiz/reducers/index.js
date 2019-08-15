import { manageQuizActionTypes } from '../constants'

const initialState = {
    loading: false,
    all_question_list: [],
    add_question: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case manageQuizActionTypes.all_questions_list.REQUEST:
            return {
                ...state,
                loading: true,
                all_question_list: []
            }
        case manageQuizActionTypes.all_questions_list.SUCCESS:
            return {
                ...state,
                loading: false,
                all_question_list: payload
            }
        case manageQuizActionTypes.all_questions_list.FAILURE:
            return {
                ...state,
                loading: false,
                all_question_list: []
            }
        case manageQuizActionTypes.add_question.REQUEST:
            return {
                ...state,
                loading: true,
                add_question: false
            }
        case manageQuizActionTypes.add_question.SUCCESS:
            return {
                ...state,
                loading: false,
                add_question: true
            }
        case manageQuizActionTypes.add_question.FAILURE:
            return {
                ...state,
                loading: false,
                add_question: false
            }
        default:
            return state
    }
}