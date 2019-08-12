import { createRequestActionTypes, API_BASE_URL } from "../../../utils";

export const ALL_QUESTIONS_API = `${API_BASE_URL}/api/quiz/all-questions`;

export const manageQuizActionTypes = {
    all_questions_list: createRequestActionTypes('ALL_QUESTIONS_LIST')
}