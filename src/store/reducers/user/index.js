import * as types from '../../constants/actionTypes';
import userState from '../../states/user';

export default function user(state = userState, action) {
    switch (action.type) {
        case types.SET_USERINFO:
            return {
                ...state,
                userinfo: action.data
            };
        case types.SET_USERUUID:
            return {
                ...state,
                useruuid: action.data
            };
        case types.SET_NICKNAME:
            return {
                ...state,
                isNickname: action.data
            };
        default:
            return state;
    }
}