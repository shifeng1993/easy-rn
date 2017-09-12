import * as types from '../../constants/actionTypes';
import userState from '../../states/user';

export default function user(state = userState, action) {
    switch (action.type) {
        case types.SET_GOODS:
            return {
                ...state,
                goods: action.data
            };
        default:
            return state;
    }
}