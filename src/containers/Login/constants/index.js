import {createRequestActionTypes} from '../../../utils/';

export const ADMIN_LOGIN_API = 'http://localhost:8080/api/admin/login';

export const loginActionTypes = {
    admin_login: createRequestActionTypes('ADMIN_LOGIN')
}
