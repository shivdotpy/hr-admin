import { candidateActionTypes } from '../constants';

const initialState = {
    add_candidate: false,
    skills: [],
    questions_based_on_skill: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case candidateActionTypes.add_candidate.REQUEST:
            return {
                ...state,
                loading: true,
                add_candidate: false
            }
        case candidateActionTypes.add_candidate.SUCCESS:
            return {
                ...state,
                loading: false,
                add_candidate: true
            }
        case candidateActionTypes.add_candidate.FAILURE:
            return {
                ...state,
                loading: false,
                add_candidate: false
            }
        case candidateActionTypes.get_skill.REQUEST:
            return {
                ...state,
                loading: true,
                skills: []
            }
        case candidateActionTypes.get_skill.SUCCESS:
            return {
                ...state,
                loading: false,
                skills: payload
            }
        case candidateActionTypes.get_skill.FAILURE:
            return {
                ...state,
                loading: false,
                skills: []
            }

        case candidateActionTypes.get_question_based_on_skills_api.REQUEST:
            return {
                ...state,
                loading: true,
                questions_based_on_skill: []
            }
        case candidateActionTypes.get_question_based_on_skills_api.SUCCESS:
            return {
                ...state,
                loading: false,
                questions_based_on_skill: payload
            }
        case candidateActionTypes.get_question_based_on_skills_api.FAILURE:
            return {
                ...state,
                loading: false,
                questions_based_on_skill: []
            }
        
        default:
            return state
    }
}