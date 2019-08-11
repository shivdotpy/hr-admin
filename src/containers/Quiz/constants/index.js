import { createRequestActionTypes, API_BASE_URL } from "../../../utils";

export const ADD_CANDIDATE_API = `${API_BASE_URL}/api/candidate`;
export const GET_SKILLS_API = `${API_BASE_URL}/api/quiz/skills`;
export const GET_QUESTION_BASED_ON_SKILLS_API = `${API_BASE_URL}/api/quiz/questions`;

export const candidateActionTypes = {
    add_candidate: createRequestActionTypes('ADD_EMPLOYEE'),
    get_skill: createRequestActionTypes('GET_SKILLS'),
    get_question_based_on_skills_api: createRequestActionTypes('GET_QUESTION_BASED_ON_SKILLS')
}