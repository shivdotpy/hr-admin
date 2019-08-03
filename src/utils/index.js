const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const jsonApiHeader = (accessToken, ContentType) => {
    return {
        'Content-Type': ContentType,
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
    };
};

export const getAccessTokenFromLocalStorage = () => {
    return localStorage.getItem('admin_token')
}

export function createRequestActionTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((requestTypes, type) => {
        requestTypes[type] = `${base}_${type}`;
        return requestTypes;
    }, {});
}

export function actionCreator(actionType, data) {
    return {
        type: actionType,
        payload: data,
    };
}