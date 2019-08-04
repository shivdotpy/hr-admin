import {createRequestActionTypes, API_BASE_URL} from '../../../utils/';

export const ADMIN_LOGIN_API = `${API_BASE_URL}/api/admin/login`;

export const loginActionTypes = {
    admin_login: createRequestActionTypes('ADMIN_LOGIN')
}
