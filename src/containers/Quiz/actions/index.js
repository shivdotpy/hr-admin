import axios from 'axios';
import {
    ADD_CANDIDATE_API,
    candidateActionTypes,
    GET_SKILLS_API,
    GET_QUESTION_BASED_ON_SKILLS_API
} from '../constants';
import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils'

export const saveCandidate = (data) => {
    return (dispatch) => {
        dispatch(actionCreator(candidateActionTypes.add_candidate.REQUEST))

        // SAVE CANDIDATE
        axios.post(ADD_CANDIDATE_API, data, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
            .then(response => {
                dispatch(actionCreator(candidateActionTypes.add_candidate.SUCCESS))
            })
            .catch(error => {
                dispatch(actionCreator(candidateActionTypes.add_candidate.FAILURE))
            })
    }
}

export const getSkills = () => {
    return (dispatch) => {
        dispatch(actionCreator(candidateActionTypes.get_skill.REQUEST))

        // GET SKILLS
        axios.get(GET_SKILLS_API, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
            .then(response => {
                dispatch(actionCreator(candidateActionTypes.get_skill.SUCCESS, response.data.data))
            })
            .catch(error => {
                dispatch(actionCreator(candidateActionTypes.get_skill.FAILURE))
            })
    }
}

export const getQuestionBySkill = (skill) => {
    return (dispatch) => {
        dispatch(actionCreator(candidateActionTypes.get_question_based_on_skills_api.REQUEST))

        // GET QUESTIONS BY SKILL
        axios.get(`${GET_QUESTION_BASED_ON_SKILLS_API}/${skill}`, { headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json') })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    }
} 