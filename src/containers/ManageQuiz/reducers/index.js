import { manageQuizActionTypes } from '../constants'

const initialState = {
    loading: false,
    all_question_list: []
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
        default:
            return state
    }
}