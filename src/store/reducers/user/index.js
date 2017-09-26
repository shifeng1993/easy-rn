import * as types from '../../constants/actionTypes';
import userState from '../../states/user';

export default function user(state = userState, action) {
    switch (action.type) {
        case types.SET_USERINFO:
            return {
                ...state,
                userinfo: action.data
            };
        default:
            return state;
    }
}